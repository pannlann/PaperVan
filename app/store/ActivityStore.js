Ext.define('PaperVan.store.ActivityStore', {
	extend : 'Ext.data.Store',
	alias : 'store.activity',
	requires : ['PaperVan.model.ActivityModel'],
	id : 'activity',
	config : {
		autoLoad : true,
		model : 'PaperVan.model.ActivityModel',
		sorters : [{
			property : 'fromDate',
			direction : 'DESC'
		}, {
			property : 'actNo',
			direction : 'DESC'
		}],
		grouper : {
			groupFn : function(record) {
				return record.get('type');
			}
		},
		data : activityData,
		proxy : {
			type : 'memory',
			reader : {
				type : 'json',
				rootProperty : 'items'
			}
		}
	}
});
