Ext.define('tpaxx.view.search.Field', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.tpaxx-search-field',

    fieldLabel: 'Suche',
    labelAlign: 'right',
    labelWidth: 'auto',

    inputType: 'search',

    // Add specialkey listener
    initComponent: function() {
        this.callParent();
        this.on('specialkey', this.checkEnterKey, this);
        this.enableBubble('search');
    },

    // Handle enter key presses, execute the search if the field has a value
    checkEnterKey: function(field, e) {
        var value = this.getValue();
        if (e.getKey() === e.ENTER && !Ext.isEmpty(value)) {
            this.fireEvent('search', this, value);
        }
    }
});