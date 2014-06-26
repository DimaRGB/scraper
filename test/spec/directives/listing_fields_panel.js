'use strict';

describe('Directive: listingFields', function () {

  // load the directive's module
  beforeEach(module('scraperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<listing-fields></listing-fields>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the listingFields directive');
  }));
});
