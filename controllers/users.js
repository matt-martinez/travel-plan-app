var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js')

// User Index
router.get('/', function(req, res) {
  User.find({})
    .exec(function(err, users) {
      if (err) { console.log(err); }
      res.render('users/index', { users: users });
    });
});

// Signup
router.get('/signup', function(req, res){
  res.render('users/signup');
});

router.post('/', authHelpers.createSecure, function(req, res){
  var user = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password_digest: res.hashedPassword
  });

  user.save(function(err, user) {
    if (err) { console.log(err); }

    console.log(user);
    res.redirect('/users');
  });
});

// User Show
router.get('/:id', authHelpers.authorize, function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) { console.log(err); }
      console.log(user);

      res.render('users/show', { user });
    });
});

module.exports = router;
