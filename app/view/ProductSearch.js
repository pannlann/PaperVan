Ext.define('PaperVan.view.ProductSearch', {
    extend : 'Ext.form.Panel',
    xtype : 'productSearch',
    config : {
        title : 'Product Search',
        padding : '0 0 0 0',
        defaults : {
            style : 'border-width: 2px 1px 0px 1px; border-style: groove',
            labelWidth : '60%'
        },
        items : [{
            xtype : 'searchfield',
            name : 'searchString',
            itemId : 'searchString',
            placeHolder : 'Enter search here...'
        }, {
            xtype : 'selectfield',
            name : 'searchPlant',
            itemId : 'searchPlant',
            label : 'Plant',
            usePicker : false,
            options : DEFAULT_PLANTS
        }, {
            xtype : 'numberfield',
            itemId : 'searchAtpQty',
            name : 'atpQty',
            label : 'Minimum Stk',
            minValue : 0,
            value : '1'
        }, {
            xtype : 'checkboxfield',
            itemId : 'searchAltProduct',
            name : 'altProduct',
            label : 'Incl. Alternative',
            value : 'X',
            checked : false
        }, {
            xtype : 'checkboxfield',
            itemId : 'searchSupZero',
            name : 'supZeroAtp',
            label : 'Excl. 0 Stk',
            value : 'X',
            checked : true
        }, {
            xtype : 'button',
            itemId : 'productSearchButton',
            text : 'Search'
        }]
        // }]
    }
});
