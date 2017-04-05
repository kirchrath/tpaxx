Ext.define('tpaxx.packages.allotment.hotel.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tpaxx-packages-allotment-hotel',

    requires: [
        'tpaxx.packages.allotment.hotel.MainModel',
        'tpaxx.packages.allotment.hotel.Editor',
        'tpaxx.packages.allotment.model.HotelBase'
    ],

    onAddHotel: function () {
        var hotel = Ext.create('tpaxx.packages.allotment.model.HotelBase', {});
        this.showHotelDialog(hotel);
    },

    onRowdblclick: function (grid, record) {
        var address = record.get('address') || {};
        record.set('address', address);
        this.showHotelDialog(record);
    },

    onLoadHotel: function (record) {
        this.getViewModel().setData({
            hotel: record
        });
    },

    onSave: function () {
        var viewModel = this.getViewModel();
        var hotel = viewModel.getData().hotel;

        hotel.save({
            success: function () {
                console.log('success');
            },
            failure: function () {
                console.log('failure');
            }
        });
    },

    showHotelDialog: function (record) {
        Ext.create('tpaxx.packages.core.Window', {
            title: 'Hotel Basedata',
            height: 440,
            width: 600,
            modal: true,
            autocenter: true,
            layout: 'fit',
            items: {
                xtype: 'tpaxx-packages-allotment-hotel-editor'
            },
            onShowComplete: function () {
                var win = this;
                var editor = win.items.getAt(0);
                editor.fireEvent('loadhotel', record);
            }
        }).show();
    }
});
