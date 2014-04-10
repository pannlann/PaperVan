Ext.define('PaperVan.view.CustomerMain', {
    extend : 'Ext.Carousel',
    xtype : 'customerMain',
    config : {
        itemId : 'customerMain',
        items : [{
            xtype : 'customerDetail',
        }, {
            xtype : 'customerContact'
        }, {
            xtype : 'customerRecentActivity'
        }, {
            xtype : 'customerDispute'
        },
        ]
    },

});
