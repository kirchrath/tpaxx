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

        var found = rootView.selectMenu(path);
        if (!found) {
            //TODO: show 404 page
            console.log('Page not found');
        } else {
            this.naivgateToCurrent();
        }
    }
});
