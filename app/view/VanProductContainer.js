Ext.define('PaperVan.view.VanProductContainer', {
	extend : 'Ext.Panel',
	xtype : 'vanProductContainer',
	config : {
		itemId : 'vanProductContainer',
		title : 'Van Products',
		layout : {
			type : 'vbox',
			pack : 'center'
		},
		items : [{
			xtype : 'searchfield',
			placeHolder : VAN_PRODUCT_SEARCH_PLACE_HOLDER,
			itemId : 'vanProductSearch'
		}, {
			xtype : 'vanProductResultList'
		}]
	}
});