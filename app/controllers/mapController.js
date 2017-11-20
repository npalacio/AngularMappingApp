angular.module("app").controller("mapController", ["$scope", "esriLoader", "config", function($scope, esriLoader, config){
    
    // $scope.state = {
    //     name: "test name",
    //     differenceInSpending: "diff"
    // };

    $scope.infoWindow = {};
    $scope.infoWindowStyleAttrs = {
        'left': '400px',
        'top': '20px'
    };
    // $scope.styleInfoWindow = function() {
    //     $scope.infoWindowStyle = {
    //         'left': $scope.infoWindow.left,
    //         'top': $scope.infoWindow.top
    //     };
    // };
    var createMap = function(
        Map,
        MapView,
        FeatureLayer
    ) {
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
                // console.log(response);
                var graphic = response.results[0].graphic;
                var screenPoint = response.screenPoint;
                // $scope.state.differenceInSpending = graphic.attributes.DifferenceInmateStudent;
                $scope.infoWindowAttrs.differenceInSpending = graphic.attributes.DifferenceInmateStudent;
                // $scope.infoWindow.left = screenPoint.x + 'px';
                $scope.infoWindowStyleAttrs.left = screenPoint.x + 'px';
                // $scope.infoWindow.top = screenPoint.y + 'px';
                $scope.infoWindowStyleAttrs.top = screenPoint.y + 'px';
                // $scope.styleInfoWindow();
                $scope.$apply();
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
