'use strict';

var _ = require('lodash');
var Customers = require('./customer.model');
function getCustomers(res, updated) {
    Customers.find(function(err, customers) {
        if (err)
            res.send(err)
        res.json(customers); 
    });
};
// Get list of customers
exports.index = function(req, res) {
  getCustomers(res);
};

// Get a single customer
exports.show = function(req, res) {
  Customers.findById(req.params.id, function (err, customer) {
    if(err) { return handleError(res, err); }
    if(!customer) { return res.send(404); }
    return res.json(customer);
  });
};

// Creates a new customer in the DB.
exports.create = function(req, res) {
  Customers.create(req.body, function(err, customer) {
    if(err) { return handleError(res, err); }
    getCustomers(res);
  });
};

// Updates an existing customer in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Customers.findById(req.params.id, function (err, customer) {
    if (err) { return handleError(res, err); }
    if(!customer) { return res.send(404); }
    var updated = _.merge(customer, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, customer);
    });
  });
};

// Deletes a customer from the DB.
exports.destroy = function(req, res) {
  Customers.findById(req.params.id, function (err, customer) {
    if(err) { return handleError(res, err); }
    if(!customer) { return res.send(404); }
    customer.remove(function(err) {
      if(err) { return handleError(res, err); }
      getCustomers(res);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}