const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const addressSchema = new Schema({
	street: {type: String},
	city: {type: String},
	state: { type: String},
	zipCode: {type: Number},
	country: {type: String}
});

const UserSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userColor: { type: String, required: false },
  admin: { type: Boolean, required: false, default: false },
  loggedIn: {type: Boolean, default: false},
  address: [addressSchema]
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', UserSchema);