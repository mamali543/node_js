const { fetchProduct } = require('../models/product');
const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProduct = (req, res, next) => {
    Product.fetchAll((produit) => {
        // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
        res.render('shop/product-list', {prods: produit, pageTitle: 'Products', path: 'productlist'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    });
};

exports.getProductById =  (req, res, next) => {
    const id = req.params.productId;
        Product.fetchProduct(id, (produit) => {
            res.render('shop/product-detail', {prods: produit, pageTitle: 'Product-detail', path: 'productdetail'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    });
    // res.redirect('/');
}

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    Product.fetchProduct(productId, (produit) => {
        Cart.addProduct(productId, produit.price);
    })
    res.redirect('/cart');
};


exports.getIndex = (req, res, next) => {
    Product.fetchAll((produit) => {
        // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
        res.render('shop/index', {prods: produit, pageTitle: 'Shop', path: 'true'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    });
};

exports.getCart = (req, res, next) => {
    Product.fetchAll((produit) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop/cart', {prods: produit, pageTitle: 'Cart', path: 'cart'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    });
};

exports.getOrders = (req, res, next) => {
    Product.fetchAll((produit) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop/orders', {prods: produit, pageTitle: 'Orders', path: 'orders'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    });
};

exports.getCheckout = (req, res, next) => {
    Product.fetchAll((produit) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop/Checkout', {prods: produit, pageTitle: 'Checkout', path: 'checkout'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    });
};

// exports.get404page = (req, res, next) => {
//     Product.fetchAll((produit) => {
//     // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
//     res.status(404).render('404', {pageTitle: 'Page Not Found', path: '404'});
//     });
// };