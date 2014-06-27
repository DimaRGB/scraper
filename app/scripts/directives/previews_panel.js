'use strict';

/**
 * @ngdoc directive
 * @name scraperApp.directive:previewsPanel
 * @description
 * # previewsPanel
 */
angular.module('scraperApp')
  .directive('previewsPanel', function () {
    return {
      templateUrl: 'views/previews_panel.html',
      restrict: 'E',
      link: function postLink(scope) {

      }
    };
  });
