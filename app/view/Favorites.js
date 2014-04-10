Ext.define('PaperVan.view.Favorites', {
			extend : 'Ext.NavigationView',
			xtype : 'favoriteTab',
			config : {
				itemId : 'favoriteTab',
				iconCls : 'star',
				title : 'Favorites',
				navigationBar : {
					items : [{
								xtype : 'exitButton',
								itemId : 'favoriteExitButton'
							}, {
								xtype : 'button',
								itemId : 'favoriteSortButton',
								ui : 'normal',
								text : 'Sort',
								align : 'right'
							}, {
								xtype : 'button',
								itemId : 'favoriteAddToCartButton',
								iconCls : 'add',
								iconMask : true,
								ui : 'normal',
								align : 'right',
								hidden : true
							}]
				},
				items : [{
							xtype : 'favoriteList'
						}]
			}
		});
