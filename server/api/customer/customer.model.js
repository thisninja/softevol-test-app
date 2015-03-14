'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var customersSchema = new Schema({
  name: String,
  sex: String,
  email: String,
  phone: String,
  address: String,
  street: String,
  city: String,
  state: String,
  zip: String
});

module.exports = mongoose.model('Customers', customersSchema);