Ext.define('tpaxx.packages.core.model.Country', {
    extend: 'Ext.data.Model',
    idProperty: 'code',
    fields: [
        {
            name: 'code', //ISO3166-1-alpha-2
            type: 'string'
        },
        {
            name: 'name',
            type: 'string'
        }
    ]
});
