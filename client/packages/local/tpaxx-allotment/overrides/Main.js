
Ext.define('tpaxx.packages.allotment.overrides.Main',{
    override: 'tpaxx.view.main.Main',

    requires: [
        'tpaxx.packages.allotment.Main'
    ],

    getMenuItems: function () {
        var items = this.callParent();
        items.push({
            title: 'Allotment',
            iconCls: 'fa-cloud',
            url: 'allotment',
            items: [{
                xtype: 'tpaxx-packages-allotment-main'
            }]
        });

        return items;
    }
});
