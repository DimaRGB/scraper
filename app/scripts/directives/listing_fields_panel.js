'use strict';

/**
 * @ngdoc directive
 * @name scraperApp.directive:listingFieldsPanel
 * @description
 * # listingFieldsPanel
 */
angular.module('scraperApp')
    .directive('listingFieldsPanel', function () {
        return {
            templateUrl: 'views/listing_fields_panel.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                scope.addField = function () {
                    scope.fields.push(scope.newField);
                    scope.newField = '';
                };
                scope.deleteField = function (index) {
                    scope.fields.splice(index, 1);
                }
            }
        };
    });
