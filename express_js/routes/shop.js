const express = require('express')

const path = require('path');

const rootDir = require('../util/path.js');

const product = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log(product.prod);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {prods: product.prod, pageTitle: 'Shop', path: 'true'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
});

module.exports = router;