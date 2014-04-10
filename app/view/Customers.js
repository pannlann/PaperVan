Ext.define('PaperVan.view.Customers', {
	// extend : 'Ext.Panel',
	extend : 'Ext.NavigationView',
	xtype : 'customerTab',
	config : {
		itemId : 'customerTab',
		iconCls : 'user',
		title : 'Customers',
		navigationBar : {
			items : [{
				xtype : 'exitButton',
				itemId : 'customerExitButton'
			},
			// xtype : 'button',
			// itemId : 'regionalCustomerButton',
			// ui : 'normal',
			// text : 'Regional',
			// align : 'right',
			// hidden : false
			// }, {
			{
				xtype : 'button',
				itemId : 'customerContainerOptionButton',
				ui : 'normal',
				iconCls : 'more',
				iconMask : true,
				align : 'right',
				hidden : false
			}, {
				xtype : 'button',
				itemId : 'customerDetailOptionButton',
				ui : 'normal',
				iconCls : 'more',
				iconMask : true,
				align : 'right',
				hidden : true
			// }, {
				// xtype : 'button',
				// itemId : 'directCustomerButton',
				// ui : 'normal',
				// text : 'Direct',
				// align : 'right',
				// hidden : true
			}, {
				xtype : 'button',
				itemId : 'customerDetailButton',
				ui : 'normal',
				iconCls : 'info',
				iconMask : true,
				align : 'right',
				hidden : false
			// }, {
				// xtype : 'button',
				// itemId : 'createActivityButton',
				// ui : 'add',
				// text : 'Activity',
				// iconCls : 'compose',
				// iconMask : true,
				// align : 'right',
				// hidden : true
			// }, {
				// xtype : 'button',
				// itemId : 'createDisputeButton',
				// ui : 'add',
				// text : 'Dispute',
				// iconCls : 'compose',
				// iconMask : true,
				// align : 'right',
				// hidden : true
			}]
		},
		items : [{
			xtype : 'customerContainer'
		}]
	}
});
