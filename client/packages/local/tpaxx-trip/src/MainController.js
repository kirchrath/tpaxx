Ext.define('tpaxx.packages.trip.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tpaxx-packages-trip-main',


    requires: [
        'tpaxx.packages.trip.TripEditor'
    ],

    onRowEdit: function () {
        Ext.create('Ext.window.Window', {
            title: 'Trip-Verwaltung',
            height: 300,
            width: 400,
            layout: 'fit',
            items: {
                xtype: 'tpaxx-packages-trip-editor',
                border: false
            }
        }).show();
    }
    
});
