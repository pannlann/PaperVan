Ext.define('PaperVan.store.ContactStore', {
			extend : 'Ext.data.Store',
			alias : 'store.contact',
			requires : ['PaperVan.model.ContactModel'],
			id : 'contact',
			config : {
				autoLoad : true,
				model : 'PaperVan.model.ContactModel',
				sorters : 'contName',
				grouper : {
					groupFn : function(record) {
						return record.get('type');
					}
				},
				data : contactData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
