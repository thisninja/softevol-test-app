angular.module('customersApp')
    .controller('ModalInstanceCtrl', ['customersData', 'httpService', '$scope', '$modalInstance', 'customer', '$http', function(customersData, httpService, $scope, $modalInstance, customer, $http) {
        $scope.customer = customer;
        $scope.re = {};
        $scope.re.one =  '^\d{1}-\d{3}-\d{3}-\d{4}$';
        $scope.clearCustomer = angular.copy($scope.customer);
        $scope.confirmEdition = function() {
        	httpService.update($scope.customer);
        	$modalInstance.close();
        };
        $scope.confirmDeletion = function() {
        	var customer = $scope.customer;
            httpService.delete(customer).success(function(customer) {
                customersData.customers = customer;
            });
            $modalInstance.close();
        };
        $scope.cancel = function() {
        	if($scope.clearCustomer) {
        		_.forEach($scope.customer, function(key, value) {
        			if($scope.customer[value] !== $scope.clearCustomer[value]) {
        				$scope.customer[value] = $scope.clearCustomer[value];
        			}
        		})
        	}
            $modalInstance.dismiss('cancel');
        };


    }]);
