angular.module 'scraperApp'

.directive 'selectFilePanel', ['$upload', 'Csv', ($upload, Csv) ->
  templateUrl: 'assets/select_file_panel.html'
  restrict: 'E'
  link: (scope) ->
    updateCsvs = (id) ->
      Csv.query().$promise.then (csvs) ->
        scope.csvs = csvs
        scope.csvSelected = if id then csvs.filter((csv) -> csv.id == id)[0] else csvs[0]
    scope.uploadProgress = 0
    updateCsvs()
    scope.onFileSelect = ($files) ->
      scope.upload = $upload.upload
        method: 'POST'
        url: 'csvs'
        file: $files[0]
      .progress (e) ->
          console.log e, e.loaded
          scope.uploadProgress = (100 * e.loaded / e.total).toFixed 2
      .success (csv) ->
          scope.uploadProgress = 0
          updateCsvs csv.id
]
