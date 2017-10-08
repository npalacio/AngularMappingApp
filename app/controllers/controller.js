define([
    "app",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/MapImageLayer"
], function(
    app,
    Map,
    MapView,
    MapImageLayer
) {
    return app.controller("controller", ["$scope", function($scope){
        var layers = [];
        var layer = new MapImageLayer({
            url: 'https://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_Average_Household_Size/MapServer',
            visible: true
        });
        layers.push(layer);
        var map = new Map({
            basemap: 'topo',
            layers: layers
        });
        var mapView = new MapView({
            container: 'map',
            map: map,
            zoom: 5
        });
    }]);
});
