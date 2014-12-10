Ext.define('PaperVan.view.CustomerContainerOption', {
	extend : 'Ext.Panel',
	xtype : 'customerContainerOption',
	config : {
		draggable : false,
		floating : true,
		hideOnMaskTap : true,
		modal : true,
		right : 0,
		top : 50,
		hidden : true,
		padding : '0 5 0 5',
		items : [{
			xtype : 'fieldset',
			title : 'More Options',
			// instructions : 'Please note that it will take a minute to retrieve regional customers',
			items : [{
				xtype : 'selectfield',
				itemId : 'refreshCustomerOptionSelect',
				label : 'Customer',
				usePicker : false,
				labelWidth : '50%',
				options : CUSTOMER_SELECTION
			}, {
				xtype : 'button',
				itemId : 'updateVanScheduleButton',
				ui : 'confirm',
				iconCls : 'compose',
				iconMask : true,
				text : 'Update Van Schedule'
			}, {
				xtype : 'button',
				itemId : 'createCustomerButton',
				ui : 'action',
				iconCls : 'add',
				iconMask : true,
				text : 'New customer'
			}]
		}]
	}
});
