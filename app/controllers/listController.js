angular.module("app").controller("listController", ["$scope", "listService", function($scope, listService){
    $scope.listItems = [];
    listService.getListData().then(function(features) {
        $scope.listItems = features;
    });
    
}]);
