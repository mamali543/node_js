const express = require('express');

const app = express();

const  bodyparser = require('body-parser');

const routeRouter = require('./routes/route');
const userRouter  = require('./routes/users');

app.set('view-engine', 'ejs');
app.set('views');


app.use(bodyparser.urlencoded({extended: false})); //i pass the configue option here

app.use(routeRouter);
app.use(userRouter.route);

app.use((req, res, next) => {
    res.status(404).render('file2', {pageTitle: 'Page not found'});
});

app.listen(2000);