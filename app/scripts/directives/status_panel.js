'use strict';

/**
 * @ngdoc directive
 * @name scraperApp.directive:statusPanel
 * @description
 * # statusPanel
 */
angular.module('scraperApp')
  .directive('statusPanel', function () {
    return {
      templateUrl: 'views/status_panel.html',
      restrict: 'E',
      link: function postLink(scope) {
      }
    };
  });
