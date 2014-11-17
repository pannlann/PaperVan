Ext.define('PaperVan.store.SearchProductAtpStore', {
	extend : 'Ext.data.Store',
	alias : 'store.searchProductAtp',
	requires : ['PaperVan.model.AtpModel'],
	id : 'searchProductAtp',
	config : {
		autoLoad : true,
		model : 'PaperVan.model.AtpModel',
		data : searchProdAtpData,
		grouper : {
			groupFn : function(record) {
				return 'Future ATP list';
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
