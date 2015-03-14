'use strict';

angular.module('customersApp')
    .directive('deleteCustomer', ['customersData', '$modal', '$log', function(customersData, $modal, $log) {
        return {
            restrict: 'A',
            scope: false,
            link: function($scope, elem, attrs) {
                var index = attrs["deleteCustomer"];
                elem.bind('click', function(e) {
                        e.stopPropagation();
                        $modal.open({
                            templateUrl: 'components/modal/delete-customer-modal.html',
                            controller: 'ModalInstanceCtrl',
                            resolve: {
			                    customer: function() {
			                        return customersData.customers[index];
			                    }
                            }
                        });
                })
            }
        }
	}])
    .directive('editCustomer', ['customersData', '$modal', '$log', function(customersData, $modal, $log) {
        return {
            restrict: 'A',
            scope: false,
            link: function($scope, elem, attrs) {
                var index = attrs["editCustomer"];
                elem.bind('click', function(e) {
                        e.stopPropagation();
                        $modal.open({
                            templateUrl: 'components/modal/edit-customer-modal.html',
                            controller: 'ModalInstanceCtrl',
                            resolve: {
			                    customer: function() {
			                        return customersData.customers[index];
			                    }
                            }
                        });
                })
            }
        }
	}]);
