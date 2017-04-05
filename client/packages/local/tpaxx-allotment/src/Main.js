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
                url: 'hotel',
                xtype: 'tpaxx-packages-allotment-hotel-baselist'
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
