angular.module("app").constant("config", {
    layers: {
        educationVsIncarceration: {
            state: {
                url: 'http://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/EducationVersusIncarceration/FeatureServer/0',
                visible: true,
                renderer: {
                    type: 'simple',
                    symbol: {
                        type: 'simple-line',
                        color: [255, 255, 255],
                        outline: {
                            color: [255, 255, 255],
                            width: 6
                        }
                    }
                }
            },
            difference: {
                url: 'http://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/EducationVersusIncarceration/FeatureServer/1',
                visible: true
            }
        }
    },
    queryTasks: {
        list: {
            url: "http://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/EducationVersusIncarceration/FeatureServer/0",
            outFields: ["STATE_NAME","InmateMinusStudent", "POP2010"],
            where: "1=1",
            returnGeometry: false
        },
        identify: {
            url: 'http://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/EducationVersusIncarceration/FeatureServer/0/query',
            outFields: ["STATE_NAME","InmateMinusStudent","POP2010"],
            where: "OBJECTID = {0}",
            returnGeometry: false
        }
    }
});
