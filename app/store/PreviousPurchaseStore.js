Ext.define('PaperVan.store.PreviousPurchaseStore', {
			extend : 'Ext.data.Store',
			alias : 'store.previousPurchase',
			requires : ['PaperVan.model.ProductResultModel'],
			id : 'previousPurchase',
			config : {
				autoLoad : true,
				model : 'PaperVan.model.ProductResultModel',
				data : prevProdData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
