// REQUIREMENTS
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Trip = require('../models/trip.js');
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

// TRIP SHOW
router.get('/:id', function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, trip) {
      if (err) { console.log(err); }
      console.log(trip);

      res.render('trips/show', { trip });
    });
});

// TRIP NEW

// TRIP EDIT/UPDATE

// TRIP DELETE


// EXPORTS
module.exports = router;
