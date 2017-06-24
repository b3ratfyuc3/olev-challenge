import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import index from './routes/index';
import driver from './routes/driver';

let app = express();

// mongoose connection
if (app.get('env') === 'development') {
  var db_uri = "mongodb://localhost/olev";
}else{
  var db_uri = "mongodb://heroku_d90bxcdt:gkdp85mn2utaatfj8eo27rc0vm@ds135552.mlab.com:35552/heroku_d90bxcdt";
}

mongoose.connect(db_uri);

// drivers model
const Drivers = require('./models/drivers');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', index);
app.use('/api/driver', driver);

// catch 404 and forward to error handler
app.use((req, res, next)  => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
