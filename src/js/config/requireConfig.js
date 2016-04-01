require.config({
    baseUrl: "js",
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery.min',
        'underscore': '../../bower_components/underscore/underscore-min',
        'backbone': '../../bower_components/backbone/backbone-min',
        'marionette': '../../bower_components/backbone.marionette/lib/backbone.marionette.min',
        'text': '../../bower_components/text/text'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },
        underscore: {
            'exports': '_'
        }
    }

});
