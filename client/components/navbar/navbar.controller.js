'use strict';

angular.module('customersApp')
  .controller('NavbarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Add a customer',
      'link': '/newcustomer'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }]);