Ext.define('PaperVan.store.CustomerStore', {
			extend : 'Ext.data.Store',
			alias : 'store.customer',
			requires : ['PaperVan.model.CustomerModel'],
			id : 'customer',
			config : {
				autoLoad : true,
				model : 'PaperVan.model.CustomerModel',
				sorters : 'custName',
				grouper : {
					groupFn : function(record) {
						return record.get('custName')[0];
					}
				},
				data : customerData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
