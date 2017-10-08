var path = location.pathname.replace(/\/[^\/]+$/, '');
require({
    paths: {
        // This is the text plugin that is loaded when you prefix a dependency with 'text!'
        // text: "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
        angular: "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min",
        app: path + "app/app",
        // route: "app/route",
        controllers: path + "app/controllers",
        // directives: "app/directives",
        // templates: "app/templates",
        // factories: "app/factories"
    }
});

require([
    "angular"
], function(
    ang
) {
    require([
        "app"
    ], function(
        app
    ) {
        require([
            "controllers/controller"
            // "factories/noteFactory"
        ], function(
            controller
            // noteFactory
        ) {
            require([
                // "route",
                // "controllers/mainController",
                // "controllers/homeController",
                // "controllers/myNotesController",
                // "controllers/contactUsController",
                // "directives/navBarDirective",
                // "directives/headerDirective"
            ], function(
                // route,
                // mainController,
                // homeController,
                // myNotesController,
                // contactUsController,
                // navBarDirective,
                // headerDirective
            ) {
                // Once we have our module fully loaded and have added our 
                // other parts to it we bootstrap it to our document
                angular.bootstrap(document,["app"]);
            });
        });
    });
});