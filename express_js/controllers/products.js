// /*the controller should do everything that needs to be done to connect your model and the view, it can mean rhaat through your view, through your foorm some data was sent to your node express application and you need to send taht to the model to save it
// or it can of course mean that your fetchnig data from your model and send that into a view which is then returned to the user*/

// const Product = require('../models/product');

// exports.getAddProduct = (req, res, next) => {
//     // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
//     res.render('admin/add-product', {pageTitle: 'Add Product', path: 'addproduct'});
//     //next(); // this allows our request to continue to the next middleware in line
// };

// exports.getProductlist = (req, res, next) => {
//     // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
//     res.render('admin/product-list', {pageTitle: 'Admin Products', path: 'addproduct'});
//     //next(); // this allows our request to continue to the next middleware in line
// };


// exports.PostAddProduct = (req, res, next) => {
//     const product = new Product(req.body.title);
//     product.save();
//     res.redirect('/');
//     //next(); // this allows our request to continue to the next middleware in line
// };

// exports.getProduct = (req, res, next) => {
//     Product.fetchAll((produit) => {
//         // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
//         res.render('shop/product-list', {prods: produit, pageTitle: 'Products', path: 'productlist'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
//     });
// };

// exports.getIndex = (req, res, next) => {
//     Product.fetchAll((produit) => {
//         // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
//         res.render('shop/index', {prods: produit, pageTitle: 'Shop', path: 'true'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
//     });
// };

// exports.getCart = (req, res, next) => {
//     Product.fetchAll((produit) => {
//     // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
//     res.render('shop/cart', {prods: produit, pageTitle: 'Cart', path: 'cart'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
//     });

// };

// exports.get404page = (req, res, next) => {
//     Product.fetchAll((produit) => {
//     // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
//     res.status(404).render('404', {pageTitle: 'Page Not Found', path: '404'});
//     });
// };