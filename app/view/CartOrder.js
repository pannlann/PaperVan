Ext.define('PaperVan.view.CartOrder', {
	extend : 'Ext.NavigationView',
	xtype : 'cartOrder',
	requires : ['PaperVan.view.OrderConfirmation'],
	config : {
		title : 'Cart',
		padding : '0 0 0 0',
		navigationBar : {
			items : [{
				xtype : 'button',
				itemId : 'deleteAllButton',
				ui : 'decline',
				text : 'All',
				iconCls : 'trash',
				iconMask : true,
				align : 'right'
			}, {
				xtype : 'button',
				itemId : 'doneButton',
				text : 'Update',
				align : 'right',
				hidden : true
			}]
		},
		items : [{
			xtype : 'cartList'
		}, {
			xtype : 'button',
			itemId : 'checkoutButton',
			ui : 'action',
			text : 'Order Confirmation',
			docked : 'bottom'
		}, {
			xtype : 'button',
			itemId : 'createOrderButton',
			ui : 'action',
			text : 'Place Order Now',
			docked : 'bottom',
			hidden : true
		}, {
			xtype : 'button',
			itemId : 'signatureConfirmButton',
			ui : 'action',
			text : 'Signature Confirmaion',
			docked : 'bottom',
			hidden : true
		}, {
			xtype : 'textfield',
			label : 'Gross Total (AUD)',
			itemId : 'cartGrossTotal',
			value : '0',
			readOnly : true,
			docked : 'bottom',
			labelWidth : '50%',
		}, {
			xtype : 'textfield',
			label : 'GST',
			itemId : 'cartGSTTotal',
			value : '0',
			readOnly : true,
			docked : 'bottom',
			labelWidth : '50%',
		}, {
			xtype : 'textfield',
			name : 'total',
			label : 'Net Total',
			itemId : 'cartTotal',
			value : '0',
			readOnly : true,
			docked : 'bottom',
			labelWidth : '50%'
		}]
	}
});
