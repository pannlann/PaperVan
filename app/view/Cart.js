Ext.define('PaperVan.view.Cart', {
    extend : 'Ext.Carousel',
    xtype : 'cartTab',
    config : {
        itemId : 'cartTab',
        indicator : false,
        iconCls : 'organize',
        title : 'Cart',
        badgeText : productsInCart.items.length,
        items : [{
            xtype : 'cartOrder',
        }, {
            xtype : 'cartOrderDetail'
        }]
    },

});