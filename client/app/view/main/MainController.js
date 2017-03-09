/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('tpaxx.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes: {
        ':root': {
            action: 'selectMenu',
            condtions: {
                ':root': '[a-z]+'
            }
        }
    },

    selectMenu: function (root) {
        var tabPanel = this.getView();
        var index = tabPanel.items.findIndexBy(function (tab) {
            return tab.url === root;
        });

        tabPanel.setActiveTab(index);
    },

    onTabChange: function (panel, tab) {
        this.redirectTo(tab.url);
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
