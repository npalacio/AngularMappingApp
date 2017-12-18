angular.module("app").controller("listController", ["$scope", "$anchorScroll", "listService", function($scope, $anchorScroll, listService){
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
}]);
