'use strict';

/**
 * @ngdoc function
 * @name scraperApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scraperApp
 */
angular.module('scraperApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.fields = [];
  }]);
