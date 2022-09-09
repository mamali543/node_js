const express = require('express');

const router = express.Router();

const tab = [];

router.get('/users', (req, res, next) => {
    res.render('file1.ejs', {pageTitle: 'Users', path: 'users'});
})

router.post('/users', (req, res, next) => {
    console.log(req.body);
    tab.push(req.body);
    res.redirect('/');
});

module.exports = {
    route: router,
    taab: tab,
};