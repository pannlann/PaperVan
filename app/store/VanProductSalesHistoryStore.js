Ext.define('PaperVan.store.VanProductSalesHistoryStore', {
	extend : 'Ext.data.Store',
	alias : 'store.vanProductSalesHistory',
	requires : ['PaperVan.model.ProductSalesHistoryModel'],
	id : 'vanProductSalesHistory',
	config : {
		autoLoad : true,
		model : 'PaperVan.model.ProductSalesHistoryModel',
		data : vanProdSalesHistoryData,
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
