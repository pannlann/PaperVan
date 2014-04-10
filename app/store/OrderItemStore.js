Ext.define('PaperVan.store.OrderItemStore', {
    extend : 'Ext.data.Store',
    alias : 'store.orderitem',
    requires : ['PaperVan.model.OrderItemModel'],
    id : 'orderitem',
    config : {
        autoLoad : true,
        model : 'PaperVan.model.OrderItemModel',
        data : simulatedOrder,
        grouper : {
            groupFn : function(record) {
                return 'Items';
            }
        },
        proxy : {
            type : 'memory',
            reader : {
                type : 'json',
                rootProperty : 'items'
            }
        }
    }
});
