Ext.define('tpaxx.packages.allotment.hotel.DescriptionEditor', {
    extend: 'Ext.form.Panel',
    xtype: 'tpaxx-packages-allotment-hotel-descriptioneditor',
    scrollable: true,
    bodyPadding: 10,

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    fieldDefaults: {
        selectOnFocus: true
    },
    items: [

    ],

    initComponent: function () {
        var me = this;
        me.callParent();
        var languages = [
            {
                code: 'de_de',
                name: 'Deutsch'
            },
            {
                code: 'en_gb',
                name: 'English'
            },
            {
                code: 'es_es',
                name: 'Español'
            }
        ];

        Ext.each(languages, function (language) {
            me.addLanguage(language);
        });
    },

    addLanguage: function (language) {
        this.add({
            title: language.name,
            xtype: 'fieldset',
            defaultType: 'textarea',
            layout: 'column',
            padding: 5,
            defaults: {
                padding: '5',
                columnWidth: 1
            },
            items: {
                name: language.code
            }
        });
    },

    // Reset and Submit buttons
    buttons: [{
        text: 'Reset',
        handler: function () {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Submit',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: function () {
            var formPanel = this.up('form');
            var form = formPanel.getForm();
            if (form.isValid()) {
                console.log(form.getValues());
            }
        }
    }]
});
