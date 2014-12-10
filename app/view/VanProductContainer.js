Ext.define('PaperVan.view.VanProductContainer', {
	extend : 'Ext.Panel',
	xtype : 'vanProductContainer',
	config : {
		itemId : 'vanProductContainer',
		title : 'My Stock',
		layout : {
			type : 'vbox',
			pack : 'center'
		},
		items : [{
			xtype : 'searchfield',
			autoCorrect : false,
			autoComplete : false,
			autoCapitalize : false,
			placeHolder : VAN_PRODUCT_SEARCH_PLACE_HOLDER,
			itemId : 'vanProductSearch',
			listeners : {
				scope : this,
				'initialize' : function() {
					vanProdSearchTask = Ext.create('Ext.util.DelayedTask', function() {
						onVanProductSearch();
					});
				},
				'keyup' : function(field) {
					vanProdSearchTask.delay(600);
				}
			}
		}, {
			xtype : 'vanProductResultList'
		}]
	}
});
