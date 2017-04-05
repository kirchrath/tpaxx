Ext.define('tpaxx.packages.allotment.Main', {
    extend: 'tpaxx.packages.core.MenuPanel',
    alias: 'widget.tpaxx-packages-allotment-main',

    title: 'Allotment-Management',

    requires: [
        'tpaxx.packages.allotment.hotel.BaseList'
    ],

    getMenuItems: function () {
        return [
            {
                title: 'Hotel',
                xtype: 'tpaxx-menupanel',
                url: 'hotel',
                plain: true,
                items: [
                    {
                        title: 'Base',
                        url: 'base',
                        layout: 'fit',
                        items: [{
                            xtype: 'tpaxx-packages-allotment-hotel-baselist'
                        }]
                    },
                    {
                        title: 'Contract',
                        url: 'contract',
                        items: [{
                            html: 'contract...'
                        }]
                    }
                ]
            },
            {
                title: 'Flug',
                url: 'flight',
                html: '...'
            },
            {
                title: 'Mietwagen',
                url: 'car',
                html: '...'
            }
        ];
    }
});
