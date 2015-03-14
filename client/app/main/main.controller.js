'use strict';

angular.module('customersApp')
    .controller('MainCtrl', ['customersData', '$scope', function(customersData, $scope) {
        $scope.customersData = customersData;
    }]);
