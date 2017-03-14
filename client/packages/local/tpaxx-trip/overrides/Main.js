
Ext.define('tpaxx.packages.trip.Main',{
    override: 'tpaxx.view.main.Main',

    requires: [
        'tpaxx.packages.trip.Main'
    ],

    getMenuItems: function () {
        var items = this.callParent();
        items.push({
            title: 'Trip',
            iconCls: 'fa-globe',
            items: [{
                xtype: 'tpaxx-packages-trip-main'
            }],
            url: 'trip'
        });

        return items;
    }
});
