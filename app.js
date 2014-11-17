// to include css based on device type
includeCss();

Ext.Loader.setConfig({
	enable : true,
    disableCaching : false,
	paths : {
		'PaperVan' : 'app',
		'Ext' : 'touch'
	}
});

Ext.require([ 'PaperVan.resource.SignatureField', 'PaperVan.resource.SelectArea']);
Ext.application({

	name : 'PaperVan',
	controllers : ['Controller'],
	views : ['Main', 'Customers', 'Products', 'Cart', 'CustomerList', 'ProductDesc', 'ProductResultList', 'ProductSearch',
			 'CartOrder', 'CartList', 'CartOrderDetail', 'PreviousPurchase', 'PreviousPurchaseList', 'Credentials', 
			 'OrderConfirmation', 'OrderMessageList', 'OrderItemList', 'CustomerContainer', 'CustomerMain', 'CustomerDetail', 
			 'CustomerContactChange', 'CustomerContact', 'CustomerRecentActivity', 'ActivityCreation', 'ActivityDisplay', 'DisputeCreation',
			 'CustomerDispute', 'CustomerContainerOption', 'CustomerDetailOption', 'CustomerContactCreate', 'CustomerCreate', 'CustomerChange',
			 'VanProducts', 'VanProductResultList', 'VanProductContainer', 'VanScheduleUpdate', 'VanConfirmDelivery',
			 'ProductDescHist','ProductDescMain', 'ProductAtpList'],
	stores : ['CustomerStore', 'ProductResultStore', 'CartStore', 'PreviousPurchaseStore', 'OrderMessageStore',
			  'OrderItemStore', 'ContactStore', 'ActivityStore', 'DisputeStore', 'VanProductResultStore',
			  'SearchProductSalesHistoryStore','PreviousProductSalesHistoryStore','VanProductSalesHistoryStore',
			  , 'SearchProductAtpStore', 'PreviousProductAtpStore', 'VanProductAtpStore'],
	models : ['CustomerModel', 'ContactModel', 'ActivityModel', 'DisputeModel', 'ProductResultModel',
				'OrderMessageModel', 'ProductSalesHistoryModel', 'AtpModel'],
	launch : function() {
		console.log('launch');
		Ext.event.publisher.TouchGesture.prototype.isNotPreventable = /^(select|a|input|textarea)$/i;
		// initial all options
		customerContainerOption = Ext.create('PaperVan.view.CustomerContainerOption');
		customerDetailOption = Ext.create('PaperVan.view.CustomerDetailOption');
		Ext.Viewport.add(customerContainerOption);
		Ext.Viewport.add(customerDetailOption);
		// set error callback to errCallBack function

		Ext.fly('appLoadingIndicator').destroy();
		mainContainer = Ext.create('PaperVan.view.Main', {});
	}
});
