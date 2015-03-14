'use strict';

describe('Controller: NewcustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('customersApp'));

  var NewcustomerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewcustomerCtrl = $controller('NewcustomerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
