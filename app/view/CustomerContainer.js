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
			autoCorrect : false,
			autoComplete : false,
			autoCapitalize : false,
			itemId : 'custSearch',
			listeners : {
				scope : this,
				'initialize' : function() {
					custSearchTask = Ext.create('Ext.util.DelayedTask', function() {
						onCustomerKeySearch();
					});
				},
				'keyup' : function(field) {
					custSearchTask.delay(600);
				}
			}
		}, {
			xtype : 'selectfield',
			itemId : 'vanScheduleDaySelect',
			label : 'Schdeule Day',
			usePicker : false,
			labelWidth : '50%',
			options : DAYS_SELECTION,
		}, {
			xtype : 'customerList'
		}]
	}
});
