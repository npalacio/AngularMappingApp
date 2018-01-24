angular.module("app").controller("listController", ["$scope", "$window", "listService", function($scope, $window, listService){
    $scope.listItems = [];
    $scope.selectedObjectId = -1;
    listService.getListData().then(function(features) {
        $scope.listItems = features;
    });

    $scope.orderList = function(item) {
        return item.attributes.STATE_NAME;
    };
    
    $scope.$on('list:selectItem', function(event, data) {
        $scope.selectedObjectId = data.objectId;
    });
    var resizeMap = function() {
        // var listWidth = $window.innerWidth - 350;
        var mapHeight = $window.innerHeight - 50;
        $scope.listStyle = {
            // width: mapWidth + "px",
            height: mapHeight + "px"
        };
    };
    resizeMap();
    angular.element($window).bind('resize', function() {
        resizeMap();
        $scope.$digest();
    });
}]);
