Ext.define('PaperVan.store.OrderMessageStore', {
    extend : 'Ext.data.Store',
    alias : 'store.message',
    requires : ['PaperVan.model.OrderMessageModel'],
    id : 'message',
    config : {
        autoLoad : true,
        model : 'PaperVan.model.OrderMessageModel',
        data : orderMessage,
        sorters : 'messageType',
        grouper : {
            groupFn : function(record) {
                return 'Message';
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
