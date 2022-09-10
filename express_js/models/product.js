// const product = [];
const e = require('express');
const fs = require('fs');

const path = require('path');
const { createBrotliCompress } = require('zlib');
const rootDir = require('../util/path');


const getProductFromFile = (cb) => {
    const p = path.join(rootDir, 'data', 'product.json');
    fs.readFile(p, (err, fileContent) => {
        if (!err && fileContent.length > 0)
            return cb(JSON.parse(fileContent));
        else
            cb([]);
    });
}

module.exports = class Product{
    constructor(t)
    {
        this.title = t;
    }

save()
{
    getProductFromFile((product) => {
        const p = path.join(rootDir, 'data', 'product.json');
        product.push(this);
        fs.writeFile(p,  JSON.stringify(product), (err) => {
            console.log(err);
        });
    });
}

static fetchAll(cb)
{
    getProductFromFile(cb);
}
}