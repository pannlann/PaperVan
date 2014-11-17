Ext.define('PaperVan.store.PreviousProductSalesHistoryStore', {
	extend : 'Ext.data.Store',
	alias : 'store.preProductSalesHistory',
	requires : ['PaperVan.model.ProductSalesHistoryModel'],
	id : 'preProductSalesHistory',
	config : {
		autoLoad : true,
		model : 'PaperVan.model.ProductSalesHistoryModel',
		data : preProdSalesHistoryData,
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
