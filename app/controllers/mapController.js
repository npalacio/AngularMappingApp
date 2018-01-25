angular.module("app").controller("mapController", ["$scope", "$window", "esriLoader", "config", function($scope, $window, esriLoader, config){
    $scope.clickInfo = {};
    var createMap = function(
        Map,
        MapView,
        FeatureLayer
    ) {
        var resizeMap = function() {
            var mapWidth = $window.innerWidth - 317;
            var mapHeight = $window.innerHeight - 50;
            $scope.mapStyle = {
                width: mapWidth + "px",
                height: mapHeight + "px"
            };
        };
        resizeMap();
        angular.element($window).bind('resize', function() {
            resizeMap();
            $scope.$digest();
        });
        var layers = [];
        var stateOutline = new FeatureLayer({
            url: config.layers.educationVsIncarceration.state.url,
            visible: config.layers.educationVsIncarceration.state.visible,
            renderer: config.layers.educationVsIncarceration.state.renderer
        });
        var difference = new FeatureLayer({
            url: config.layers.educationVsIncarceration.difference.url,
            visible: config.layers.educationVsIncarceration.difference.visible,
        });
        layers.push(difference);
        layers.push(stateOutline);
        var map = new Map({
            basemap: 'topo',
            layers: layers
        });
        var mapView = new MapView({
            container: 'map',
            center: [-95, 39],
            map: map,
            zoom: 5
        });
        var clickHandler = function(e) {
            mapView.hitTest(e).then(function(response) {
                var graphic = response.results[0].graphic;
                var screenPoint = response.screenPoint;
                $scope.clickInfo.objectId = graphic.attributes.OBJECTID;
                $scope.clickInfo.x = screenPoint.x;
                $scope.clickInfo.y = screenPoint.y;
                // Have to manually call $apply since this async call happens outside angular ecosystem
                $scope.$apply();
                // Pass event to list controller
                $scope.$emit('map:click',{
                    objectId: graphic.attributes.OBJECTID
                });
            });
        };
        mapView.on("click", clickHandler);
    };

    esriLoader.require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
    ], createMap);
}]);
