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
				// xtype : 'button',
				// itemId : 'camera',
				// ui : 'normal',
				// iconCls : 'camera',
				// iconMask : true,
				// align : '',
				// hidden : false
			// }, {
				xtype : 'button',
				itemId : 'customerContainerOptionButton',
				ui : 'normal',
				iconCls : 'more',
				iconMask : true,
				align : 'right',
				hidden : false
			}, {
				xtype : 'button',
				itemId : 'deleteVanScheduleButton',
				ui : 'decline',
				iconMask : true,
				iconCls : 'trash',
				align : 'right',
				hidden : true
			}, {
				xtype : 'button',
				itemId : 'customerDetailOptionButton',
				ui : 'normal',
				iconCls : 'more',
				iconMask : true,
				align : 'right',
				hidden : true
			}, {
				xtype : 'button',
				itemId : 'customerDetailButton',
				ui : 'normal',
				iconCls : 'info',
				iconMask : true,
				align : 'right',
				hidden : false
			}]
		},
		items : [{
			xtype : 'customerContainer'
		}]
	}
});
