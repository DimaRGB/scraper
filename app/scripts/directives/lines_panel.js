'use strict';

/**
 * @ngdoc directive
 * @name scraperApp.directive:linesPanel
 * @description
 * # linesPanel
 */
angular.module('scraperApp')
  .directive('linesPanel', function () {
    return {
      templateUrl: 'views/lines_panel.html',
      restrict: 'E',
      link: function postLink(scope) {

      }
    };
  });
