'use strict';

/**
 * @ngdoc directive
 * @name scraperApp.directive:selectFilePanel
 * @description
 * # selectFilePanel
 */
angular.module('scraperApp')
  .directive('selectFilePanel', function () {
    return {
      templateUrl: 'views/select_file_panel.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
