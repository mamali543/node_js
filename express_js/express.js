// npm install --save install the package as a production dependencie
// const http = require('http');

const  express = require('express');
const  bodyparser = require('body-parser');

const path  = require('path');

//this will initialize a new object,
// where expressjs, the framework will store and manage a lot of things for us behind the scenes
const app = express();

//here we tell express that we got a templating engine that is express conforming and use it to render dynamique tamplates
//we do that after we created our express app, we set a global configuration value by app.set it allows us to set any values globaly on our express application

app.set('view engine', 'ejs'); //we're telling express that we want to compile dynamic templates with the pug engine
app.set('views');   //and where to find this templates
const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');

const productController = require('./controllers/err');
//you can pass app as a requesthandler to createserver but it will'not handle any request,
// but it sets up a certain way 
//of handling incoming requests that defines
// or is a key characteristic of expressjs.

// app.use() takes the path and the functions that will be executed for every incoming request and it will recieve three arguments,
// the req, res and next argument, next is a function passed to the func passed to app.use function 
// and it has to be executed to allow the request to travel on the next middleware.


//Middleware means that an incoming request is automatically funneled through a bunch of functions by expressjs 

app.use(bodyparser.urlencoded({extended: false})); //i pass the configue option here


//link css files
app.use(express.static(path.join(__dirname, 'public')));
//we can add a segment as a filter before the Router
app.use(adminRouter);
app.use(shopRouter);

//add a 404 error page

app.use(productController.get404page);

//app.post() and app.get()  they filter if it's a get request or a post request

// var server  = http.createServer(app);
// server.listen(5000);

app.listen(3000);