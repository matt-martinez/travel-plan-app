// REQUIREMENTS
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Trip = require('../models/trip.js');
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

// TRIP INDEX
router.get('/', function(req, res) {
  User.find({})
    .exec(function(err, trips) {
      if (err) { console.log(err); }
      res.render('users/show', { trips: trips});
    });
});

// TRIP NEW
router.get('/new', function(req, res) {
  res.render('trips/new');
});

// TRIP SHOW
router.get('/:id', function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, trip) {
      if (err) { console.log(err); }
      console.log(trip);

      res.render('trips/show', { trip });
    });
});

// TRIP CREATE
router.post('/', function(req, res) {
  console.log("Trip Post Route");
  var trip = new Trip({
    tripName: req.body.tripName,
    img: req.body.img,
    favorite: req.body.favorite,
    start: req.body.start,
    destination: req.body.destination,
    travelTime: req.body.travelTime,
    methodOfTravel: req.body.methodOfTravel,
    landmarks: req.body.landmarks,
    routes: req.body.routes,
    stops: req.body.stops
  });

  trip.save(function(err, trip) {
    if (err) { console.log(err); }
    console.log(trip);
    console.log(req.sessions.currentUser)
    res.redirect('users/' + req.session.currentUser._id);
  });
});


// TRIP EDIT/UPDATE

// TRIP DELETE


// EXPORTS
module.exports = router;