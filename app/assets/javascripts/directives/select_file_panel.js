'use strict';

/**
 * @ngdoc directive
 * @name scraperApp.directive:selectFilePanel
 * @description
 * # selectFilePanel
 */
angular.module('scraperApp')
  .directive('selectFilePanel', ['$upload', function ($upload) {
    return {
      templateUrl: 'assets/select_file_panel.html',
      restrict: 'E',
      link: function postLink(scope) {
        scope.uploadProgress = 0;
        scope.onFileSelect = function ($files) {
            scope.upload = $upload.upload({
                method: 'POST',
                url: '/csvs',
                file: $files[0]
            }).progress(function (e) {
                scope.uploadProgress = (100.0 * e.loaded / e.total).toFixed(2);
            }).success(function (data) {
                scope.uploadProgress = 0;
                console.log(data);
            });
        }
      }
    };
  }]);
