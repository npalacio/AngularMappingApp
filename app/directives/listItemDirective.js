angular.module("app").directive("listItem", function() {
    return {
        templateUrl: './app/templates/listItemTemplate.html',
        restrict: 'E',
        controller: 'listItemController',
        scope: {
            iteminfo: '=',
            selectedObjectId: "="
        }
    };
});
