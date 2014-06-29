angular.module('scraperApp')
  .factory 'Csv', ['$resource', ($resource) ->
    $resource 'csvs/:id', id: '@id'
  ]
