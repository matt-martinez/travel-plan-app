var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password_digest: String,
  // tripList: [tripSchema]
});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = {
  User: UserModel
}
