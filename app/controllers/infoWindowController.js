angular.module("app").controller("infoWindowController", ["$scope", function($scope){
    $scope.infoWindowStyle = {
        'left': '400px',
        'top': '20px'
    };
    var styleInfoWindow = function() {
        $scope.infoWindowStyle = {
            'left': $scope.styleAttrs.left,
            'top': $scope.styleAttrs.top
        };
    };
    $scope.$watch('styleAttrs', function() {
        styleInfoWindow();
    });
}]);
