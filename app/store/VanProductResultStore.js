Ext.define('PaperVan.store.VanProductResultStore', {
			extend : 'Ext.data.Store',
			alias : 'store.vanProductResult',
			requires : ['PaperVan.model.ProductResultModel'],
			id : 'vanProductResult',
			config : {
				autoLoad : true,
				model : 'PaperVan.model.ProductResultModel',
				data : vanProdResultData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
