'use strict';

describe('Directive: previewsPanel', function () {

  // load the directive's module
  beforeEach(module('scraperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<previews-panel></previews-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the previewsPanel directive');
  }));
});
