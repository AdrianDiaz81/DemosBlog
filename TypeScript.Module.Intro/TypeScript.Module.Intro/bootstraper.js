/// <reference path="scripts/typings/requirejs/require.d.ts" />
require.config({
    baseUrl: "scripts/app",
    paths: {
        'jquery': '../vendor/jquery/jquery-2.1.4',
        'mustache': '../vendor/mustache/mustache'
    }
});
require(['app'], function (app) {
    app.run();
});
