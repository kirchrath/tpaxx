var store = Ext.create('Ext.data.Store', {
    fields: ['name', 'email', 'phone'],
    data: [
        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
    ]
});

Ext.define('tpaxx.packages.trip.All',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.tpaxx-packages-trip-all',

    requires: [
        'tpaxx.packages.trip.AllController',
        'tpaxx.packages.trip.AllModel'
    ],

    controller: 'tpaxx-packages-trip-all',

    viewModel: {
        type: 'tpaxx-packages-trip-all'
    },

    title: 'Trip-Management',

    store: store,

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ],

    listeners: {
        itemdblclick: 'onRowEdit'
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'tpaxx-search-field'
        }]
    },{
        xtype: 'pagingtoolbar',
        store: store,
        dock: 'bottom',
        displayInfo: true
    }]
});
