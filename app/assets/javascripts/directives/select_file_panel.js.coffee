'use strict';

angular.module('scraperApp')
  .directive('selectFilePanel', ['$upload', 'Csv', function ($upload, Csv) {
    return {
      templateUrl: 'assets/select_file_panel.html',
      restrict: 'E',
      link: function postLink(scope) {
        var updateCsvs = function (id) {
          Csv.query().$promise.then(function (csvs) {
              scope.csvs = csvs;
              scope.csvSelected = id ? csvs.filter(function (csv) { return csv.id === id })[0] : csvs[0];
          });
        };
        scope.uploadProgress = 0;
        updateCsvs();
        scope.onFileSelect = function ($files) {
            scope.upload = $upload.upload({
                method: 'POST',
                url: 'csvs',
                file: $files[0]
            }).progress(function (e) {
                console.log(e, e.loaded);
                scope.uploadProgress = (100.0 * e.loaded / e.total).toFixed(2);
            }).success(function (csv) {
                scope.uploadProgress = 0;
                updateCsvs(csv.id);
                console.log(csv);
            }).then(function (){},function (){},function (e){
                console.log(e, e.loaded);
            });
        }
      }
    };
  }]);
