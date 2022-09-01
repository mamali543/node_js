const express = require('express');

const app = express();

const path = require('path');

const fileRouter = require('./routes/file');
const fileeRouter = require('./routes/filee');

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileeRouter);
app.use(fileRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000);
