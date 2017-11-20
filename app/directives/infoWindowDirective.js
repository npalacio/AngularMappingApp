angular.module("app").directive("infoWindow", function() {
    return {
        templateUrl: './app/templates/infoWindowTemplate.html',
        restrict: 'E',
        scope: {
            attrs: "=",
            styleAttrs: "="
        }
    };
});

