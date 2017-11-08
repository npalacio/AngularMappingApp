    angular.module("app").factory("listService", ["$http", "esriLoader", "config", function($http, esriLoader, config){
        var listService = {};
        var getList = function(Query, QueryTask) {

            var listQuerySuccess = function(results) {
                return results.features;
            };
            var listQueryFailure = function(error) {
                console.log(error);
                return [];
            };
            var query = new Query();
            query.returnGeometry = config.queryTasks.list.returnGeometry;
            query.outFields = config.queryTasks.list.outFields;
            query.where = config.queryTasks.list.where;
            var queryTask = new QueryTask({
                url: config.queryTasks.list.url
            });

            return queryTask.execute(query).then(listQuerySuccess, listQueryFailure);
        };

        listService.getListData = function() {
            return esriLoader.require([
                "esri/tasks/support/Query",
                "esri/tasks/QueryTask"
            ]).then(function(modules) {
                return getList(modules[0], modules[1]);
            });
        }
        
        return listService;


    }]);
