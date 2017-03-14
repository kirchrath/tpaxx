/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('tpaxx.view.main.Main', {
    extend: 'tpaxx.packages.core.MenuPanel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'tpaxx.view.main.MainController',
        'tpaxx.view.main.MainModel',
        'tpaxx.view.search.Main'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0,
            width: 100
        },
        iconCls: 'fa-paper-plane-o'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    listeners: {
        tabchange: 'onTabChange'
    },

    defaults: {
        bodyPadding: 10,
        layout: 'fit',
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    getMenuItems: function () {
        var items = [{
            title: 'Search',
            iconCls: 'fa-search',
            items: [{
                xtype: 'tpaxx-search-main'
            }],
            url: 'search'
        }, {
           title: 'Settings',
           iconCls: 'fa-cog',
           bind: {
               html: '{loremIpsum}'
           },
           url: 'settings'
        }];
        return items;
    }
});
