require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const verifyHmacSigned = require('./middleware/verifyHmacSigned');
const whiteList = require('./middleware/whiteList.js');


const app = express();

app.use(whiteList);
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use('/', verifyHmacSigned, indexRouter);
app.use('/users', verifyHmacSigned, usersRouter);
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(res.statusCode || 500).send(err.message);
});

module.exports = app;
