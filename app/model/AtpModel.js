Ext.define("PaperVan.model.AtpModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [ {
            name : 'date',
            type : 'string'
        }, {
            name : 'atpQty',
            type : 'float'
        }]
    }
}); 