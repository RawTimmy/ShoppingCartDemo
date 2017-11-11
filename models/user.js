/*
  This model enables to create a new "User" object.

  The "User" object should contain some properties:
    1. email;
    2. password;

  The "User" object should contain some methods to encryt and validate the "password" property:
    1. encrytPassword();
    2. validPassword();
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true}
});

userSchema.methods.encrytPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
