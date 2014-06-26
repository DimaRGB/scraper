'use strict';

describe('Directive: linesPanel', function () {

  // load the directive's module
  beforeEach(module('scraperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lines-panel></lines-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the linesPanel directive');
  }));
});
