Ext.define('PaperVan.store.CartStore', {
			extend : 'Ext.data.Store',
			alias : 'store.cart',
			requires : ['PaperVan.model.ProductResultModel'],
			id : 'cart',
			config : {
				autoLoad : true,
				model : 'PaperVan.model.ProductResultModel',
				data : productsInCart,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
