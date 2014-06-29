#= require jquery
#= require bootstrap
#= require angular
#= require spin.js/spin.js
#= require angular-spinner
#= require ng-file-upload
#= require_self
#= require_tree .

angular.module 'scraperApp', [
  'angularFileUpload'
]

.config ['$httpProvider', ($httpProvider) ->
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr 'content'
  $httpProvider.interceptors.push ->
    request: (config) ->
      if !~config.url.indexOf '.html'
        config.url = "/api#{config.url}"
      config
]
