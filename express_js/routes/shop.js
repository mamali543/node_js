const express = require('express');

const router = express.Router();



router.use( '/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">send</button></form>');
    //next(); // this allows our request to continue to the next middleware in line
});

router.post( '/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    //next(); // this allows our request to continue to the next middleware in line
});

module.exports = router;