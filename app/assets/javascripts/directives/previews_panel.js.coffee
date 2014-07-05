'use strict';

angular.module('scraperApp')
  .directive('previewsPanel', function () {
    return {
      templateUrl: 'assets/previews_panel.html',
      restrict: 'E',
      link: function postLink(scope) {

      }
    };
  });
