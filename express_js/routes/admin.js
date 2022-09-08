const express = require('express');

const path = require('path');

const router = express.Router();

const rootDir = require('../util/path.js');

const product = [];

router.get( '/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Product', path: 'addproduct'});
    //next(); // this allows our request to continue to the next middleware in line
});

router.post( '/add-product', (req, res, next) => {
    console.log('heey');
    product.push({title: req.body.title})
    console.log(product);
    res.redirect('/');
    //next(); // this allows our request to continue to the next middleware in line
});

module.exports = {
    route : router,
    prod : product,
};