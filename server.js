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
var tripsController = require('./controllers/trips.js');

// APP SETTINGS
var app = express();
var port = 3000;

// DATABASE
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/travelapp';
mongoose.connect(mongoURI);

// VIEWS
app.set('view engine', 'hbs')

// LOG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(methodOverride('_method'));

// MIDDLEWARE
app.use(express.static('public'));
app.use(session({
  secret: "superdoges",
  resave: false,
  saveUninitialized: false
}));

// CONTROLLERS
app.use('/users', usersController);
app.use('/sessions', sessionsController);
app.use('/trips', tripsController);

// SERVER
app.listen(process.env.PORT || port, function() {
  console.log("**************************");
  console.log('Server Initialized');
  console.log('Listening on Port ' + port);
  console.log("**************************")
});
