
Ext.define('tpaxx.view.search.Main',{
    extend: 'Ext.tab.Panel',
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
    },

    initComponent: function () {
        this.items = this.getItems();
        this.callParent();
    },

    getItems: function () {
        return [];
    }
});
