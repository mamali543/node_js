const express = require('express');

const path = require('path');

const router = express.Router();



router.use( '/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    //next(); // this allows our request to continue to the next middleware in line
});

router.post( '/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    //next(); // this allows our request to continue to the next middleware in line
});

module.exports = router;