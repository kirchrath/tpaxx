Ext.define('tpaxx.packages.trip.AllController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tpaxx-packages-trip-all',


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
