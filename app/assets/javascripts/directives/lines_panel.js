'use strict';

angular.module('scraperApp')
  .directive('linesPanel', function () {
    return {
      templateUrl: 'assets/lines_panel.html',
      restrict: 'E',
      link: function postLink(scope) {

      }
    };
  });
