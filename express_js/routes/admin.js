const express = require('express');

// const path = require('path');

const router = express.Router();

const adminController = require('../controllers/admin');

// const rootDir = require('../util/path.js');
router.get( '/add-product', adminController.getAddProduct);
router.get( '/product', adminController.getProductlist);
router.get( '/edit-product/:prodId', adminController.getEditProduct);
router.post( '/edit-product', adminController.PostEditProduct);
router.post('/add-product', adminController.PostAddProduct);
router.post('/delete-product', adminController.PostDeleteProduct);

module.exports = router;