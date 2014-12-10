// this file contains connection to backend system
var getActivitySubTypeOData = {
	entitySet : 'ActivitySubTypeCollection',
	method : 'GET',
	field : [],
	search : false,
	singleRead : false
};

var getOpenInboundDeliveryOData = {
	entitySet : 'InboundDeliveryCollection',
	method : 'GET',
	field : ['Plant', 'Sloc'],
	search : false,
	singleRead : false
};
var getStockAtpOData = {
	entitySet : 'StockAtpCollection',
	method : 'GET',
	field : ['Material', 'Plant'],
	search : false,
	singleRead : false
};
var getShiptoOData = {
	entitySet : 'ShiptoCollection',
	method : 'GET',
	field : ['Customer'],
	search : false,
	singleRead : false
};

var getCustomerPriceOData = {
	entitySet : 'PriceCollection',
	method : 'GET',
	field : ['Material', 'Customer', 'Plant'],
	search : false,
	singleRead : false
};

var getProductSalesHistoryOData = {
	entitySet : 'ProductSalesHistoryCollection',
	method : 'GET',
	field : ['Material', 'Customer'],
	search : false,
	singleRead : false,
	cancelPreRequest : true
};

var getProductSearchOData = {
	entitySet : 'ProductCollection',
	method : 'GET',
	field : ['inputTrex', 'inputAtpQty', 'inputSupZero', 'inputFindAlt', 'inputCustomer', 'inputPlant'],
	search : true,
	singleRead : false,
	cancelPreRequest : false
};

var getValidateAccountOData = {
	entitySet : 'UserValidationCollection',
	method : 'GET',
	field : [],
	search : false,
	singleRead : false,
	cancelPreRequest : false,
	timeout : 20000
};

var getCustomerOData = {
	entitySet : 'CustomerCollection',
	method : 'GET',
	field : ['inputVan', 'inputSalesOff', 'inputToday', 'inputAll', 'inputAllVan'],
	search : true,
	singleRead : false,
	cancelPreRequest : true
};

