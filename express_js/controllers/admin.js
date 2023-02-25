/*the controller should do everything that needs to be done to connect your model and the view, it can mean rhaat through your view, through your foorm some data was sent to your node express application and you need to send taht to the model to save it
or it can of course mean that your fetchnig data from your model and send that into a view which is then returned to the user*/
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    /*render method is provided by expressjs and it will use the default templating engine which is why we had
    to define it here,it will use that default templating engine and then return that template.*/
    res.render('admin/edit-product', {pageTitle: 'Add Product', path: 'addproduct', editing: false});
    //next(); // this allows our request to continue to the next middleware in line
};

exports.getEditProduct = (req, res, next) => {
    let e = req.query.edit;
    if (!e)
        return res.redirect('/');
    let prodId = req.params.prodId;
    console.log('\x1b[33m >>>>'+ prodId + ' \x1b[0m');
    req.user.getProducts({where: {id: prodId}}).then((products) => {
        let produit  = products[0];
        if (!produit)
            return res.redirect('/');
        res.render('admin/edit-product', {pageTitle: 'Edit Product', path: 'editproduct', editing: true, product: produit});
    })
};

exports.getProductlist = (req, res, next) => {
    req.user.getProducts().then((products) =>
    {
        // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
        res.render('admin/product-list', {prods: products, pageTitle: 'Admin Products', path: 'adminproducts'}) // this is provided by expressjs and it will use the default templating engine, and also the render method allows us to pas the data that should be added into our view (however as a javascript object wher we map it to a key name)
    }).catch((err) => {
        console.log(err);
    });
};

exports.PostDeleteProduct = (req, res, next) => {
    let prodId = req.body.prodId;
    // Product.findByPk(id).then((product) => {
    //     return (product.destroy())
    // }).
    req.user.getProducts({where: {id: prodId}})
    .then((products) => {
        products[0].destroy();
    }).then((result) => {
        console.log('\x1b[33m Item Deleted Succesfully \x1b[0m');
        res.redirect('/product');
    }).catch((err) => {
        console.log(err);
    });
};

exports.PostAddProduct = (req, res, next) => {
    req.user.createProduct({
        title: req.body.title,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        description: req.body.description
    }).then((result) => {
        res.redirect('/');
    }).catch();
    //next(); // this allows our request to continue to the next middleware in line
};

exports.PostEditProduct = (req, res, next) => {
    let id = req.body.prodId;
    Product.findByPk(id).then((product)=>{
        product.title = req.body.title;
        product.price = req.body.price;
        product.imageUrl = req.body.imageUrl;
        product.description = req.body.description;
        return (product.save());
    }).then((result) => {
        res.redirect('/product')
        console.log('\x1B[31 result >>>>>: ',result, 'background-color: red');
    }).catch((err)=>{
        console.log(err);
    });
};