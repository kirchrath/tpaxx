/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('tpaxx.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Ext.util.History'
    ],

    routes: {
        ':main': 'selectMenu',
        ':main/:sub': 'selectMenu',
        ':main/:sub/:detail': 'selectMenu',
        ':main/:sub/:detail/:idx': 'selectMenu'
    },

    onTabChange: function () {
        this.naivgateToCurrent();
    },

    naivgateToCurrent: function () {
        var url = this.getView().getUrl();
        this.redirectTo(url);
    },

    selectMenu: function () {
        var rootView = this.getView();
        var path = Array.prototype.slice.call(arguments);
        this.hideError();

        var found = rootView.selectMenu(path);
        if (!found) {
            //TODO: show 404 page
            this.showErrorPage();
        } else {
            this.naivgateToCurrent();
        }
    },

    hideError: function () {
        if (this.errorWindow) {
            var errorWindow = this.errorWindow;
            this.errorWindow = null;
            errorWindow.close();
        }
    },

    showErrorPage: function () {
        var me = this;
        me.errorWindow = Ext.create('Ext.window.Window', {
            autoShow: true,
            cls: 'error-page-container',
            closable: false,
            title: me.getViewModel().get('name'),
            titleAlign: 'center',
            maximized: true,
            modal: true,
            border: false,

            listeners: {
                close: function () {
                    if (me.errorWindow) {
                        me.errorWindow = null;
                        Ext.util.History.back();
                    }
                }
            },

            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'container',
                    width: 400,
                    cls:'error-page-inner-container',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'label',
                            cls: 'error-page-top-text',
                            text: '404'
                        },
                        {
                            xtype: 'label',
                            cls: 'error-page-desc',
                            html: '<div>Seems you\'ve hit a wall!</div>'
                        },
                        {
                            xtype: 'tbspacer',
                            flex: 1
                        }
                    ]
                }
            ]
        });
    }
});
