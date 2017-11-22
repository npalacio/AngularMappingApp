angular.module("app").factory("identifyService", ["$http", "config", function($http, config){
    // var listService = {};
    // var getList = function(Query, QueryTask) {

    //     var listQuerySuccess = function(results) {
    //         return results.features;
    //     };
    //     var listQueryFailure = function(error) {
    //         console.log(error);
    //         return [];
    //     };
    //     var query = new Query();
    //     query.returnGeometry = config.queryTasks.list.returnGeometry;
    //     query.outFields = config.queryTasks.list.outFields;
    //     query.where = config.queryTasks.list.where;
    //     var queryTask = new QueryTask({
    //         url: config.queryTasks.list.url
    //     });

    //     return queryTask.execute(query).then(listQuerySuccess, listQueryFailure);
    // };

    // listService.getListData = function() {
    //     return esriLoader.require([
    //         "esri/tasks/support/Query",
    //         "esri/tasks/QueryTask"
    //     ]).then(function(modules) {
    //         return getList(modules[0], modules[1]);
    //     });
    // }
    
    // return listService;

    var idService = {};
    idService.getAttributes = function(objectId) {
        var idPromise = $http({
            url: config.queryTasks.identify.url,
            params: {
                outFields: config.queryTasks.identify.outFields,
                where: config.queryTasks.identify.where.replace("{0}", objectId),
                returnGeometry: config.queryTasks.identify.returnGeometry,
                f: "pjson"
            }
        }).then(function(results) {
            var attributes = results.data.features[0].attributes;
            return attributes;
        });

        return idPromise;
    };
    return idService;


}]);

