Ext.define('PaperVan.store.PreviousProductAtpStore', {
	extend : 'Ext.data.Store',
	alias : 'store.previousProductAtp',
	requires : ['PaperVan.model.AtpModel'],
	id : 'previousProductAtp',
	config : {
		autoLoad : true,
		model : 'PaperVan.model.AtpModel',
		data : previousProdAtpData,
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
