'use strict';

angular.module('customersApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/newcustomer', {
        templateUrl: 'app/newcustomer/newcustomer.html',
        controller: 'NewcustomerCtrl'
      });
  }]);
