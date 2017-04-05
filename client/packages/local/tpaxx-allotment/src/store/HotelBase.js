Ext.define('tpaxx.packages.allotment.store.HotelBase', {
    extend: 'Ext.data.Store',

    alias: 'store.tpaxx-packages-allotment-hotelbase',

    model: 'tpaxx.packages.allotment.model.HotelBase',

    data: {
        items: [
            {name: 'Jean Luc', code: 'asdfsad1'},
            {name: 'Jean Luc 1', code: 'asdfsad2'},
            {name: 'Jean Luc 2', code: 'asdfsad3'},
            {name: 'Jean Luc 3', code: 'asdfsad4'},
            {name: 'Jean Luc 4', code: 'asdfsad5'}
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
        // type: 'ajax',
        // url: '/users.json',
        // reader: {
        //     type: 'json',
        //     rootProperty: 'users'
        // }
        // autoLoad: true
    }
});
