'use strict';

/**
 * @ngdoc directive
 * @name scraperApp.directive:rulesPanel
 * @description
 * # rulesPanel
 */
angular.module('scraperApp')
  .directive('rulesPanel', function () {
    return {
      templateUrl: 'views/rules_panel.html',
      restrict: 'E',
      link: function postLink(scope) {

      }
    };
  });
