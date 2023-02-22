const { fetchProduct } = require('../models/product');
const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProduct = (req, res, next) => {
    Product.findAll().then((products) => {
        res.render('shop/product-list', {prods: products, pageTitle: 'All Products', path: 'productlist'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    }).catch((err) =>{
        console.log(err);
    });
    // Product.fetchAll().then(([rows, fieldData]) => {
    //     console.log('rooows >>> : ', rows );
    //     res.render('shop/product-list', {prods: rows, pageTitle: 'All Products', path: 'productlist'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    // }).catch()
};

exports.getProductById =  (req, res, next) => {
    const id = req.params.productId;
    Product.findByPk(id).then((product) => {
        res.render('shop/product-detail', {prods: product, pageTitle: 'Product-detail', path: 'productdetail'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    }).catch((err) => {
        console.log(err);
    });
        // Product.fetchProduct(id).then(([result]) =>
        // {
        //     res.render('shop/product-detail', {prods: result[0], pageTitle: 'Product-detail', path: 'productdetail'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
        // }).catch((err) => console.log(err))
    // res.redirect('/');
}

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    Product.fetchProduct(productId, (produit) => {
        Cart.addProduct(productId, produit.price);
    })
    res.redirect('/cart');
};

exports.deleteCardItem = (req, res, next) => {
    let id = req.body.prodId;
    Product.fetchProduct(id, (product) => {
        let price = product.price;
        console.log("here is the price >>> : ", price)
        Cart.deleteItem(id, price);
    })
    res.redirect('/');
};

exports.getIndex = (req, res, next) => {
    Product.findAll().then((products) => {
        res.render('shop/index', {prods: products, pageTitle: 'Shop', path: 'true'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    }).catch((err) =>{
        console.log(err);
    });
    // Product.fetchAll().then(([rows, fieldData]) => {
    //     console.log('rooows >>> : ', rows);
    //     console.log('fieldData >>> : ', fieldData);
    //     res.render('shop/index', {prods: rows, pageTitle: 'Shop', path: 'true'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    // }).catch()
        // res.sendFile(path.join(rootDir, 'views', 'shop.html')););
};

exports.getCart = (req, res, next) => {
    Cart.getCardProduct((card) => {
        Product.fetchAll((products) => {
            const cartItems = [];
            for (prod of products)
            {
                const productData = card.products.find(produit => produit.id === prod.id);
                if (productData)
                {
                    cartItems.push({productData: prod, qty: productData.qty});
                }
            }
            res.render('shop/cart', {prods: cartItems, pageTitle: 'Cart', path: 'cart'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
        });
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