Ext.define('PaperVan.store.VanProductAtpStore', {
	extend : 'Ext.data.Store',
	alias : 'store.vanProductAtp',
	requires : ['PaperVan.model.AtpModel'],
	id : 'vanProductAtp',
	config : {
		autoLoad : true,
		model : 'PaperVan.model.AtpModel',
		data : vanProdAtpData,
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
