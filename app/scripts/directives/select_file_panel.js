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
      templateUrl: 'views/select_file_panel.html',
      restrict: 'E',
      link: function postLink(scope) {
        scope.uploadProgress = 70;
        scope.onFileSelect = function ($files) {
            var file = $files[0];

            // read file to orm
            var fileReader = new FileReader;
            fileReader.onload = function () {
                console.log(fileReader.result);
                console.log(fileReader.result.split('\n'));
            };
            fileReader.readAsText(file);

            // upload file to server
            scope.upload = $upload.upload({
                method: 'POST',
                url: '/upload',
                file: file
            }).progress(function () {
                console.log('progress');
            }).success(function (data) {
                console.log('Success upload', data);
            });
        }
      }
    };
  }]);
