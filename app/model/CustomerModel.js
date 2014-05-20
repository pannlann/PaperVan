Ext.define("PaperVan.model.CustomerModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [{
            name : 'custName',
            type : 'string'
        }, {
            name : 'custNo',
            type : 'string'
        }, {
            name : 'creditLimit',
            type : 'int'
        }, {
            name : 'creditAvailable',
            type : 'int'
        }, {
            name : 'creditUsed',
            type : 'float'
        }, {
            name : 'custAddr',
            type : 'string'
        }, {
            name : 'creditBlock',
            type : 'string'
        }, {
            name : 'plant',
            type : 'string'
        }, {
            name : 'telNo',
            type : 'string'
        },  {
            name : 'p1Pts',
            type : 'float'
        }, {
            name : 'p1Status',
            type : 'string'
        }, {
            name : 'accountGroup',
            type : 'string'
        }, {
            name : 'monday',
            type : 'string'
        }, {
            name : 'tuesday',
            type : 'string'
        }, {
            name : 'wednesday',
            type : 'string'
        }, {
            name : 'thursday',
            type : 'string'
        }, {
            name : 'friday',
            type : 'string'
        }, {
            name : 'saturday',
            type : 'string'
        }, {
            name : 'sunday',
            type : 'string'
        }, {
            name : 'visitPeriod',
            type : 'string'
        }, {
            name : 'sequence',
            type : 'int'
        }, {
            name : 'address',
            type : 'string'
        } 
        ]
    }
}); 