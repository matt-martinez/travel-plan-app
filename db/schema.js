var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var TripSchema = new Schema({
  tripName: String,
  img: String,
  favorite: Boolean,
  start: String,
  destination: String,
  travelTime: String,
  methodOfTravel: String,
  landmarks: String,
  routes: String,
  stops: String
});

var UserSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password_digest: String,
  trips: [TripSchema]
});

TripSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

var TripModel = mongoose.model('Trip', TripSchema);

var UserModel = mongoose.model('User', UserSchema);

module.exports = {
  User: UserModel,
  Trip: TripModel
};
