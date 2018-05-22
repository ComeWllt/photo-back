const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

const routes = require('./src/routes');

// Connection URL
const url = 'mongodb://localhost/DB_NAME';
const connect = mongoose.connect(url);
mongoose.Promise = require('bluebird');

connect.then(() => {
  console.log('Connected correctly to server');
}, (err) => { console.log(err); });


const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const whitelist = ['http://localhost:3005'];
const corsOptions = {
  origin: whitelist,
  credentials: true
};

app.use(cors(corsOptions));

app.use(passport.initialize());

app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

module.exports = app;
