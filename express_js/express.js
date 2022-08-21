// npm install --save install the package as a production dependencie
// const http = require('http');

const  express = require('express');
const  bodyparser = require('body-parser');

//this will initialize a new object,
// where expressjs, the framework will store and manage a lot of things for us behind the scenes
const app = express();
//you can pass app as a requesthandler to createserver but it will'not handle any request,
// but it sets up a certain way 
//of handling incoming requests that defines
// or is a key characteristic of expressjs.

// app.use() takes the path and the functions that will be executed for every incoming request and it will recieve three arguments,
// the req, res and next argument, next is a function passed to the func passed to app.use function 
// and it has to be executed to allow the request to travel on the next middleware.


//Middleware means that an incoming request is automatically funneled through a bunch of functions by expressjs 

app.use(bodyparser.urlencoded({extended: false})); //i pass the configue option here

app.use( '/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">send</button></form>');
    //next(); // this allows our request to continue to the next middleware in line
});

app.use( '/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    //next(); // this allows our request to continue to the next middleware in line
});

app.use('/', (req, res, next) => {
    res.send('<h1>hello world1!</h1>');
});

//app.post() and app.get()  they filter if it's a get request or a post request



// var server  = http.createServer(app);


// server.listen(5000);
app.listen(3000);