// file to handle global variables.
var noItemInCart = 1;
var mainContainer;
var credScreen;
var selectedCust;
var selectedCustAddr = {};
var signatureWidth;
var signatureHeight;
var selectedContact;
var lastSavedPlant = '3610';
var sharedStorage;
var calledBAPI;
var userStorageLoc;
var storageLocOptions;
var customerPlant;
var isVanOrder;
var currentGeoLocation;
var customerGrouper;
var vanBatchResultData = {
	items : []
};
var orderMessage = {
	items : []
};

var prodResultData = {
	items : []
};
var vanProdResultData = {
	items : []
};
var isInOrderConfirmationScreen = false;
var activityNumber;
var disputeNumber;
var orderNumber;
var orderHeader;
var orderItem;
var orderPartner;
var availableContact = [];
var isContactReadOnly = false;
var simulatedOrder = {
	items : []
};
var tempDispute = {};
var tempActivity = {};
var tempNewContact = {};
var tempNewCustomer = {};
var tempChangeCustomer = {};
var tempActivityText = "";
var fieldLabelWidth;
//********************* options ***********************
var customerContainerOption;
var customerDetailOption;

if (hwc.isWindows()) {
	orderMessage = {
		items : [{
			messageType : 'W',
			message : 'Error message'
		}, {
			messageType : 'W',
			message : 'Warning Message'
		}]
	};

	simulatedOrder = {
		items : [{
			item : '10',
			prod : 'prod1',
			prodDesc : 'descrip',
			orderQty : 1.5,
			uom : 'THS',
			netValue : 105.32,
			currency : 'AUD',
			plant : '3610'
		}, {
			item : '20',
			prod : 'prod2',
			prodDesc : 'descrip2',
			orderQty : 3,
			uom : 'PKS',
			netValue : 105.32,
			currency : 'AUD',
			plant : '3610'
		}]
	};

	// vanBatchResultData.items = [{
		// prodNo : '200003',
		// batch : 'batch1'
	// }, {
		// prodNo : '200003',
		// batch : 'batch2'
	// }, {
		// prodNo : '200002',
		// batch : 'batch3'
	// }];

}

// Selected product in format of
// items : {}
var userId;
var customerData = {
	items : []
};
var contactData = {
	items : []
};
var activityData = {
	items : []
};
var disputeData = {
	items : []
};
var days = '7';
// TODO: need to retrieve crt data from local storage and save it into
// productsInCart when app is initilised

var productsInCart = {
	items : []
};
var selectedCustomerAddress = '';
var selectedProduct;
var selectedCustRecord;
var prevProdData = {
	items : []
};
var testPrevData = {
	items : [{
		prodDesc : 'Reflex Tints A3 3RM (C)',
		prodNo : '200001',
		listPr : 500,
		atpQty : 20.99,
		uom : 'THS',
		cost : 300,
		stock : 35.05,
		atp2Qty : 18.25,
		atp5Qty : 22.55,
		custPr : 456.45,
		message : 'Alternative products',
		isObs : 'X',
		isCustPurch : '',
		count : '10'
	}, {
		prodDesc : 'Monza Hi Gls Rc Art 650x910 130g f',
		prodNo : '200002',
		listPr : 1000,
		atpQty : 20,
		uom : 'THS',
		cost : 300,
		stock : 35.05,
		custPr : 20,
		atp2Qty : 18.25,
		atp5Qty : 22.55,
		message : 'Alternative products',
		isObs : 'X',
		isCustPurch : '',
		count : '20'
	}, {
		prodDesc : 'A Premier Paper Co Pty Ltd',
		prodNo : '200003',
		listPr : 100,
		atpQty : 0,
		uom : 'EA',
		cost : 300,
		stock : 35.05,
		custPr : 4565,
		atp2Qty : 18.25,
		atp5Qty : 22.55,
		message : 'Alternative products',
		isObs : 'X',
		isCustPurch : '',
		count : '25'
	}]
}

var favoriteData = {
	items : [{
		prodDesc : 'Monza Hi Gls Rc Art 650x910 130g f',
		prodNo : '200006',
		listPr : 20,
		atpQty : 20,
		uom : 'THS',
		cost : 300,
		stock : 35.05,
		atp2Qty : 18.25,
		atp5Qty : 22.55,
		message : 'Alternative products',
		isObs : 'X',
		isCustPurch : ''
	}, {
		prodDesc : 'A Premier Paper Co Pty Ltd',
		prodNo : '200007',
		listPr : 200,
		atpQty : 0,
		uom : 'EA',
		cost : 300,
		stock : 35.05,
		atp2Qty : 18.25,
		atp5Qty : 22.55,
		message : 'Alternative products',
		isObs : 'X',
		isCustPurch : ''
	}, {
		prodDesc : 'Xpremier Paper Co Pty Ltd',
		prodNo : '200008',
		listPr : 100,
		atpQty : 0.1055,
		uom : 'THS',
		cost : 300,
		stock : 35.05,
		atp2Qty : 18.25,
		atp5Qty : 22.55,
		message : 'Alternative products',
		isObs : 'X',
		isCustPurch : ''
	}]
}

