Ext.define('PaperVan.view.CustomerContainer', {
	extend : 'Ext.Panel',
	xtype : 'customerContainer',
	config : {
		itemId : 'customerContainer',
		title : 'Customers',
		layout : {
			type : 'vbox',
			pack : 'center'
		},
		items : [{
			xtype : 'searchfield',
			placeHolder : CUST_SEARCH_PLACE_HOLDER,
			itemId : 'custSearch'
		}, {
			xtype : 'customerList'
		}]
	}
});
