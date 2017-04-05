Ext.define('tpaxx.packages.core.Window', {
    extend: 'Ext.window.Window',
    show: function (animateTarget, callback, scope) {
        var me = this;
        var result = me.callParent(animateTarget, callback, scope);

        if (me.autocenter) {
            function _center() {
                me.center();
            }

            Ext.get(window).on('resize', _center);
            me.on('resize', _center);
            me.on('beforeclose', function () {
                Ext.get(window).un(_center);
            });
        }

        return result;
    }
});
