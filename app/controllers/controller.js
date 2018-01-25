angular.module("app").controller("controller", ["$scope", "$window", function($scope, $window){
    $scope.$on('map:click', function(event, data) {
        event.stopPropagation();
        $scope.$broadcast('list:selectItem', data);
        //This is a change in the test branch
        //This is a change in the test branch that will be merged into master
    });
}]);