var getVanProductOData = {
	entitySet : 'ProductCollection',
	method : 'GET',
	field : ['inputVanProd', 'inputCustomer', 'inputCustPrice'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var getPurchasedProductOData = {
	entitySet : 'ProductCollection',
	method : 'GET',
	field : ['inputPrevPur', 'inputNumDays', 'inputCustomer'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var simulateOrderMessageOData = {
	entitySet : 'SalesOrderMessageCollection',
	method : 'GET',
	field : ['inputOrderHeader', 'inputOrderItem', 'inputOrderPartner', 'inputAppType'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var simulateOrderItemOData = {
	entitySet : 'SalesOrderItemCollection',
	method : 'GET',
	field : ['inputOrderHeader', 'inputOrderItem', 'inputOrderPartner', 'inputAppType'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var createOrderOData = {
	entitySet : 'SalesOrderItemCollection',
	method : 'POST',
	field : ['inputOrderHeader', 'inputOrderItem', 'inputOrderPartner', 'inputAppType', 'quoteText', 'orderText', 'deliveryText'],
	search : false,
	cancelPreRequest : false
};

var getContactOData = {
	entitySet : 'ContactCollection',
	method : 'GET',
	field : ['Customer'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var getDisputeOData = {
	entitySet : 'DisputeCollection',
	method : 'GET',
	field : ['CustomerNo'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var getSalesActivityOData = {
	entitySet : 'SalesActivityCollection',
	method : 'GET',
	field : ['CustomerNo'],
	search : false,
	top : true,
	singleRead : false,
	cancelPreRequest : false
};

var createSalesActivityOData = {
	entitySet : 'SalesActivityCollection',
	method : 'POST',
	field : ['CustomerNo', 'ContactNo', 'ToDate', 'ActText', 'ActType', 'ActReason', 'ActOutcome', 'Volume', 'Quantity', 'Amount', 'SalesDoc', 'OpportunityType'],
	search : false,
	cancelPreRequest : false
};

var createDisputeOData = {
	entitySet : 'DisputeCollection',
	method : 'POST',
	field : ['CustomerNo', 'ContactNo', 'Category', 'CaseTitle', 'ReferenceDoc', 'CaseText', 'ClaimAmount'],
	search : false,
	cancelPreRequest : false
};

var changeContactOData = {
	entitySet : 'ContactCollection',
	method : 'PUT',
	field : ['Customer', 'ContactNo', 'Title', 'FirstName', 'LastName', 'Email', 'Phone', 'Department', 'Function'],
	search : false,
	cancelPreRequest : false
};

var createContactOData = {
	entitySet : 'ContactCollection',
	method : 'POST',
	field : ['Customer', 'Title', 'FirstName', 'LastName', 'Email', 'Phone', 'Department', 'Function'],
	search : false,
	cancelPreRequest : false
};

var deleteContactOData = {
	entitySet : 'ContactCollection',
	method : 'DELETE',
	field : ['ContactNo'],
	search : false,
	cancelPreRequest : false
};

var deleteCustomerOData = {
	entitySet : 'CustomerDetailCollection',
	method : 'DELETE',
	field : ['CustomerNo'],
	search : false,
	cancelPreRequest : false
};

var createCustomerOData = {
	entitySet : 'CustomerDetailCollection',
	method : 'POST',
	field : ['Name1', 'Name2', 'Street', 'PostCode', 'City', 'Region', 'Email', 'Tel', 'Fax'],
	search : false,
	cancelPreRequest : false
};

var grInboundDeliveryOData = {
	entitySet : 'InboundDeliveryCollection',
	method : 'PUT',
	field : ['DeliveryNo'],
	search : false,
	cancelPreRequest : false
};

var changeCustomerOData = {
	entitySet : 'CustomerDetailCollection',
	method : 'PUT',
	field : ['CustomerNo', 'Name1', 'Name2', 'Street', 'PostCode', 'City', 'Region', 'Email', 'Tel', 'Fax'],
	search : false,
	cancelPreRequest : false
};

var deleteVanScheduleOData = {
	entitySet : 'CustomerCollection',
	method : 'PUT',
	field : ['CustomerNo', 'inputDeleteFlag'],
	search : false,
	cancelPreRequest : false
};

var updateVanScheduleOData = {
	entitySet : 'CustomerCollection',
	method : 'PUT',
	field : ['CustomerNo', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'VisitPeriod'],
	search : false,
	cancelPreRequest : false
};

var getSingleCustomerOData = {
	entitySet : 'CustomerDetailCollection',
	method : 'GET',
	field : [],
	search : false,
	singleRead : true,
	cancelPreRequest : false
};

var createDeliveryPGIOData = {
	entitySet : 'DeliveryCollection',
	method : 'POST',
	field : ['SalesOrderNo', 'Signature', 'Geolocation', 'Recipient', 'Timestamp'],
	search : false,
	cancelPreRequest : false
};

var getDeliveryPGIOData = {
	entitySet : 'DeliveryCollection',
	method : 'GET',
	field : [],
	search : false,
	cancelPreRequest : false
};

var createAttachmentOData = {
	entitySet : 'AttachmentCollection',
	method : 'POST',
	field : ['OrderNo', 'Signature', 'Geolocation', 'Recipient', 'Timestamp', 'DocumentType'],
	search : false,
	cancelPreRequest : false
};

var getAttachmentOData = {
	entitySet : 'AttachmentCollection',
	method : 'GET',
	field : [],
	search : false,
	cancelPreRequest : false
};

function callAddAttachmentOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createAttachmentOData, filterString, successAddAttachmentCallback, errCallback, attachmentPayload, null);
}

function callChangeContactOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(changeContactOData, filterString, successChangeContact, errCallback, contactPayload, selectedContact);
}

function callChangeCustomerOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(changeCustomerOData, filterString, successChangeCustomer, errCallback, customerDetailPayload, selectedCust);
}

function callDeleteVanScheduleOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(deleteVanScheduleOData, filterString, successDeleteVanSchedule, errCallback, customerVanSchedulePayload, selectedCust);
}

function callDeleteCustomerOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(deleteCustomerOData, filterString, successDeleteCustomer, errCallback, null, selectedCust);
}

function callDeleteContactOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(deleteContactOData, filterString, successDeleteContact, errCallback, null, selectedContact);
}

function callCreateSalesActivityOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createSalesActivityOData, filterString, successCreateSalesActivity, errCallback, activityPayload, selectedCust);
}

function callCreateOrderOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createOrderOData, filterString, successCreateOrderCallback, errCallback, orderPayload, null);
}

function callCreateDisputeOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createDisputeOData, filterString, successCreateDispute, errCallback, disputePayload, selectedCust);
}

function callCreateDeliveryOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createDeliveryPGIOData, filterString, successCreateDeliveryCallback, errCallback, deliveryPayload, null);
}

function callChangeVanScheduleOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(updateVanScheduleOData, filterString, successChangeVanSchedule, errCallback, customerVanSchedulePayload, selectedCust);
}

function callCreateContactOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createContactOData, filterString, successCreateContact, errCallback, contactPayload, null);
}

function callCreateCustomerOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createCustomerOData, filterString, successCreateCustomer, errCallback, customerDetailPayload, null);
}

function callOData(oDataService, filterString, successCallback, errorCallback, payload, key) {
	// construct URL
	var url;
	if (oDataService.singleRead == true || oDataService.method == 'PUT' || oDataService.method == 'DELETE') {
		// contruct URL for single read and POST request
		url = oDataBackEnd + oDataService.entitySet + "('" + key + "')" + filterString;
	} else {
		url = oDataBackEnd + oDataService.entitySet + filterString;
	}
	var request;
	//construct header
	var oHeaders = {};
	oHeaders['Authorization'] = 'Basic ' + btoa(userId + ':' + password);
	oHeaders['Accept'] = 'application/json';
	if (oDataService.method == 'GET') {
		oHeaders['X-CSRF-Token'] = 'fetch';
		request = {
			url : url,
			// username : userId,
			// password : password,
			autoAbort : oDataService.cancelPreRequest,
			useDefaultXhrHeader : false,
			headers : oHeaders,
			method : oDataService.method,
			// withCredentials: true,
			success : successCallback,
			failure : errCallback,
			timeout : oDataService.timeout
		};
	} else {
		oHeaders['Content-Type'] = 'application/json';
		oHeaders['X-CSRF-Token'] = xcsrftoken;
		request = {
			url : url,
			// username : userId,
			// password : password,
			autoAbort : oDataService.cancelPreRequest,
			disableCaching : false,
			useDefaultXhrHeader : false,
			headers : oHeaders,
			method : oDataService.method,
			// withCredentials: true,
			xmlData : JSON.stringify(payload),
			success : successCallback,
			failure : errCallback,
		};
	}

	Ext.Ajax.request(request);
}

function successChangeCustomer(response) {
	Ext.toast('The customer ' + selectedCust + ' has been changed successfully.', 1500);

	var updateCustomerRecord = customerData.items.find({
		custNo : selectedCust
	});
	updateCustomerRecord.custName = tempChangeCustomer.custName;
	updateCustomerRecord.custAddr = tempChangeCustomer.custAddr;
	updateCustomerRecord.telNo = tempChangeCustomer.telNo;
	customerData.items.remove({
		custNo : selectedCust
	});
	customerData.items.splice(0, 0, updateCustomerRecord);
	tempChangeCustomer = {};
	updateCustomerStore();
	mainContainer.unmask();
	// set new selectedCustRecord
	selectedCustRecord = updateCustomerRecord;

	var customerDetailView = Ext.ComponentQuery.query('customerDetail')[0];
	customerDetailView.setData(selectedCustRecord);
	customerTabPop();

}

function successChangeContact(response) {

	mainContainer.unmask();

	Ext.toast('Contact detail has succesfully changed.', 1500);
	updateRecentContactChange();
	customerTabPop();
	updateContactStore();
}

function successAddAttachmentCallback(response) {
	var items = JSON.parse(response.responseText).d;

	status = items.ReturnStatus;

	if (status == 'S') {
		createDelivery(orderNumber);
	} else {
		mainContainer.unmask();
		reportErrorMessage(ADD_ORDER_ATTACHMENT_EXCEPTION, function() {
		});
	}
}

