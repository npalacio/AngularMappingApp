angular.module("app").controller("infoWindowController", ["$scope", "$window", "identifyService", function($scope, $window, identifyService){
    $scope.attrs = {};
    $scope.loadingAttrs = false;
    var styleInfoWindow = function(displayVal) {
        var listWidth = $window.innerWidth * .15;
        $scope.infoWindowStyle = {
            left: ($scope.click.x + listWidth) + 'px',
            top: $scope.click.y + 'px',
            display: displayVal
        };
    };
    styleInfoWindow("none");
    var identify = function() {
        if($scope.click.objectId) {
            styleInfoWindow("inline");
            $scope.loadingAttrs = true;
            $scope.click.objectId && identifyService.getAttributes($scope.click.objectId).then(function(attributes) {
                $scope.attrs.state = attributes.STATE_NAME;
                $scope.attrs.differenceInSpending = attributes.InmateMinusStudent;
                $scope.attrs.population = attributes.POP2010;
                $scope.loadingAttrs = false;
            });
        }
    };
    $scope.$watch('click', function() {
        identify();
    }, true);
}]);
