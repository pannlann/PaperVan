Ext.define('PaperVan.view.OrderConfirmation', {
    extend : 'Ext.Panel',
    xtype : 'orderConfirmation',
    requires : ['PaperVan.view.OrderItemList','PaperVan.view.OrderMessageList'],
    config : {
//        title : 'Order Confirmation',
        itemId : 'orderConfirmation',
        iconCls : 'user',
        scrollable : {
            direction : 'vertical',
            directionLock : true
        },
        items : [{
            xtype : 'orderMessageList'
        },{
            xtype : 'orderItemList'
        }]
    }
});
