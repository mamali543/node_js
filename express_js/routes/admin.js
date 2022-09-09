const express = require('express');

// const path = require('path');

const router = express.Router();

const productController = require('../controllers/products');

// const rootDir = require('../util/path.js');


router.get( '/add-product', productController.getAddProduct);

router.post('/add-product', productController.PostAddProduct);

module.exports = router;