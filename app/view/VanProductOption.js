Ext.define('PaperVan.view.VanProductOption', {
	extend : 'Ext.Panel',
	xtype : 'vanProductOption',
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
				xtype : 'button',
				itemId : 'vanRefreshButton',
				ui : 'action',
				text : 'Update Van Stock'
			},{
				xtype : 'button',
				itemId : 'receiptInbStoButton',
				ui : 'action',
				text : 'Receipt Inbound STOs'
			}, {
				xtype : 'button',
				itemId : 'replenishVanStkButton',
				ui : 'action',
				text : 'Replenish Van Stock'
			}]
		}]
	}
});
