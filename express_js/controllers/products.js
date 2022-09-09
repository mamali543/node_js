const product = [];

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Product', path: 'addproduct'});
    //next(); // this allows our request to continue to the next middleware in line
};

exports.PostAddProduct = (req, res, next) => {
    product.push({title: req.body.title})
    res.redirect('/');
    //next(); // this allows our request to continue to the next middleware in line
};

exports.getProduct = (req, res, next) => {
    // console.log(product.prod);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {prods: product, pageTitle: 'Shop', path: 'true'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
};

exports.get404page = (req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: '404'});
};