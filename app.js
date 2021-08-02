require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyparser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('flash');
var expressHsb = require('express-handlebars');
var mongoose = require('mongoose');
var mongoStore = require('connect-mongo');

var indexRouter = require('./routes/index');

var app = express();

mongoose.connect('mongodb+srv://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@cluster0.u8xen.mongodb.net/bharathStore?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology:true });

// view engine setup
app.engine('.hbs',expressHsb({defaultLayout:'layout', extname:'.hbs'}))
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:'mySuperSecret', resave:false, saveUninitialized:false}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/aboutus', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
