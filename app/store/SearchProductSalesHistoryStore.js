Ext.define('PaperVan.store.SearchProductSalesHistoryStore', {
	extend : 'Ext.data.Store',
	alias : 'store.searchProductSalesHistory',
	requires : ['PaperVan.model.ProductSalesHistoryModel'],
	id : 'searchProductSalesHistory',
	config : {
		autoLoad : true,
		model : 'PaperVan.model.ProductSalesHistoryModel',
		data : searchProdSalesHistoryData,
		sorters : [{
			property : 'date',
			direction : 'DESC'
		}],
		grouper : {
			groupFn : function(record) {
				return 'Product History';
			}
		},
		proxy : {
			type : 'memory',
			reader : {
				type : 'json',
				rootProperty : 'items'
			}
		}
	}
});
