Ext.define('PaperVan.store.ProductResultStore', {
			extend : 'Ext.data.Store',
			alias : 'store.productResult',
			requires : ['PaperVan.model.ProductResultModel'],
			id : 'productResult',
			config : {
				autoLoad : true,
				model : 'PaperVan.model.ProductResultModel',
				data : prodResultData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
