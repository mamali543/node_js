/*models sreves the purpose of representing our data and  of managaning our data, svaing it fetching it also updating it
it'd the model which is responsible for your data, it contains all the data related logic*/

// const product = [];
const e = require('express');
const fs = require('fs');

const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'product.json');

const getProductFromFile = (cb) => {
    
    fs.readFile(p, (err, fileContent) => {
        if (!err && fileContent.length > 0)
            return cb(JSON.parse(fileContent));
        else
            cb([]);
    });
}

module.exports = class Product{
    constructor(title, imageUrl, description, price)
    {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    
    save()
    {
        this.id = Math.random().toString();
        getProductFromFile((product) => {
            if (this.id) {
                const existingProductIndex = product.findIndex(prod => prod.id === this.id)
                const updatedProduct = [...product];
                updatedProduct[existingProductIndex] = this;
            }
            
            product.push(this);
            console.log(product)
            fs.writeFile(p,  JSON.stringify(product), (err) => {
                console.log(err);
            }); 
        });
    }

    static fetchAll(cb)
    {
        getProductFromFile(cb);
    }

    static fetchProduct(id, cb)
    {
        getProductFromFile(prods => {
            const product = prods.find(prod => prod.id === id);
            console.log('>>Fetch Prouct Price >>>: ',product.price);
            cb(product);
        });
    }
};