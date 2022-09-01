const express = require('express');

const path = require('path');

const router = express.Router();

const rootDir = require('../util/path.js');

const product = [];

router.get( '/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //next(); // this allows our request to continue to the next middleware in line
});

router.post( '/add-product', (req, res, next) => {
    product.push({title: req.body.title})
    res.redirect('/');
    //next(); // this allows our request to continue to the next middleware in line
});

module.exports = {
    route : router,
    prod : product,
};