angular.module("app").controller("controller", ["$scope", "$window", function($scope, $window){
    $scope.$on('map:click', function(event, data) {
        event.stopPropagation();
        $scope.$broadcast('list:selectItem', data);
    });
    $scope.$on('map:closeInfoWindow', function(event, data) {
        event.stopPropagation();
        $scope.$broadcast('list:deselectItem', data);
    });
}]);
