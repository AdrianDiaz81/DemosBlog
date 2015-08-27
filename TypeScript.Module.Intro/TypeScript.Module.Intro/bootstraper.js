/// <reference path="scripts/typings/requirejs/require.d.ts" />
require.config({
    baseUrl: "scripts/app"
});
require(['app'], function (app) {
    app.run();
});
