Ext.define('tpaxx.packages.core.MenuPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'tpaxx-menupanel',

    statics: {
        getTabMenuPanel: function (menuPanelCandidate) {
            var me = this;
            for(var i = 0; i < 5; i++) {

                if (menuPanelCandidate instanceof me) {
                    return menuPanelCandidate;
                }

                if (!menuPanelCandidate.items || menuPanelCandidate.items.length !== 1) {
                    return null;
                }

                menuPanelCandidate = menuPanelCandidate.items.getAt(0);
            }

        }
    },

    initComponent: function () {
        var me = this;
        var items = me.getMenuItems();
        if (items.length) {
            me.items = items;
        }
        if (!me.items.length) {
            throw new Error('Override getMenuItems or define items');
        }


        me.on('tabchange', function (panel, tab) {
            var path = [tab.url];
            me.fireEvent('menuselected', path, tab);
        });

        me.on('menuselected', function (path, initiator) {
            var parent = me.findParentByType('tpaxx-menupanel');
            if (!parent) {
                var menuPanelCandidate = tpaxx.packages.core.MenuPanel.getTabMenuPanel(initiator);
                path = path.reverse();

                if (menuPanelCandidate) {
                    var subUrl = menuPanelCandidate.getUrl();
                    if (subUrl) {
                        path.push(subUrl);
                    }
                }
                var fullPath = path.join('/');
                me.fireEvent('navigate', fullPath);
                return;
            }
            var activeTab = parent.getActiveTab();
            var activeUrl = activeTab.url;

            path.push(activeUrl);
            parent.fireEvent('menuselected', path, initiator);
        });

        me.callParent();
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
            } else if (found) {
                var menuCandidate = tpaxx.packages.core.MenuPanel.getTabMenuPanel(item);
                if (menuCandidate) {
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

        var menuPanelCandidate = tpaxx.packages.core.MenuPanel.getTabMenuPanel(activeTab);

        if (menuPanelCandidate) {
            var subUrl = menuPanelCandidate.getUrl();
            if (subUrl) {
                url += '/' + subUrl;
            }
        }
        return url;
    }
});
