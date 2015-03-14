'use strict';

angular.module('customersApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/customer/:id', {
        templateUrl: 'app/customer/customer.html',
        controller: 'MainCtrl'
      });
  }]);