// PACKAGES
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs')
var mongoose = require('mongoose');

var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');

// APP SETTINGS
var app = express();
var port = 3000;

// DATABASE
mongoose.connect('mongodb://localhost/travelapp');

// VIEWS
app.set('view engine', 'hbs')

// LOG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(methodOverride('_method'));

// MIDDLEWARE
app.use(session({
  secret: "superdoges",
  resave: false,
  saveUninitialized: false
}));

// CONTROLLERS
app.use('/users', usersController);
app.use('/sessions', sessionsController);

// SERVER
app.listen(port, function() {
  console.log("**************************");
  console.log('Server Initialized');
  console.log('Listening on Port ' + port);
  console.log("**************************")
});
