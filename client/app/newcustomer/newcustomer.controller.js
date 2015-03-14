'use strict';

angular.module('customersApp')
    .controller('NewcustomerCtrl', ['customersData', 'httpService', '$location', '$scope', function(customersData, httpService, $location, $scope) {
        $scope.customerFields = [{
            'title': 'Name',
            'type': 'text'
        }, {
            'title': 'Sex',
            'value': 'men',
            'type': 'radio'
        }, {
            'title': 'Email',
            'type': 'email'
        }, {
            'title': 'Telephone',
            'type': 'tel'
        }, {
            'title': 'Address',
            'type': 'text'
        }, {
            'title': 'Street',
            'type': 'text'
        }, {
            'title': 'City',
            'type': 'text'
        }, {
            'title': 'State',
            'type': 'text'
        }, {
            'title': 'Zip',
            'type': 'text'
        }, ];
        $scope.createCustomer = function(model) {
            var customer = {};
            _.forEach(model, function(item) {
                customer[item.title.toLowerCase()] = item.value;
            });
            httpService.create(customer)
                .success(function(customers) {
                    customersData.customers = customers;
                    $location.path('/');
                });
        };

    }]);
