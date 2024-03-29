// npm install --save install the package as a production dependencie
// const http = require('http');
const  express = require('express');    //it will exports a function
const  bodyparser = require('body-parser');
const path  = require('path');
const sequelize = require('./util/database');
const User = require('./models/user');
const Product = require('./models/product');
const Cart = require('./models/cart');
const cartItem = require('./models/cart-item');
//this will initialize a new object,where expressjs, the framework will store and manage a lot of things for us behind the scenes
const app = express();
//here we tell express that we got a templating engine that is express conforming and use it to render dynamique tamplates
//we do that after we created our express app, we set a global configuration value by app.set it allows us to set any values globaly on our express application
app.set('view engine', 'ejs'); //the view engine property (key) tells express that we want to compile dynamic templates with the ejs engine
app.set('views');   // the views property (key) tells express where to find this templates
const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');
// db.execute('SELECT * FROM products').then(result => {
//     console.log('result >>> :', result[0])
// }).catch(err => {
//     console.log(err);
// });
const productController = require('./controllers/err');
/*you can pass app as a requesthandler to createserver but it will'not handle any request,
 but it sets up a certain way 
of handling incoming requests that defines
 or is a key characteristic of expressjs.*/
/*app.use() takes the path and the functions that will be executed for every incoming request and it will recieve three arguments,
the req, res and next argument, next is a function passed to the func passed to app.use function 
and it has to be executed to allow the request to travel on the next middleware.*/
//Middleware means that an incoming request is automatically funneled through a bunch of functions by expressjs , Use allows us to add a new middleware function
app.use(bodyparser.urlencoded({extended: false})); //i pass the configue option here
//link css files
app.use(express.static(path.join(__dirname, 'public')));
//we can add a segment as a filter before the Router
app.use((req, res, next) => {
    User.findByPk(1).then((user) => {
        req.user = user;
        next();
    }).catch((err) => {
        console.log(err);
    })
})
app.use(adminRouter);
app.use(shopRouter);
//add a 404 error page
app.use(productController.get404page);

Product.belongsTo(User, {constraints: true, ONDelete: 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Product.belongsToMany(Cart, { through: cartItem});
//app.post() and app.get()  they filter if it's a get request or a post request
sequelize.sync({force: true}).then((result) =>{
    return (User.findByPk(1))
}).then((user) => {
    if (!user)
        return (User.create({
            name: 'REDA', mail: 'amalyreda@hhhh.com',
        }));
    return (user);
}).then((user) => {
    console.log('here is the user: ', user)
    app.listen(3001);
}).catch((err) =>{
    console.log('here is the eroor >>>>: ', err);
});

// var server  = http.createServer(app);
// server.listen(5000);