/*the controller should do everything that needs to be done to connect your model and the view, it can mean rhaat through your view, through your foorm some data was sent to your node express application and you need to send taht to the model to save it
or it can of course mean that your fetchnig data from your model and send that into a view which is then returned to the user*/
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    /*render method is provided by expressjs and it will use the default templating engine which is why we had
    to define it here,it will use that default templating engine and then return that template.*/
    res.render('admin/add-product', {pageTitle: 'Add Product', path: 'addproduct'});
    //next(); // this allows our request to continue to the next middleware in line
};

exports.getProductlist = (req, res, next) => {
    Product.fetchAll((produit) => {
        // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
        res.render('admin/product-list', {prods: produit, pageTitle: 'Admin Products', path: 'adminproducts'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    });
};


exports.PostAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const id = req.body.id;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
    //next(); // this allows our request to continue to the next middleware in line
};