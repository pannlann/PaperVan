Ext.define('PaperVan.store.FavoriteStore', {
			extend : 'Ext.data.Store',
			alias : 'store.favorite',
			requires : ['PaperVan.model.ProductResultModel'],
			id : 'favorite',
			config : {
				autoLoad : true,
				model : 'PaperVan.model.ProductResultModel',
				data : favoriteData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
