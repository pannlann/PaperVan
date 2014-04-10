Ext.define('PaperVan.view.Main', {
	extend : 'Ext.tab.Panel',
	requires : ['PaperVan.resource.ExitButton', 'PaperVan.resource.SortPicker', 'PaperVan.resource.PullRefreshPanel'],
	alias : 'widget.mainPanel',
	config : {
		tabBarPosition : 'bottom',
		fullscreen : true,
		scrollable : true,

		layout : {
			animation : 'slide'
		},

		items : [{
			xclass : 'PaperVan.view.Customers'
		}, {
			xclass : 'PaperVan.view.Products'
		}, {
			xclass : 'PaperVan.view.PreviousPurchase'
		}, {
			xclass : 'PaperVan.view.Cart'
		}]

	}
}); 