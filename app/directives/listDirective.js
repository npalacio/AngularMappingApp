    angular.module("app").directive("list", function() {
        return {
            templateUrl: './app/templates/listTemplate.html',
            restrict: 'E',
            controller: 'listController'
        };
    });
