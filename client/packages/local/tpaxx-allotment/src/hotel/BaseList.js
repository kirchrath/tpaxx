Ext.define('tpaxx.packages.allotment.hotel.BaseList', {
    extend: 'Ext.grid.Panel',
    xtype: 'tpaxx-packages-allotment-hotel-baselist',

    requires: [
        'tpaxx.packages.allotment.store.HotelBase',
        'tpaxx.packages.allotment.hotel.MainController',
        'Ext.ux.rating.Picker'
    ],

    controller: 'tpaxx-packages-allotment-hotel',

    store: {
        type: 'tpaxx-packages-allotment-hotelbase'
    },

    listeners: {
        addHotel: 'onAddHotel',
        rowdblclick: 'onRowdblclick'
    },

    columns: {
        defaults: {
            align: 'left'
        },
        items: [
            {text: 'Code', dataIndex: 'code'},
            {text: 'Name', dataIndex: 'name', flex: 1},
            {
                text: 'Category',
                dataIndex: 'category',
                xtype: 'widgetcolumn',
                width: 100,
                widget: {
                    xtype: 'rating',
                    rounding: 0.5,
                    listeners: {
                        change: function () {
                            return false;
                        }
                    }
                }
            }
        ]
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            text: 'Add',
            initComponent: function () {
                this.callParent();
                this.enableBubble('addHotel');
            },
            handler: function () {
                this.fireEvent('addHotel');
            }
        }]
    }, {
        xtype: 'pagingtoolbar',
        store: store,
        dock: 'bottom',
        displayInfo: true
    }]
});
