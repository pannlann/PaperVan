Ext.define("PaperVan.model.ActivityModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [ {
            name : 'actNo',
            type : 'string'
        },{
            name : 'actType',
            type : 'string'
        },{
            name : 'contName',
            type : 'string'
        }, {
            name : 'contNo',
            type : 'string'
        }, {
            name : 'fromDate',
            type : 'string'
        }, {
            name : 'toDate',
            type : 'string'
        }, {
            name : 'text',
            type : 'string'
        }, {
            name : 'createdBy',
            type : 'string'
        }, {
            name : 'type',
            type : 'string'
        }]
    }
}); 