'use strict';

angular.module('customersApp')
    .service('customersData', ['httpService', function(httpService) {
        var self = this;
        this.customers = [];
        httpService.get().success(function(customers) {
            _.each(customers, function(customer) {
            	self.customers.push(customer);
            })   
        });
    }])
    .service('httpService', ['$http', function($http) {
        this.get = function() {
            return $http.get('/api/customers');
        },
        this.create = function(customer) {
            return $http.post('/api/customers', customer);
        },
        this.update = function(customer) {
            return $http.put('/api/customers/' + customer._id, customer);
        },
        this.delete = function(customer) {
            return $http.delete('/api/customers/' + customer._id);
        }
    }]);
