const express = require('express') ;

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProduct);
router.get('/products/:productId', shopController.getProductById);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);
router.post('/delete-card', shopController.deleteCardItem);

module.exports = router;