const express = require('express')

const router = express.Router();

const adminProduct = require('../controllers/products');

router.get('/', adminProduct.getProduct);

module.exports = router;