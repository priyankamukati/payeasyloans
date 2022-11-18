const path = require('path');
const express = require('express');
const morgan = require('morgan');
const pug = require('pug');


const loanRouter = require('./routes/loanRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 3) ROUTES


app.use('/', loanRouter);

module.exports = app;



