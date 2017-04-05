Ext.define('tpaxx.packages.allotment.model.HotelBase', {
    extend: 'Ext.data.Model',
    idProperty: 'code',
    fields: [
        {
            name: 'code',
            type: 'string'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'category',
            type: 'int'
        },
        {
            name: 'address_primary',
            type: 'string'
        },
        {
            name: 'address_secondary',
            type: 'string'
        },
        {
            name: 'address_zip',
            type: 'string'
        },
        {
            name: 'address_city',
            type: 'string'
        },
        {
            name: 'address_country',
            type: 'string'
        }
    ]
});