function successChangeVanSchedule(response) {
	Ext.toast('The schedule has been changed successfully.', 1500);
	// update customer record from changed data
	var updateCustomerRecord = customerData.items.find({
		custNo : selectedCust
	});
	updateCustomerRecord.visitPeriod = tempChangeCustomer.visitPeriod;
	updateCustomerRecord.monday = tempChangeCustomer.monday;
	updateCustomerRecord.tuesday = tempChangeCustomer.tuesday;
	updateCustomerRecord.wednesday = tempChangeCustomer.wednesday;
	updateCustomerRecord.thursday = tempChangeCustomer.thursday;
	updateCustomerRecord.friday = tempChangeCustomer.friday;
	updateCustomerRecord.saturday = tempChangeCustomer.saturday;
	updateCustomerRecord.sunday = tempChangeCustomer.sunday;
	customerData.items.remove({
		custNo : selectedCust
	});
	customerData.items.splice(0, 0, updateCustomerRecord);
	tempChangeCustomer = {};
	updateCustomerStore();
	mainContainer.unmask();
	customerTabPop();

}

function successCreateContact(response) {

	var items = JSON.parse(response.responseText).d;

	contactNumber = items.ContactNo.replace(/^0+/, '');

	mainContainer.unmask();

	Ext.Msg.alert('Contact', 'The contact ' + contactNumber + ' has been created successfully.', function() {
		// update contactData
		tempNewContact.contNo = contactNumber;
		contactData.items.splice(0, 0, tempNewContact);
		updateContactStore();
		// update available contacts dropdown
		var contactItem = {};
		contactItem.text = tempNewContact.contName;
		contactItem.value = tempNewContact.contNo;
		availableContact.push(contactItem);

		tempNewContact = {};
		customerTabPop();
		updateContactStore();
	});
}

function successCreateCustomer(response) {

	var items = JSON.parse(response.responseText).d;

	customerNumber = items.CustomerNo.replace(/^0+/, '');

	mainContainer.unmask();

	Ext.Msg.alert('Customer', 'The customer ' + customerNumber + ' has been created successfully.', function() {
		tempNewCustomer.custNo = customerNumber;
		customerData.items.splice(0, 0, tempNewCustomer);
		updateCustomerStore();
		tempNewCustomer = {};
		customerTabPop();
		updateCustomerStore();
		selectedCust = customerNumber;
		moveToSelectedCustomer();
	});
}

function successCreateDeliveryCallback(response) {
	var items = JSON.parse(response.responseText).d;

	var status = items.ReturnStatus;
	var deliveryNo = items.DeliveryNo.replace(/^0+/, '');

	if (status == 'S') {
		Ext.Msg.alert('Order', 'The order ' + orderNumber + ' and delivery ' + deliveryNo + ' has been created successfully', function() {
			refreshData(true);
			mainContainer.unmask();
		});
	} else if (status == 'E' && deliveryNo != '') {
		Ext.Msg.alert('Order', 'The order ' + orderNumber + ' is created succesfully but delivery ' + deliveryNo + ' may not sucessfully post good issue. Please PGI manually.', function() {
			refreshData(true);
			mainContainer.unmask();
		});
	} else {
		Ext.Msg.alert('Order', 'The order ' + orderNumber + ' is created succesfully but delivery is not. Please create delivery and PGI manually.', function() {
			refreshData(true);
			mainContainer.unmask();
		});
	}
}

function successGoodReciptOpenInboundDelivery(response) {
	// remove inb with successful GR
	openInboundDeliveryData.pop();
	if (openInboundDeliveryData.length > 0) {
		postGoodReceiptOpenInboundDelivery();
	}
}

function successOpenInboundDeliveryList(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');

	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// there are open inbound delivery
		openInboundDeliveryData = [];
		for (var i = 0; i < noOfItems; i++) {
			var theItems = items[i];

			openInboundDeliveryData.push(theItems.DeliveryNo);
		}
	}
	if (openInboundDeliveryData.length > 0) {
		postGoodReceiptOpenInboundDelivery();
	}
}

function successCustomerCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		customerData = {
			items : []
		};
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.custName = theItems.CustomerName;
			myitem.custNo = theItems.CustomerNo;
			myitem.creditLimit = theItems.CreditLimit;
			myitem.creditAvailable = theItems.CreditAvailable;
			myitem.creditUsed = theItems.CreditUsed;
			myitem.creditBlock = theItems.CreditBlock;
			myitem.plant = theItems.Plant;
			myitem.telNo = theItems.TelNo;
			myitem.p1Pts = theItems.P1Pts;
			myitem.p1Status = theItems.P1Status;
			myitem.accountGroup = theItems.AccGroup;
			myitem.monday = theItems.Monday;
			myitem.tuesday = theItems.Tuesday;
			myitem.wednesday = theItems.Wednesday;
			myitem.thursday = theItems.Thursday;
			myitem.friday = theItems.Friday;
			myitem.saturday = theItems.Saturday;
			myitem.sunday = theItems.Sunday;
			myitem.visitPeriod = theItems.VisitPeriod;
			myitem.sequence = theItems.Sequence;
			myitem.address = theItems.Address;

			customerData.items.push(myitem);
		}

		updateCustomerList(items[0].inputSalesOff, items[0].inputToday, items[0].inputAll, items[0].inputAllVan);
		updateCustomerStore();
	} else {
		// no customer returned
		reportErrorMessage(NO_CUSTOMERS_FOUND_EXCEPTION, function() {
		});
	}
}

function successCustomerAddress(response) {
	var items = JSON.parse(response.responseText).d;

	// reset product Result
	selectedCustAddr = {};

	selectedCustAddr.name1 = items.Name1;
	selectedCustAddr.name2 = items.Name2;
	selectedCustAddr.street = items.Street;
	selectedCustAddr.postcode = items.PostCode;
	selectedCustAddr.city = items.City;
	selectedCustAddr.region = items.Region;
	selectedCustAddr.email = items.Email;
	selectedCustAddr.tel = items.Tel;
	selectedCustAddr.fax = items.Fax;

	selectedCustRecord.custAddr = selectedCustAddr.street + ', ' + selectedCustAddr.city + ' ' + selectedCustAddr.region + ' ' + selectedCustAddr.postcode;

	// set customer general detail
	var customerDetailView = Ext.ComponentQuery.query('customerDetail')[0];
	customerDetailView.setData(selectedCustRecord);
}

function successCreateDispute(response) {

	var items = JSON.parse(response.responseText).d;

	disputeNumber = items.CaseId.replace(/^0+/, '');

	mainContainer.unmask();

	Ext.Msg.alert('Dispute', 'The case ' + disputeNumber + ' has been created successfully.', function() {
		tempDispute.caseNo = disputeNumber;
		disputeData.items.splice(0, 0, tempDispute);
		tempDispute = {};
		clearDisputeView();
		customerTabPop();
		updateDisputeStore();
	});
}

function successCreateOrderCallback(response) {
	var items = JSON.parse(response.responseText).d;

	orderNumber = items.SalesOrderNo.replace(/^0+/, '');

	mainContainer.unmask();

	var orderType = Ext.ComponentQuery.query('#orderType')[0].getValue().trim();
	var header;
	var message;
	if (orderType == 'ZSTK' || orderType == 'ZMCF') {
		header = 'Order';
		message = 'The order ';
	} else {
		header = 'Quote';
		message = 'The quote ';
	}

	if (orderNumber != null && orderNumber != '') {
		if (isVanOrder) {
			addOrderAttachment(orderNumber);
		} else {
			Ext.Msg.alert('Order', 'The order ' + orderNumber + ' has been created successfully', function() {
				refreshData(true);
			});
		}
	} else {
		Ext.Msg.alert('Error', 'An error has occurred. ' + message + ' may not be created', function() {
			refreshData(false);
		});
	}
}

function successCreateSalesActivity(response) {

	var items = JSON.parse(response.responseText).d;

	activityNumber = items.ActNo.replace(/^0+/, '');

	mainContainer.unmask();

	Ext.Msg.alert('Activity', 'The activity ' + activityNumber + ' has been created successfully.', function() {
		tempActivity.actNo = activityNumber;
		activityData.items.splice(0, 0, tempActivity);
		updateActivityStore();
		tempActivity = {};
		clearActivityText();
		mainContainer.unmask();
		customerTabPop();
		updateActivityStore();
	});
}

function successDeleteVanSchedule(response) {
	Ext.toast('Successfully delete the schedule', 1500);
	mainContainer.unmask();
	updateRecentVanScheduleDelete();
	customerTabPop();
	updateCustomerStore();
}

function successShiptoListCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	shiptoData = [];
	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.value = theItems.ShiptoNo.replace(/^0+/, '');
			myitem.text = theItems.Address;

			shiptoData.push(myitem);
		}
	}
	Ext.ComponentQuery.query('#shiptoParty')[0].setOptions(shiptoData);
}

function successCustomerContactListCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	contactData = {
		items : []
	};
	availableContact = [];

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var contactItem = {};
			var theItems = items[i];

			myitem.contNo = theItems.ContactNo.replace(/^0+/, '');
			myitem.functions = theItems.Function;
			myitem.department = theItems.Department;
			myitem.phone = theItems.Phone;
			myitem.email = theItems.Email;
			myitem.firstName = theItems.FirstName;
			myitem.lastName = theItems.LastName;
			myitem.title = theItems.Title;
			myitem.contName = myitem.title + ' ' + myitem.firstName + ' ' + myitem.lastName;
			myitem.type = 'Contact';

			// update contact data for activity creation screen
			contactItem.text = myitem.contName;
			contactItem.value = myitem.contNo;
			availableContact.push(contactItem);

			contactData.items.push(myitem);
		}
	}

	updateContactStore();
	if (availableContact.length > 0) {
		isContactReadOnly = false;
	} else {
		isContactReadOnly = true;
		availableContact = [{
			text : '',
			value : '0'
		}];
	}
}

function successDeleteContact(response) {
	Ext.toast('The contact has succesfully deleted', 1500);
	mainContainer.unmask();
	updateRecentContactDelete();
	updateContactStore();
}

function successPreviousProductCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		prevProdData = {
			items : []
		};
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			myitem.prodDesc = theItems.MaterialDescription;
			myitem.prodNo = theItems.Material.replace(/^0+/, '');
			myitem.listPr = theItems.ListPrice;
			myitem.custPr = theItems.CustPrice;
			myitem.uom = theItems.AtpUom;
			myitem.cost = theItems.Cost;
			myitem.stock = theItems.StockQty;
			// for traffic light purpose
			myitem.atpQty = theItems.AtpQty;
			myitem.atp2Qty = theItems.Atp2Qty;
			myitem.atp5Qty = theItems.Atp5Qty;
			myitem.message = theItems.Messages;
			myitem.isObs = theItems.DisConFlag;
			myitem.isCustPurch = theItems.PrePuchFlag;
			myitem.kgPerThs = theItems.KgThs;
			myitem.thsPerPal = theItems.ThsPal;
			myitem.eaPerPk = theItems.EaPack;
			myitem.count = theItems.Count;
			prevProdData.items.push(myitem);
		}
		console.log('push product list screen');
		Ext.ComponentQuery.query('previousPurchaseTab')[0].push({
			xtype : 'previousPurchaseList',
			title : 'Last ' + days + ' Days'
		});

		updatePreviousPurchaseStore();
		mainContainer.unmask();
	} else {
		// no customer returned
		mainContainer.unmask();
		reportErrorMessage(NO_RESULTS_FOUND_EXCEPTION, function() {
		});
	}
}

function successSimulateOrderItemCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;

	if (noOfItems > 0) {
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.item = theItems.ItmNumber.replace(/^0+/, '');
			myitem.prod = theItems.Material.replace(/^0+/, '');
			myitem.prodDesc = theItems.ShortText;
			myitem.orderQty = theItems.ReqQty;
			myitem.uom = theItems.SalesUnit;
			myitem.netValue = theItems.NetValue1;
			myitem.currency = theItems.CurrIso;
			myitem.plant = theItems.Plant;

			simulatedOrder.items.push(myitem);
		}
		mainContainer.unmask();
		showOrderSimulation();
	}
}

function successVanProductCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		vanProdResultData = {
			items : []
		};
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			myitem.prodDesc = theItems.MaterialDescription;
			myitem.prodNo = theItems.Material.replace(/^0+/, '');
			;
			myitem.listPr = theItems.ListPrice;
			myitem.custPr = theItems.CustPrice;
			myitem.uom = theItems.AtpUom;
			myitem.cost = theItems.Cost;
			myitem.stock = theItems.StockQty;
			// for traffic light purpose
			myitem.atpQty = myitem.stock;
			myitem.atp2Qty = theItems.Atp2Qty;
			myitem.atp5Qty = theItems.Atp5Qty;
			myitem.message = theItems.Messages;
			myitem.isObs = theItems.DisConFlag;
			myitem.isCustPurch = theItems.PrePuchFlag;
			myitem.kgPerThs = theItems.KgThs;
			myitem.thsPerPal = theItems.ThsPal;
			myitem.eaPerPk = theItems.EaPack;
			myitem.count = theItems.Count;
			vanProdResultData.items.push(myitem);
		}
		updateVanProductResultStore();
	} else {
		// no customer returned
		reportErrorMessage(NO_RESULTS_FOUND_EXCEPTION, function() {
		});
	}
}

function successCustomerPriceCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {

		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			selectedProduct.custPr = theItems.CustPrice;

			updateCustPrice(selectedProduct);

			switch (productHistoryViewID) {
				case 'vanProductDescMain':
					Ext.ComponentQuery.query('#vanProductDesc')[0].setData(selectedProduct);
					break;
				case 'searchProductDescMain':
					Ext.ComponentQuery.query('#searchProductDesc')[0].setData(selectedProduct);
					break;
				case 'previousProductDescMain':
					Ext.ComponentQuery.query('#previousProductDesc')[0].setData(selectedProduct);
					break;
			};
			// update cart total becase of new customer price
			updateCartTotal();
		}
	}
}

function successProductAtpListCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result

		switch (productHistoryViewID) {
			case 'vanProductDescMain':
				vanProdAtpData = {
					items : []
				};
				break;
			case 'searchProductDescMain':
				searchProdAtpData = {
					items : []
				};
				break;
			case 'previousProductDescMain':
				previousProdAtpData = {
					items : []
				};
				break;
		}

		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			myitem.atpQty = theItems.AtpQty;
			myitem.date = theItems.Date;

			switch (productHistoryViewID) {
				case 'vanProductDescMain':
					vanProdAtpData.items.push(myitem);
					break;
				case 'searchProductDescMain':
					searchProdAtpData.items.push(myitem);
					break;
				case 'previousProductDescMain':
					previousProdAtpData.items.push(myitem);
					break;
			};
		}
		updateProductAtpStore();
	}
}

function successProductSalesHistoryCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		if (!isSkipProductSalesHistory) {
			// reset product Result

			switch (productHistoryViewID) {
				case 'vanProductDescMain':
					vanProdSalesHistoryData = {
						items : []
					};
					break;
				case 'searchProductDescMain':
					searchProdSalesHistoryData = {
						items : []
					};
					break;
				case 'previousProductDescMain':
					preProdSalesHistoryData = {
						items : []
					};
					break;
			};
		}

		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			myitem.salesOrder = theItems.SalesOrderNo.replace(/^0+/, '');
			;
			myitem.item = theItems.ItmNumber.replace(/^0+/, '');
			myitem.date = theItems.Date;
			myitem.orderType = theItems.OrderType;
			myitem.isManualPrice = theItems.ManualPriceFlag;
			myitem.netPrice = theItems.NetPrice;
			myitem.qty = theItems.Qty;
			// for traffic light purpose
			myitem.marginPercent = theItems.MarginPercent;
			myitem.createBy = theItems.CreatedBy;
			myitem.poNumber = theItems.PoNumber;
			myitem.material = theItems.Material.replace(/^0+/, '');

			switch (productHistoryViewID) {
				case 'vanProductDescMain':
					vanProdSalesHistoryData.items.push(myitem);
					break;
				case 'searchProductDescMain':
					searchProdSalesHistoryData.items.push(myitem);
					break;
				case 'previousProductDescMain':
					preProdSalesHistoryData.items.push(myitem);
					break;
			};
		}
		updateProductSalesHistoryStore();
	} else {
		// only show error message when select load more option
		if (isSkipProductSalesHistory) {
			reportErrorMessage(NO_MORE_PRODUCT_HISTORY_EXCEPTION, function() {
			});
		}
	}
}

function successProductSearchCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		prodResultData = {
			items : []
		};
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			myitem.prodDesc = theItems.MaterialDescription;
			myitem.prodNo = theItems.Material.replace(/^0+/, '');
			myitem.listPr = theItems.ListPrice;
			myitem.custPr = theItems.CustPrice;
			myitem.uom = theItems.AtpUom;
			myitem.cost = theItems.Cost;
			myitem.stock = theItems.StockQty;
			// for traffic light purpose
			myitem.atpQty = theItems.AtpQty;
			myitem.atp2Qty = theItems.Atp2Qty;
			myitem.atp5Qty = theItems.Atp5Qty;
			myitem.message = theItems.Messages;
			myitem.isObs = theItems.DisConFlag;
			myitem.isCustPurch = theItems.PrePuchFlag;
			myitem.kgPerThs = theItems.KgThs;
			myitem.thsPerPal = theItems.ThsPal;
			myitem.eaPerPk = theItems.EaPack;
			myitem.count = theItems.Count;
			prodResultData.items.push(myitem);
		}
		// show product lists
		Ext.ComponentQuery.query('productTab')[0].push({
			xtype : 'productResultList'
		});
		mainContainer.unmask();
		updateProductResultStore();
	} else {
		// no customer returned
		mainContainer.unmask();
		reportErrorMessage(NO_RESULTS_FOUND_EXCEPTION, function() {
		});
	}

}

function successDisputeListCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	disputeData = {
		items : []
	};
	if (noOfItems > 0) {
		//reset dispute data
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.caseNo = theItems.CaseId.replace(/^0+/, '');
			myitem.title = theItems.CaseTitle;
			myitem.status = theItems.CaseStatus;
			myitem.referenceDoc = theItems.ReferenceDoc;
			myitem.createdBy = theItems.Createdby;
			myitem.processor = theItems.Processor;
			myitem.responsible = theItems.ResponPer;
			myitem.type = 'Dispute Cases';
			// update contact data for activity creation screen
			disputeData.items.push(myitem);
		}
	}
	updateDisputeStore();
}

function successDeleteCustomer(response) {
	Ext.toast('The customer has succesfully deleted.', 1500);
	updateRecentCustomerDelete();
	customerTabPop();
	updateCustomerStore();
}

function successCustomerRecentActivityCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	activityData = {
		items : []
	};
	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.actNo = theItems.ActNo.replace(/^0+/, '');
			myitem.contName = theItems.ContactName;
			myitem.contNo = theItems.ContactNo;
			myitem.fromDate = theItems.FromDate;
			myitem.toDate = theItems.ToDate;
			myitem.text = theItems.ActText;
			myitem.createdBy = theItems.Createdby;
			myitem.actType = theItems.ActTypeText;
			myitem.type = "Recent Activity";
			activityData.items.push(myitem);
		}

	}
	updateActivityStore();
};

function successUserValidate(response) {
	var items = JSON.parse(response.responseText).d;
	//get storage location
	userStorageLoc = items.results[0].StorLoc;
	userPlant = items.results[0].Plant;
	// validate successfully
	savePasswordCredential();
	if (!credScreen.getHidden()) {
		credScreen.hide();
	}
	mainContainer.unmask();
	Ext.toast(CUSTOMER_LOADING, 3000);
	getCustomerList('', 'X', '', '');
	updateCustomerListTitle();
	// get open inbound
	getOpenInboundDelivery(userPlant, userStorageLoc);
	getActivitySubTypes();
}

function successActivitySubTypesCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		activitySubTypeList = [];
		for (var i = 0; i < noOfItems; i++) {
			if (i == 0) {
				activitySubTypeList.push({
					text : '',
					value : ''
				});
			}
			var myitem = {};
			var theItems = items[i];
			myitem.value = theItems.Key;
			myitem.text = theItems.Text;
			activitySubTypeList.push(myitem);
		}
	}
}

function successSimulateOrderMessageCallback(response) {
	var isSimulationError = false;

	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.messageType = theItems.Type;
			myitem.message = theItems.Message;

			// check is order simulation error
			if (myitem.messageType == 'E') {
				isSimulationError = true;
			}
			orderMessage.items.push(myitem);
		}
	}

	if (!isSimulationError) {

		// call order items
		filters = [{
			field : 'inputOrderHeader',
			value : orderHeader,
		}, {
			field : 'inputOrderItem',
			value : orderItem,
		}, {
			field : 'inputOrderPartner',
			value : orderPartner,
		}, {
			field : 'inputAppType',
			value : mobAppType,
		}];
		var filterString = constructFilter(filters, searchString);
		callOData(simulateOrderItemOData, filterString, successSimulateOrderItemCallback, errCallback, null);

	} else {
		simulatedOrder = {
			items : []
		};
		mainContainer.unmask();
		showOrderSimulation();
	}
}

