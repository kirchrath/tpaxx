Ext.define('tpaxx.packages.core.MenuPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'tpaxx-menupanel',

    initComponent: function () {
        this.items = this.getMenuItems();
        this.callParent();
    },

    getMenuItems: function () {
        return [];
    },

    selectMenu: function (path) {
        var me = this;
        var subPath = Ext.clone(path);
        var pathRoot = subPath.shift();

        var pathMatch = false;

        me.items.each(function (item, index) {
            var found = item.url === pathRoot;
            if (found) {
                me.setActiveTab(index);
            }
            if (!subPath.length) {
                pathMatch = found;
            } else if (found && item.items) {
                var menuCandidate = item.items.getAt(0);
                if (menuCandidate && menuCandidate.selectMenu) {
                    pathMatch = menuCandidate.selectMenu(subPath);
                }
            }
            return !found; // each will stop when 'false' is returned
        });

        return pathMatch;
    },

    getUrl: function () {
        var activeTab = this.getActiveTab();
        var url = activeTab.url;
        var tabView = activeTab.items.getAt(0);
        if (tabView && tabView.getUrl) {
            url += '/' + tabView.getUrl();
        }
        return url;
    }
});
