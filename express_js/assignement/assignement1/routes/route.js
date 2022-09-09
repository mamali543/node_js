const express = require('express');
const { taab } = require('./users');

const router = express.Router();

const tab = require('./users');

router.get('/', (req, res, next) => {
    console.group(tab.taab);
    res.render('file.ejs', {s: tab.taab, pageTitle: 'Route', path: 'route'});
})

module.exports = router;