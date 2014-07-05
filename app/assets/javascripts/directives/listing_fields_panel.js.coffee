angular.module 'scraperApp'

.directive 'listingFieldsPanel', [->
  templateUrl: 'assets/listing_fields_panel.html'
  restrict: 'E'
  link: (scope) ->
    scope.newField = {}
    scope.addField = ->
      return unless scope.newField.text
      return if scope.fields.filter((field) -> field.text == scope.newField.text).length
      scope.fields.push(scope.newField);
      scope.newField = {};
    };
    scope.deleteField = function (index) {
      scope.fields.splice(index, 1);
]
