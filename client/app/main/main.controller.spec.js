'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('customersApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/customers')
      .respond(instanceof Array);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of customers to the scope', function () {
    $httpBackend.flush();
    expect(customersData.customers.length).toBe(>1);
  });
});
