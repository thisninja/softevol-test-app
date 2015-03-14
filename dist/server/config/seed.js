/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Customers = require('../api/customer/customer.model');


/*Customers.find({}).remove(function() {
  Customers.create({
    "name": "Chrystal West",
    "sex": "men",
    "email": "chrystalwest@portaline.com",
    "phone": "+1 (990) 471-2298",
    "address": "3758 New Street East Meadow, NY 11554",
    "city": "East Meadow",
    "state": "New York",
    "zip": "11554"
  }, {
    "name": "Virginia Kinney",
    "sex": "women",
    "email": "virginiakinney@portaline.com",
    "phone": "+1 (991) 528-2265",
    "address": "8446 Clinton Street Merrick, NY 11566",
    "city": "Merrick",
    "state": "New York",
    "zip": "11566"
  }, {
    "name": "Tessa Mason",
    "sex": "women",
    "email": "tessamason@portaline.com",
    "phone": "+1 (885) 452-2014",
    "address": "5350 Virginia Street Jacksonville Beach, FL 32250",
    "city": "Jacksonville Beach",
    "state": "Florida",
    "zip": "32250"
  },  {
    "name": "Ford May",
    "sex": "men",
    "email": "fordmay@portaline.com",
    "phone": "+1 (870) 584-2419",
    "address": "8850 Sheffield Drive Bridgewater, NJ 08807",
    "city": "Bridgewater",
    "state": "New Jersey",
    "zip": "08807"
  },  {
    "name": "Carroll Nichols",
    "sex": "women",
    "email": "carrollnichols@portaline.com",
    "phone": "+1 (938) 407-2398",
    "address": "6661 Cherry Lane Mchenry, IL 60050",
    "city": "Mchenry",
    "state": "Illinois",
    "zip": "60050"
  },{
    "name": "Dolly Ford",
    "sex": "women",
    "email": "dollyford@portaline.com",
    "phone": "+1 (878) 402-2375",
    "address": "3289 9th Street West Richardson, TX 75080",
    "city": "Richardson",
    "state": "Texas",
    "zip": "75080"
  });
});*/