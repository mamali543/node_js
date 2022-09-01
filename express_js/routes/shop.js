const express = require('express')

const path = require('path');

const rootDir = require('../util/path.js');

const product = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(product.prod);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;