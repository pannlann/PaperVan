Ext.define('PaperVan.view.VanProducts', {
	extend : 'Ext.NavigationView',
	xtype : 'vanProductTab',
	config : {
		itemId : 'vanProductTab',
		title : 'Van Stock',
		iconCls : 'star',
		navigationBar : {
			items : [{
				xtype : 'exitButton',
				itemId : 'vanExitButton'
			}, {
				xtype : 'button',
				itemId : 'vanRefreshButton',
				iconCls : 'refresh',
				iconMask : true,
				ui : 'normal',
				align : 'right',
			}, {
				xtype : 'button',
				itemId : 'vanSortButton',
				ui : 'normal',
				text : 'Sort',
				align : 'right',
			}, {
				xtype : 'button',
				itemId : 'vanAddToCartButton',
				iconCls : 'add',
				iconMask : true,
				ui : 'normal',
				align : 'right',
				hidden : true
			}]
		},
		items : [{
			xtype : 'vanProductContainer'
		}]

	}
}); 