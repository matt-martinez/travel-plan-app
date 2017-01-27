// REQUIREMENTS
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Trip = require('../models/trip.js');
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

// // TRIP INDEX
// router.get('/trips', function(req, res) {
//   User.find({})
//     .exec(function(err, trips) {
//       if (err) { console.log(err); }
//       res.render('users/show', { trips: trips});
//     });
// });

// TRIP NEW
router.get('/new', function(req, res) {
  res.render('trips/new');
});

// TRIP SHOW
router.get('/:id', function(req, res) {
  User.findById(req.session.currentUser._id)
    .exec(function(err, user) {
      if (err) { console.log(err); }
      console.log(user);
      var trip = user.trips[req.query.index]
      console.log(trip)
      res.render('trips/show', { trip, user });
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

  User.findById(req.session.currentUser._id)
    .exec(function(err, user) {
      if (err) { console.log(err); }
      console.log(user);
      user.trips.push(trip);

  user.save(function(err, trip) {
    if (err) { console.log(err); }
    console.log(trip);
    console.log(req.session.currentUser);
    res.redirect('users/' + req.session.currentUser._id);
    });
  });
});

// TRIP EDIT
router.get('/edit/:id', function(req, res) {
  User.findById(req.session.currentUser._id)
    .exec(function(err, user) {
      if (err) { console.log(err); }
      console.log(user)
      var trip = user.trips.id(req.params.id)
      console.log(trip)
      console.log(req.params.id)
      // var trip = User.findOne({"_id": req.params.id})
      // console.log(trip)
      res.render('trips/edit', { trip, user });
    });
});

// TRIP UPDATE
router.put('/:id', function(req, res) {
  User.findById(req.session.currentUser._id)
    .exec(function(err, user) {
      if (err) { console.log(err); }
      console.log(user)
      var trip = user.trips.id(req.params.id);
        trip.tripName = req.body.tripName,
        trip.img = req.body.img,
        trip.favorite = req.body.favorite,
        trip.start = req.body.start,
        trip.destination = req.body.destination,
        trip.travelTime = req.body.travelTime,
        trip.methodOfTravel = req.body.methodOfTravel,
        trip.landmarks = req.body.landmarks,
        trip.routes = req.body.routes,
        trip.stops = req.body.stops,
        user.save()

        res.redirect('/trips/' + user.trips.id);
    });
})

// TRIP DELETE


// EXPORTS
module.exports = router;
