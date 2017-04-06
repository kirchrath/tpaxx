Ext.define('tpaxx.packages.allotment.hotel.BaseEditor', {
    extend: 'Ext.form.Panel',
    xtype: 'tpaxx-packages-allotment-hotel-baseeditor',
    scrollable: true,
    bodyPadding: 10,

    requires: [
        'tpaxx.packages.core.store.Country',
        'Ext.ux.rating.Picker'
    ],

    controller: 'tpaxx-packages-allotment-hotel',
    viewModel: {
        type: 'tpaxx-packages-allotment-hotel'
    },

    listeners: {
        loadhotel: 'onLoadHotel',
        save: 'onSave'
    },


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
        {
            title: 'Base',
            xtype: 'fieldset',
            defaultType: 'textfield',
            layout: 'column',
            padding: 5,
            defaults: {
                padding: '5',
                columnWidth: 0.5
            },
            items: [
                {
                    fieldLabel: 'Name',
                    name: 'name',
                    allowBlank: false,
                    bind: '{hotel.name}'
                },
                {
                    fieldLabel: 'Code',
                    name: 'code',
                    allowBlank: false,
                    bind: '{hotel.code}'
                },
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Category',
                    items: [
                        {

                            xtype: 'rating',
                            name: 'name',
                            allowBlank: false,
                            bind: '{hotel.category}',
                            rounding: 0.5,
                            scale: '175%'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Address',
            xtype: 'fieldset',
            defaultType: 'textfield',
            layout: 'column',
            padding: 5,
            defaults: {
                padding: '5',
                columnWidth: 0.5
            },
            items: [
                {
                    fieldLabel: 'Primary',
                    name: 'address_primary',
                    bind: '{hotel.address_primary}'
                },
                {
                    fieldLabel: 'Secondary',
                    name: 'address_secondary',
                    bind: '{hotel.address_secondary}'
                },
                {
                    fieldLabel: 'Postalcode',
                    name: 'address_zip',
                    bind: '{hotel.address_zip}'
                },
                {
                    fieldLabel: 'City',
                    name: 'address_city',
                    bind: '{hotel.address_city}'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Choose Country',
                    name: 'address_country',
                    bind: '{hotel.address_country}',
                    store: 'country',
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'code'
                }
            ]
        }
    ],

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
                formPanel.fireEvent('save');
            }
        }
    }]
});
