Ext.define('tpaxx.packages.allotment.Main',{
    extend: 'tpaxx.packages.core.MenuPanel',
    alias: 'widget.tpaxx-packages-allotment-main',

    title: 'Allotment-Management',

    defaults: {
        bodyPadding: 10,
    },

    items: [
        {
            title: 'Hotel',
            xtype: 'tabpanel',
            url: 'hotel',
            items: [
                {
                    title: 'Base',
                    html: '...'
                },
                {
                    title: 'Contract',
                    html: '...'
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
    ],

    initComponent: function () {
        console.log('init component');
        this.callParent();
    }
});
