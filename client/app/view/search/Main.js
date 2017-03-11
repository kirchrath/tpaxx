
Ext.define('tpaxx.view.search.Main',{
    extend: 'tpaxx.packages.core.MenuPanel',
    fullscreen: true,

    requires: [
        'tpaxx.view.search.MainController',
        'tpaxx.view.search.MainModel',
        'tpaxx.view.search.Field'
    ],

    xtype: 'tpaxx-search-main',

    controller: 'search-main',
    viewModel: {
        type: 'search-main'
    },

    defaults: {
        layout: 'fit'
    }
});
