angular.module("app").controller("listController", ["$scope", "listService", function($scope, listService){
    $scope.listItems = [];
    listService.getListData().then(function(features) {
        $scope.listItems = features;
    });

    $scope.orderList = function(item) {
        // return item1.attributes.STATE_NAME.localCompare(item2.attributes.STATE_NAME);
        return item.attributes.STATE_NAME;
    };
    
}]);
