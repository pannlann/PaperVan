Ext.define("PaperVan.model.OrderMessageModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [{
            name : 'messageType',
            type : 'string'
        }, {
            name : 'message',
            type : 'string'
        }]
    }
}); 