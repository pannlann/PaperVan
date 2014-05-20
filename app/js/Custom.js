// The function is necessary for MBO JavaScript API to process the workflow
// message

hwc.processDataMessage = function(incomingWorkflowMessageValue, noUI, loading, fromActivationFlow, dataType) {
	var incomingWorkflowMessage;

	if (!( typeof incomingWorkflowMessageValue === "string")) {
		incomingWorkflowMessage = incomingWorkflowMessageValue.toString() + "";
	} else {
		incomingWorkflowMessage = incomingWorkflowMessageValue;
	}

	if (incomingWorkflowMessage) {
		if ((incomingWorkflowMessage.indexOf("<XmlWidgetMessage>") === 0) || (incomingWorkflowMessage.indexOf("<XmlWorkflowMessage>") === 0) || (incomingWorkflowMessage.indexOf("<M>") === 0)) {
			var newWorkflowMessage = new WorkflowMessage(incomingWorkflowMessage);
			// call afterDataReceived() to retrieve MBO data
			afterDataReceived(newWorkflowMessage);
		} else {//it is an error message to be displayed
			reportErrorFromNative(incomingWorkflowMessage);
		}
	}
};

var errCallback = function(errorString) {
	if (errorString.indexOf(DEVICE_NOT_CONNECTED) >= 0) {
		// no internet connection
		mainContainer.unmask();
		reportErrorMessage(CONNECTION_LOST_EXCEPTION, function() {
		});
	} else if (errorString.indexOf(DEVICE_TIME_OUT) >= 0) {
		mainContainer.unmask();
		reportErrorMessage(TIMEOUT_EXCEPTION, function() {
			switch (calledBAPI) {
				case ORDER_CREATE_BAPI :
					break;
				case ACTIVITY_CREATION_BAPI :
					break;
				case DISPUTE_CREATION_BAPI :
					break;
				case CHANGE_CONTACT_BAPI :
					break;
				case CREATE_CONTACT_BAPI :
					break;
				case CREATE_CUSTOMER_BAPI :
					break;
				case CHANGE_CUSTOMER_BAPI :
					break;
				case DELETE_CUSTOMER_BAPI :
					break;
				case DELETE_CONTACT_BAPI :
					break;
				case UPDATE_VAN_SCHEDULE_BAPI:
					break;
				default :
					break;
			}
		});
	} else {
		mainContainer.unmask();
		reportErrorMessage(UNKNOWN_EXCEPTION, function() {
		});
	}
};

// Use this method to receive MBO data and then call loadMyData() function to
// set data to Sencha data store.
function afterDataReceived(incomingWorkflowMessage) {
	var mvc = incomingWorkflowMessage.getValues();
	if (mvc) {
		switch (calledBAPI) {
			case PRODUCT_SEARCH_BAPI :
				// look up productSearch
				var data = mvc.getData(PRODUCT_SEARCH_BAPI);
				saveProductSearchData(data, mvc);
				break;
			case ACCOUNT_VALIDATION_BAPI :
				// validate credentials
				var data = mvc.getData(ACCOUNT_VALIDATION_BAPI);
				validateAccount(data, mvc);
				break;
			case CUSTOMER_LIST_BAPI :
				var data = mvc.getData(CUSTOMER_LIST_BAPI);
				saveCustomerListData(data, mvc);
				break;
			case PREVIOUS_PUR_BAPI :
				// look up prev purchase
				var data = mvc.getData(PREVIOUS_PUR_BAPI);
				savePreviousPurchaseData(data, mvc);
				break;

			case ORDER_SIMULATE_MESSAGE_BAPI :
				var data = mvc.getData(ORDER_SIMULATE_MESSAGE_BAPI);
				saveOrderMessage(data, mvc);
				break;

			case ORDER_SIMULATE_BAPI :
				var data = mvc.getData(ORDER_SIMULATE_BAPI);
				saveOrder(data, mvc);
				break;

			case ORDER_CREATE_BAPI :
				var data = mvc.getData(ORDER_CREATE_BAPI);
				saveOrderNumber(data, mvc);
				break;

			case CUSTOMER_CONTACT_LIST_BAPI :
				var data = mvc.getData(CUSTOMER_CONTACT_LIST_BAPI);
				saveCustomerContactList(data, mvc);
				break;

			case CUSTOMER_RECENT_ACTIVITY_BAPI :
				var data = mvc.getData(CUSTOMER_RECENT_ACTIVITY_BAPI);
				saveRecentActivity(data, mvc);
				break;

			case CUSTOMER_ADDRESS_BAPI :
				var data = mvc.getData(CUSTOMER_ADDRESS_BAPI);
				saveCustomerAddress(data, mvc);
				break;

			case ACTIVITY_CREATION_BAPI :
				var data = mvc.getData(ACTIVITY_CREATION_BAPI);
				saveActivityNumber(data, mvc);
				break;

			case CUSTOMER_DISPUTE_LIST_BAPI :
				var data = mvc.getData(CUSTOMER_DISPUTE_LIST_BAPI);
				saveDisputeList(data, mvc);
				break;

			case DISPUTE_CREATION_BAPI :
				var data = mvc.getData(DISPUTE_CREATION_BAPI);
				saveDisputeNumber(data, mvc);
				break;

			case CHANGE_CONTACT_BAPI :
				var data = mvc.getData(CHANGE_CONTACT_BAPI);
				checkChangeContactStatus(data, mvc);
				break;

			case CREATE_CONTACT_BAPI :
				var data = mvc.getData(CREATE_CONTACT_BAPI);
				saveContactNumber(data, mvc);
				break;

			case CREATE_CUSTOMER_BAPI :
				var data = mvc.getData(CREATE_CUSTOMER_BAPI);
				saveCustomerNumber(data, mvc);
				break;

			case CHANGE_CUSTOMER_BAPI :
				var data = mvc.getData(CHANGE_CUSTOMER_BAPI);
				saveChangeCustomerNumber(data, mvc);
				break;

			case DELETE_CUSTOMER_BAPI :
				var data = mvc.getData(DELETE_CUSTOMER_BAPI);
				checkDeleteCustomerStatus(data, mvc);
				break;

			case DELETE_CONTACT_BAPI :
				var data = mvc.getData(DELETE_CONTACT_BAPI);
				checkDeleteContactStatus(data, mvc);
				break;

			case VAN_PRODUCT_LIST_BAPI :
				var data = mvc.getData(VAN_PRODUCT_LIST_BAPI);
				saveVanProductData(data, mvc);
				break;

			case VAN_BATCH_LIST_BAPI :
				var data = mvc.getData(VAN_BATCH_LIST_BAPI);
				saveVanBatchData(data, mvc);
				break;

			case DELETE_VAN_SCHEDULE_BAPI :
				var data = mvc.getData(DELETE_VAN_SCHEDULE_BAPI);
				checkDeleteVanScheduleStatus(data, mvc);
				break;

			case UPDATE_VAN_SCHEDULE_BAPI :
				var data = mvc.getData(UPDATE_VAN_SCHEDULE_BAPI);
				saveVanScheduleUpdate(data, mvc);
				break;

			case ADD_ATTACHMENT_BAPI :
				var data = mvc.getData(ADD_ATTACHMENT_BAPI);
				checkAddAttachment(data, mvc);
				break;

			case CREATE_DELIVERY_BAPI :
				var data = mvc.getData(CREATE_DELIVERY_BAPI);
				checkCreateDelivery(data, mvc);
				break;

			default :
				break;
		}
	}
}

function checkCreateDelivery(data, message) {
	if (data) {
		var items = data.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			//get storage location
			var theItems = items[0];
			var status = theItems.getData(CREATE_DELIVERY_BAPI + '_E_RETURN_attribKey').getValue();
			var deliveryNo = theItems.getData(CREATE_DELIVERY_BAPI + '_E_DELIVERY_attribKey').getValue();
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
		} else {
			Ext.Msg.alert('Order', 'The order ' + orderNumber + ' is created succesfully but delivery is not. Please create delivery and PGI manually.', function() {
				refreshData(true);
				mainContainer.unmask();
			});
		}
	} else {
		Ext.Msg.alert('Order', 'The order ' + orderNumber + ' is created succesfully but delivery is not. Please create delivery and PGI manually.', function() {
			refreshData(true);
			mainContainer.unmask();
		});
	}
}

function checkAddAttachment(data, message) {
	if (data) {
		var items = data.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			//get storage location
			var theItems = items[0];
			var status = theItems.getData(ADD_ATTACHMENT_BAPI + '_E_STATUS_attribKey').getValue();
			if (status == 'S') {
				createDelivery(orderNumber);
			} else {
				mainContainer.unmask();
				reportErrorMessage(ADD_ORDER_ATTACHMENT_EXCEPTION, function() {
				});
			}
		} else {
			mainContainer.unmask();
			reportErrorMessage(ADD_ORDER_ATTACHMENT_EXCEPTION, function() {
			});
		}
	} else {
		mainContainer.unmask();
		reportErrorMessage(ADD_ORDER_ATTACHMENT_EXCEPTION, function() {
		});
	}
}

function checkDeleteCustomerStatus(data, message) {
	if (data) {
		var items = data.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			//get storage location
			var theItems = items[0];
			var status = theItems.getData(DELETE_CUSTOMER_BAPI + '_E_RETURN_attribKey').getValue();
			if (status == 'S') {
				Ext.Msg.alert('Customer', 'The customer has succesfully deleted.', function() {
					mainContainer.unmask();
					updateRecentCustomerDelete();
					customerTabPop();
					updateCustomerStore();
				});
			} else {
				Ext.Msg.alert('Error', 'The customer may be locked by other users. So it cannot be deleted.', function() {
					mainContainer.unmask();
				});
			}
		} else {
			Ext.Msg.alert('Error', 'The customer may be locked by other users. So it cannot be deleted.', function() {
				mainContainer.unmask();
			});
		}
	} else {
		Ext.Msg.alert('Error', 'The customer may be locked by other users. So it cannot be deleted.', function() {
			mainContainer.unmask();
		});
	}
}

function checkDeleteVanScheduleStatus(data, message) {
	if (data) {
		var items = data.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			//get storage location
			var theItems = items[0];
			var status = theItems.getData(DELETE_VAN_SCHEDULE_BAPI + '_RETURN_STATUS_attribKey').getValue();
			if (status == 'S') {
				Ext.Msg.alert('Contact', 'The contact has succesfully deleted.', function() {
					mainContainer.unmask();
					updateRecentVanScheduleDelete();
					customerTabPop();
					updateCustomerStore();
				});
			} else {
				mainContainer.unmask();
				// handling exception raised from BAPI
				var errorString = message.getData('ErrorLogs').getValue()[0].getData('ErrorLogMessage').getValue();
				reportErrorMessage(errorString, function() {
				});
			}
		} else {
			mainContainer.unmask();
			// handling exception raised from BAPI
			var errorString = message.getData('ErrorLogs').getValue()[0].getData('ErrorLogMessage').getValue();
			reportErrorMessage(errorString, function() {
			});
		}
	} else {
		mainContainer.unmask();
		// handling exception raised from BAPI
		var errorString = message.getData('ErrorLogs').getValue()[0].getData('ErrorLogMessage').getValue();
		reportErrorMessage(errorString, function() {
		});
	}
}

function checkDeleteContactStatus(data, message) {
	if (data) {
		var items = data.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			//get storage location
			var theItems = items[0];
			var status = theItems.getData(DELETE_CONTACT_BAPI + '_E_RETURN_attribKey').getValue();
			if (status == 'S') {
				Ext.Msg.alert('Contact', 'The contact has succesfully deleted.', function() {
					mainContainer.unmask();
					updateRecentContactDelete();
					updateContactStore();
				});
			} else {
				Ext.Msg.alert('Error', 'The contact may be locked or linked to sales activity. So it cannot be deleted.', function() {
					mainContainer.unmask();
				});
			}
		} else {
			Ext.Msg.alert('Error', 'The contact may be locked or linked to sales activity. So it cannot be deleted.', function() {
				mainContainer.unmask();
			});
		}
	} else {
		Ext.Msg.alert('Error', 'The contact may be locked or linked to sales activity. So it cannot be deleted.', function() {
			mainContainer.unmask();
		});
	}
}

function saveRecentActivity(recActData, message) {
	if (recActData) {
		var items = recActData.getValue();
		var noOfItems = items.length;
		activityData = {
			items : []
		};
		if (noOfItems > 0) {
			// reset product Result
			console.log('get data from product search MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];

				myitem.actNo = theItems.getData(CUSTOMER_RECENT_ACTIVITY_BAPI + '_ACT_NO_attribKey').getValue().replace(/^0+/, '');

				myitem.contName = theItems.getData(CUSTOMER_RECENT_ACTIVITY_BAPI + '_NAME_attribKey').getValue();

				myitem.contNo = theItems.getData(CUSTOMER_RECENT_ACTIVITY_BAPI + '_CONTACT_attribKey').getValue();

				myitem.fromDate = theItems.getData(CUSTOMER_RECENT_ACTIVITY_BAPI + '_FROM_DATE_attribKey').getValue();

				myitem.toDate = theItems.getData(CUSTOMER_RECENT_ACTIVITY_BAPI + '_TO_DATE_attribKey').getValue();

				myitem.text = theItems.getData(CUSTOMER_RECENT_ACTIVITY_BAPI + '_ACT_TEXT_attribKey').getValue();

				myitem.createdBy = theItems.getData(CUSTOMER_RECENT_ACTIVITY_BAPI + '_CREATEDBY_attribKey').getValue();

				myitem.actType = theItems.getData(CUSTOMER_RECENT_ACTIVITY_BAPI + '_ACT_TYPE_TEXT_attribKey').getValue();

				myitem.type = "Recent Activity";

				activityData.items.push(myitem);
			}
			console.log('finish getting data from product search MBO');

			updateActivityStore();
		}
		getCustomerAddress();
	} else {
		mainContainer.unmask();
		Ext.Msg.alert(TRY_CATCH_ERROR_HEADING, err, function() {
		});
	}
}

function saveCustomerAddress(addressData, message) {
	if (addressData) {
		selectedCustAddr = {};
		var items = addressData.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			// reset product Result
			var theItems = items[0];
			selectedCustAddr.name1 = theItems.getData(CUSTOMER_ADDRESS_BAPI + '_E_NAME1_attribKey').getValue();
			selectedCustAddr.name2 = theItems.getData(CUSTOMER_ADDRESS_BAPI + '_E_NAME2_attribKey').getValue();
			selectedCustAddr.street = theItems.getData(CUSTOMER_ADDRESS_BAPI + '_E_STREET_attribKey').getValue();
			selectedCustAddr.postcode = theItems.getData(CUSTOMER_ADDRESS_BAPI + '_E_POSTCODE_attribKey').getValue();
			selectedCustAddr.city = theItems.getData(CUSTOMER_ADDRESS_BAPI + '_E_CITY_attribKey').getValue();
			selectedCustAddr.region = theItems.getData(CUSTOMER_ADDRESS_BAPI + '_E_REGION_attribKey').getValue();
			selectedCustAddr.email = theItems.getData(CUSTOMER_ADDRESS_BAPI + '_E_EMAIL_attribKey').getValue();
			selectedCustAddr.tel = theItems.getData(CUSTOMER_ADDRESS_BAPI + '_E_TEL_attribKey').getValue();
			selectedCustAddr.fax = theItems.getData(CUSTOMER_ADDRESS_BAPI + '_E_FAX_attribKey').getValue();
		}

		selectedCustRecord.custAddr = selectedCustAddr.street + ', ' + selectedCustAddr.city + ' ' + selectedCustAddr.region + ' ' + selectedCustAddr.postcode;

		mainContainer.unmask();

		//call customer main view
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'customerMain',
			id : 'customerMain',
			title : 'Customer Detail'
		});
	} else {
		mainContainer.unmask();
		Ext.Msg.alert(TRY_CATCH_ERROR_HEADING, err, function() {
		});
	}
}

function saveDisputeList(dispute, message) {
	if (dispute) {
		var items = dispute.getValue();
		var noOfItems = items.length;
		disputeData = {
			items : []
		};
		if (noOfItems > 0) {
			// reset product Result
			console.log('get data from product search MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];

				myitem.caseNo = theItems.getData(CUSTOMER_DISPUTE_LIST_BAPI + '_CASE_ID_attribKey').getValue().replace(/^0+/, '');

				myitem.title = theItems.getData(CUSTOMER_DISPUTE_LIST_BAPI + '_CASE_TITLE_attribKey').getValue();

				myitem.status = theItems.getData(CUSTOMER_DISPUTE_LIST_BAPI + '_CASE_STATUS_attribKey').getValue();

				myitem.referenceDoc = theItems.getData(CUSTOMER_DISPUTE_LIST_BAPI + '_REFERENCE_DOC_attribKey').getValue();

				myitem.createdBy = theItems.getData(CUSTOMER_DISPUTE_LIST_BAPI + '_CREATEDBY_attribKey').getValue();

				myitem.processor = theItems.getData(CUSTOMER_DISPUTE_LIST_BAPI + '_PROCESSOR_attribKey').getValue();

				myitem.responsible = theItems.getData(CUSTOMER_DISPUTE_LIST_BAPI + '_RESPO_PERS_attribKey').getValue();

				myitem.type = 'Dispute Cases';

				// update contact data for activity creation screen
				disputeData.items.push(myitem);
			}
			updateDisputeStore();
			console.log('finish getting data from product search MBO');
		}
		mainContainer.unmask();
	} else {
		mainContainer.unmask();
		Ext.Msg.alert(TRY_CATCH_ERROR_HEADING, err, function() {
		});
	}
	getCustomerRecentActivity();

}

function saveCustomerContactList(custContData, message) {
	if (custContData) {
		var items = custContData.getValue();
		var noOfItems = items.length;
		contactData = {
			items : []
		};
		availableContact = [];
		if (noOfItems > 0) {
			// reset product Result
			console.log('get data from product search MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var contactItem = {};
				var theItems = items[i];

				myitem.contNo = theItems.getData(CUSTOMER_CONTACT_LIST_BAPI + '_CONTACT_attribKey').getValue().replace(/^0+/, '');

				myitem.functions = theItems.getData(CUSTOMER_CONTACT_LIST_BAPI + '_FUNCTION_attribKey').getValue();

				myitem.department = theItems.getData(CUSTOMER_CONTACT_LIST_BAPI + '_DEPARTMENT_attribKey').getValue();

				myitem.phone = theItems.getData(CUSTOMER_CONTACT_LIST_BAPI + '_PHONE_attribKey').getValue();

				myitem.email = theItems.getData(CUSTOMER_CONTACT_LIST_BAPI + '_EMAIL_attribKey').getValue();

				myitem.firstName = theItems.getData(CUSTOMER_CONTACT_LIST_BAPI + '_FIRST_NAME_attribKey').getValue();

				myitem.lastName = theItems.getData(CUSTOMER_CONTACT_LIST_BAPI + '_LAST_NAME_attribKey').getValue();

				myitem.title = theItems.getData(CUSTOMER_CONTACT_LIST_BAPI + '_TITLE_attribKey').getValue();

				myitem.contName = myitem.title + ' ' + myitem.firstName + ' ' + myitem.lastName;

				myitem.type = 'Contact';

				// update contact data for activity creation screen
				contactItem.text = myitem.contName;
				contactItem.value = myitem.contNo;
				availableContact.push(contactItem);

				contactData.items.push(myitem);
			}
			console.log('finish getting data from product search MBO');

			updateContactStore();
		}
		mainContainer.unmask();
		if (availableContact.length > 0) {
			isContactReadOnly = false;
		} else {
			isContactReadOnly = true;
			availableContact = [{
				text : '',
				value : '0'
			}];
		}
		getDisputList();
	} else {
		mainContainer.unmask();
		Ext.Msg.alert(TRY_CATCH_ERROR_HEADING, err, function() {
		});
	}
}

function savePreviousPurchaseData(prevPurData, message) {
	if (prevPurData) {
		var items = prevPurData.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			// reset product Result
			prevProdData = {
				items : []
			};
			console.log('get data from product search MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];
				myitem.prodDesc = theItems.getData(PREVIOUS_PUR_BAPI + '_PRODUCT_attribKey').getValue();

				myitem.prodNo = theItems.getData(PREVIOUS_PUR_BAPI + '_MATNR_attribKey').getValue();

				myitem.listPr = theItems.getData(PREVIOUS_PUR_BAPI + '_E_LIST_PRICE_attribKey').getValue();

				myitem.custPr = theItems.getData(PREVIOUS_PUR_BAPI + '_E_CUST_PRICE_attribKey').getValue();

				myitem.atpQty = theItems.getData(PREVIOUS_PUR_BAPI + '_ATP_QTY_attribKey').getValue();

				myitem.uom = theItems.getData(PREVIOUS_PUR_BAPI + '_ATP_UOM_attribKey').getValue();

				myitem.cost = theItems.getData(PREVIOUS_PUR_BAPI + '_E_COST_attribKey').getValue();

				myitem.stock = theItems.getData(PREVIOUS_PUR_BAPI + '_STOCK_QTY_attribKey').getValue();

				myitem.atp2Qty = theItems.getData(PREVIOUS_PUR_BAPI + '_ATP2_QTY_attribKey').getValue();

				myitem.atp5Qty = theItems.getData(PREVIOUS_PUR_BAPI + '_ATP5_QTY_attribKey').getValue();

				myitem.message = theItems.getData(PREVIOUS_PUR_BAPI + '_MESSAGES_attribKey').getValue();

				myitem.isObs = theItems.getData(PREVIOUS_PUR_BAPI + '_FLAG_attribKey').getValue();

				myitem.isCustPurch = theItems.getData(PREVIOUS_PUR_BAPI + '_FLAG2_attribKey').getValue();

				myitem.kgPerThs = theItems.getData(PREVIOUS_PUR_BAPI + '_KG_THS_attribKey').getValue();

				myitem.thsPerPal = theItems.getData(PREVIOUS_PUR_BAPI + '_THS_PAL_attribKey').getValue();

				myitem.eaPerPk = theItems.getData(PREVIOUS_PUR_BAPI + '_EA_PACK_attribKey').getValue();

				myitem.count = theItems.getData(PREVIOUS_PUR_BAPI + '_COUNT_attribKey').getValue();

				prevProdData.items.push(myitem);
			}
			console.log('finish getting data from product search MBO');

			console.log('push product list screen');
			Ext.ComponentQuery.query('previousPurchaseTab')[0].push({
				xtype : 'previousPurchaseList',
				title : 'Last ' + days + ' Days'
			});

			updatePreviousPurchaseStore();
			mainContainer.unmask();
		} else {
			mainContainer.unmask();
			// no result return
			Ext.Msg.alert(NO_RESULTS_FOUND_HEADING, NO_RESULTS_FOUND_TEXT, function() {
			});
		}
	} else {
		mainContainer.unmask();
		// handling exception raised from BAPI
		var errorString = message.getData('ErrorLogs').getValue()[0].getData('ErrorLogMessage').getValue();
		reportErrorMessage(errorString, function() {
		});
	}
}

function saveVanProductData(vanProductData, message) {
	if (vanProductData) {
		var items = vanProductData.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			// reset product Result
			vanProdResultData = {
				items : []
			};
			console.log('get data from product search MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];
				myitem.prodDesc = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_PRODUCT_attribKey').getValue();

				myitem.prodNo = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_MATNR_attribKey').getValue();

				myitem.listPr = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_E_LIST_PRICE_attribKey').getValue();

				myitem.custPr = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_E_CUST_PRICE_attribKey').getValue();

				myitem.uom = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_ATP_UOM_attribKey').getValue();

				myitem.cost = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_E_COST_attribKey').getValue();

				myitem.stock = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_STOCK_QTY_attribKey').getValue();
				// for traffic light purpose
				myitem.atpQty = myitem.stock;

				myitem.atp2Qty = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_ATP2_QTY_attribKey').getValue();

				myitem.atp5Qty = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_ATP5_QTY_attribKey').getValue();

				myitem.message = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_MESSAGES_attribKey').getValue();

				myitem.isObs = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_FLAG_attribKey').getValue();

				myitem.isCustPurch = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_FLAG2_attribKey').getValue();

				myitem.kgPerThs = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_KG_THS_attribKey').getValue();

				myitem.thsPerPal = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_THS_PAL_attribKey').getValue();

				myitem.eaPerPk = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_EA_PACK_attribKey').getValue();

				myitem.count = theItems.getData(VAN_PRODUCT_LIST_BAPI + '_COUNT_attribKey').getValue();

				vanProdResultData.items.push(myitem);
			}
			console.log('finish getting data from product search MBO');

			updateVanProductResultStore();
			getVanBatch();
		} else {
			mainContainer.unmask();
			// no result return
			reportErrorMessage(NO_RESULTS_FOUND_EXCEPTION, function() {
			});
		}
	} else {
		mainContainer.unmask();
		// handling exception raised from BAPI
		var errorString = message.getData('ErrorLogs').getValue()[0].getData('ErrorLogMessage').getValue();
		reportErrorMessage(errorString, function() {
		});
	}
}

function saveVanBatchData(vanBatchData, message) {
	if (vanBatchData) {
		var items = vanBatchData.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			// reset product Result
			vanBatchResultData = {
				items : []
			};
			console.log('get data from product search MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];
				myitem.prodNo = theItems.getData(VAN_BATCH_LIST_BAPI + '_PRODUCT_attribKey').getValue().replace(/^0+/, '');

				myitem.batch = theItems.getData(VAN_BATCH_LIST_BAPI + '_BATCH_attribKey').getValue();

				vanBatchResultData.items.push(myitem);
			}
			mainContainer.unmask();
		} else {
			// no result return
			mainContainer.unmask();
		}
	} else {
		mainContainer.unmask();
		// handling exception raised from BAPI
		var errorString = message.getData('ErrorLogs').getValue()[0].getData('ErrorLogMessage').getValue();
		reportErrorMessage(errorString, function() {
		});
	}
}

function saveProductSearchData(productSearchData, message) {
	if (productSearchData) {
		var items = productSearchData.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			// reset product Result
			prodResultData = {
				items : []
			};
			console.log('get data from product search MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];
				myitem.prodDesc = theItems.getData(PRODUCT_SEARCH_BAPI + '_PRODUCT_attribKey').getValue();

				myitem.prodNo = theItems.getData(PRODUCT_SEARCH_BAPI + '_MATNR_attribKey').getValue();

				myitem.listPr = theItems.getData(PRODUCT_SEARCH_BAPI + '_E_LIST_PRICE_attribKey').getValue();

				myitem.custPr = theItems.getData(PRODUCT_SEARCH_BAPI + '_E_CUST_PRICE_attribKey').getValue();

				myitem.atpQty = theItems.getData(PRODUCT_SEARCH_BAPI + '_ATP_QTY_attribKey').getValue();

				myitem.uom = theItems.getData(PRODUCT_SEARCH_BAPI + '_ATP_UOM_attribKey').getValue();

				myitem.cost = theItems.getData(PRODUCT_SEARCH_BAPI + '_E_COST_attribKey').getValue();

				myitem.stock = theItems.getData(PRODUCT_SEARCH_BAPI + '_STOCK_QTY_attribKey').getValue();

				myitem.atp2Qty = theItems.getData(PRODUCT_SEARCH_BAPI + '_ATP2_QTY_attribKey').getValue();

				myitem.atp5Qty = theItems.getData(PRODUCT_SEARCH_BAPI + '_ATP5_QTY_attribKey').getValue();

				myitem.message = theItems.getData(PRODUCT_SEARCH_BAPI + '_MESSAGES_attribKey').getValue();

				myitem.isObs = theItems.getData(PRODUCT_SEARCH_BAPI + '_FLAG_attribKey').getValue();

				myitem.isCustPurch = theItems.getData(PRODUCT_SEARCH_BAPI + '_FLAG2_attribKey').getValue();

				myitem.kgPerThs = theItems.getData(PRODUCT_SEARCH_BAPI + '_KG_THS_attribKey').getValue();

				myitem.thsPerPal = theItems.getData(PRODUCT_SEARCH_BAPI + '_THS_PAL_attribKey').getValue();

				myitem.eaPerPk = theItems.getData(PRODUCT_SEARCH_BAPI + '_EA_PACK_attribKey').getValue();

				myitem.count = theItems.getData(PRODUCT_SEARCH_BAPI + '_COUNT_attribKey').getValue();

				prodResultData.items.push(myitem);
			}
			console.log('finish getting data from product search MBO');

			console.log('push product list screen');
			Ext.ComponentQuery.query('productTab')[0].push({
				xtype : 'productResultList'
			});
			updateProductResultStore();
			mainContainer.unmask();
		} else {
			mainContainer.unmask();
			// no result return
			reportErrorMessage(NO_RESULTS_FOUND_EXCEPTION, function() {
			});
		}
	} else {
		mainContainer.unmask();
		// handling exception raised from BAPI
		var errorString = message.getData('ErrorLogs').getValue()[0].getData('ErrorLogMessage').getValue();
		reportErrorMessage(errorString, function() {
		});
	}
}

function validateAccount(accountData, message) {
	//TODO: save storage location
	if (accountData) {
		var items = accountData.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			//get storage location
			var theItems = items[0];
			userStorageLoc = theItems.getData(ACCOUNT_VALIDATION_BAPI + '_E_RESULT_attribKey').getValue();

			// validate successfully
			if (!credScreen.getHidden()) {
				savePasswordCredential();
				credScreen.hide();
			}
			getCustomerList('', 'X', '', '');
			updateCustomerListTitle();
		} else {
			mainContainer.unmask();
			showIncorrectPasswordAlert();
		}
	} else {
		mainContainer.unmask();
		showIncorrectPasswordAlert();
	}
}

function checkChangeContactStatus(data, message) {
	if (data) {
		var items = data.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			//get storage location
			var theItems = items[0];
			var status = theItems.getData(CHANGE_CONTACT_BAPI + '_E_RETURN_attribKey').getValue();
			if (status == 'S') {
				Ext.Msg.alert('Contact', 'Contact detail has succesfully changed.', function() {
					mainContainer.unmask();
					updateRecentContactChange();
					customerTabPop();
					updateContactStore();
				});
			} else {
				Ext.Msg.alert('Error', 'The contact may be locked by other users. So it cannot be changed at the moment.', function() {
					mainContainer.unmask();
				});
			}
		} else {
			Ext.Msg.alert('Error', 'The contact may be locked by other users. So it cannot be changed at the moment.', function() {
				mainContainer.unmask();
			});
		}
	} else {
		Ext.Msg.alert('Error', 'The contact may be locked by other users. So it cannot be changed at the moment.', function() {
			mainContainer.unmask();
		});
	}
}

function saveActivityNumber(activty, mvc) {
	activityNumber = null;
	if (activty) {
		var items = activty.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			console.log('get message from order creation MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];

				activityNumber = theItems.getData(ACTIVITY_CREATION_BAPI + '_E_ACTIVITY_NO_attribKey').getValue().replace(/^0+/, '');
				break;
			}
			console.log('finish getting data from order simulation message MBO');
		}
	}

	if (activityNumber != null && activityNumber.toString().trim() != '') {
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
	} else {
		Ext.Msg.alert('Error', 'An error has occurred. An activity may not be created', function() {
			mainContainer.unmask();
		});
	}
	mainContainer.unmask();
}

function saveVanScheduleUpdate(data, mvc) {
	var returnStatus = null;
	if (data) {
		var items = data.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			console.log('get message from order creation MBO');
			var myitem = {};
			var theItems = items[0];
			returnStatus = theItems.getData(UPDATE_VAN_SCHEDULE_BAPI + '_RETURN_STATUS_attribKey').getValue();
		}
	}

	if (returnStatus == 'S') {
		Ext.Msg.alert('Van', 'The schedule has been changed successfully.', function() {
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
		});
	} else {
		mainContainer.unmask();
		// handling exception raised from BAPI
		var errorString = message.getData('ErrorLogs').getValue()[0].getData('ErrorLogMessage').getValue();
		reportErrorMessage(errorString, function() {
		});
	}
	mainContainer.unmask();
}

function saveChangeCustomerNumber(customer, mvc) {
	var returnStatus = null;
	if (customer) {
		var items = customer.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			console.log('get message from order creation MBO');
			var myitem = {};
			var theItems = items[0];
			returnStatus = theItems.getData(CHANGE_CUSTOMER_BAPI + '_S_RETURN_attribKey').getValue();
		}
	}

	if (returnStatus == 'S') {
		Ext.Msg.alert('Customer', 'The customer ' + selectedCust + ' has been changed successfully.', function() {
			// update customer record from changed data
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
		});
	} else {
		Ext.Msg.alert('Error', 'The customer may be locked. So it cannot be changed.', function() {
			mainContainer.unmask();
		});
	}
	mainContainer.unmask();
}

function saveCustomerNumber(customer, mvc) {
	customerNumber = null;
	if (customer) {
		var items = customer.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			console.log('get message from order creation MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];

				customerNumber = theItems.getData(CREATE_CUSTOMER_BAPI + '_E_KUNNR_attribKey').getValue().replace(/^0+/, '');
				break;
			}
		}
	}

	if (customerNumber != null && customerNumber.toString().trim() != '') {
		Ext.Msg.alert('Customer', 'The customer ' + customerNumber + ' has been created successfully.', function() {
			tempNewCustomer.custNo = customerNumber;
			customerData.items.splice(0, 0, tempNewCustomer);
			updateCustomerStore();
			tempNewCustomer = {};
			mainContainer.unmask();
			customerTabPop();
			updateCustomerStore();
			selectedCust = customerNumber;
			moveToSelectedCustomer();
		});
	} else {
		Ext.Msg.alert('Error', 'An error has occurred. The customer may not be created', function() {
			mainContainer.unmask();
		});
	}
	mainContainer.unmask();
}

function saveContactNumber(contact, mvc) {
	var returnStatus = '';
	contactNumber = null;
	if (contact) {
		var items = contact.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			console.log('get message from order creation MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];

				contactNumber = theItems.getData(CREATE_CONTACT_BAPI + '_NEW_CONTACTID_attribKey').getValue().replace(/^0+/, '');
				returnStatus = theItems.getData(CREATE_CONTACT_BAPI + '_RETURN_STATUS_attribKey').getValue();
				break;
			}
			console.log('finish getting data from order simulation message MBO');
		}
	}

	if (contactNumber != null && contactNumber.toString().trim() != '' && returnStatus == 'S') {
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
			mainContainer.unmask();
			customerTabPop();
			updateContactStore();
		});
	} else {
		Ext.Msg.alert('Error', 'An error has occurred. The contact may not be created', function() {
			mainContainer.unmask();
		});
	}
	mainContainer.unmask();
}

function saveDisputeNumber(dispute, mvc) {
	disputeNumber = null;
	if (dispute) {
		var items = dispute.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			console.log('get message from order creation MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];

				disputeNumber = theItems.getData(DISPUTE_CREATION_BAPI + '_E_RETURN_attribKey').getValue().replace(/^0+/, '');
				break;
			}
			console.log('finish getting data from order simulation message MBO');
		}
	}

	if (disputeNumber != null) {
		Ext.Msg.alert('Dispute', 'The case ' + disputeNumber + ' has been created successfully.', function() {
			tempDispute.caseNo = disputeNumber;
			disputeData.items.splice(0, 0, tempDispute);
			tempDispute = {};
			clearDisputeView();
			mainContainer.unmask();
			customerTabPop();
			updateDisputeStore();
		});
	} else {
		Ext.Msg.alert('Error', 'An error has occurred. A dispute case may not be created', function() {
			mainContainer.unmask();
		});
	}
	mainContainer.unmask();
}

function saveOrderNumber(order, mvc) {
	orderNumber = null;
	if (order) {
		var items = order.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			console.log('get message from order creation MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];

				orderNumber = theItems.getData(ORDER_CREATE_BAPI + '_SALESDOCUMENT_attribKey').getValue().replace(/^0+/, '');
				break;
			}
			console.log('finish getting data from order simulation message MBO');
		}
	}

	var orderType = Ext.ComponentQuery.query('#orderType')[0].getValue().trim();
	var header;
	var message;
	if (orderType == 'ZSTK') {
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

function saveOrder(orderData, message) {
	if (orderData) {
		var items = orderData.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			console.log('get message from order simulation message MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];

				myitem.item = theItems.getData(ORDER_SIMULATE_BAPI + '_ITM_NUMBER_attribKey').getValue().replace(/^0+/, '');
				myitem.prod = theItems.getData(ORDER_SIMULATE_BAPI + '_MATERIAL_attribKey').getValue().replace(/^0+/, '');
				myitem.prodDesc = theItems.getData(ORDER_SIMULATE_BAPI + '_SHORT_TEXT_attribKey').getValue();
				myitem.orderQty = theItems.getData(ORDER_SIMULATE_BAPI + '_REQ_QTY_attribKey').getValue();
				myitem.uom = theItems.getData(ORDER_SIMULATE_BAPI + '_SALES_UNIT_attribKey').getValue();
				myitem.netValue = theItems.getData(ORDER_SIMULATE_BAPI + '_NET_VALUE1_attribKey').getValue();
				myitem.currency = theItems.getData(ORDER_SIMULATE_BAPI + '_CURR_ISO_attribKey').getValue();
				myitem.plant = theItems.getData(ORDER_SIMULATE_BAPI + '_PLANT_attribKey').getValue();

				simulatedOrder.items.push(myitem);
			}
			console.log('finish getting data from order simulation message MBO');
			mainContainer.unmask();
			showOrderSimulation();
		}
	} else {
		simulatedOrder = {
			items : []
		};
		mainContainer.unmask();
		Ext.Msg.alert('Error', 'No order returned', function() {
		});
	}
}

function saveOrderMessage(messageData, message) {
	var isSimulationError = false;

	if (messageData) {
		var items = messageData.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			console.log('get message from order simulation message MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];

				myitem.messageType = theItems.getData(ORDER_SIMULATE_MESSAGE_BAPI + '_TYPE_attribKey').getValue();
				myitem.message = theItems.getData(ORDER_SIMULATE_MESSAGE_BAPI + '_MESSAGE_attribKey').getValue();

				// check is order simulation error
				if (myitem.messageType == 'E') {
					isSimulationError = true;
				}
				orderMessage.items.push(myitem);
			}
			console.log('finish getting data from order simulation message MBO');
		}
	}

	if (!isSimulationError) {

		// call order simulation items
		setTimeout(function() {
			calledBAPI = ORDER_SIMULATE_BAPI;
			var zorderSimulateItem = new ZMOB_ORDER_SIMULATE_ITEM();
			zorderSimulateItem.pks.put('PK_ORDER_HEADER_pkKey', orderHeader);
			zorderSimulateItem.pks.put('PK_ORDER_ITEM_pkKey', orderItem);
			zorderSimulateItem.pks.put('PK_ORDER_PARTNER_pkKey', orderPartner);
			zmob_order_simulate_item_findAll(zorderSimulateItem, '', function() {
			});
		}, 500);
	} else {
		simulatedOrder = {
			items : []
		};
		mainContainer.unmask();
		showOrderSimulation();
	}

}

function saveCustomerListData(customerListData, message) {
	if (customerListData) {
		var items = customerListData.getValue();
		var noOfItems = items.length;
		if (noOfItems > 0) {
			// reset product Result
			customerData = {
				items : []
			};
			console.log('get data from customer list MBO');
			for (var i = 0; i < noOfItems; i++) {
				var myitem = {};
				var theItems = items[i];

				myitem.custName = theItems.getData(CUSTOMER_LIST_BAPI + '_NAME_attribKey').getValue();

				myitem.custNo = theItems.getData(CUSTOMER_LIST_BAPI + '_CUSTOMER_attribKey').getValue();

				myitem.creditLimit = theItems.getData(CUSTOMER_LIST_BAPI + '_CREDIT_LIMIT_attribKey').getValue();

				myitem.creditAvailable = theItems.getData(CUSTOMER_LIST_BAPI + '_CREDIT_AVAILABLE_attribKey').getValue();

				myitem.creditUsed = theItems.getData(CUSTOMER_LIST_BAPI + '_CREDIT_USED_attribKey').getValue();

				myitem.creditBlock = theItems.getData(CUSTOMER_LIST_BAPI + '_CREDIT_BLOCK_attribKey').getValue();

				myitem.plant = theItems.getData(CUSTOMER_LIST_BAPI + '_PLANT_attribKey').getValue();

				myitem.telNo = theItems.getData(CUSTOMER_LIST_BAPI + '_TEL_NO_attribKey').getValue();

				myitem.p1Pts = theItems.getData(CUSTOMER_LIST_BAPI + '_P1_PTS_attribKey').getValue();

				myitem.p1Status = theItems.getData(CUSTOMER_LIST_BAPI + '_P1_STATUS_attribKey').getValue();

				myitem.accountGroup = theItems.getData(CUSTOMER_LIST_BAPI + '_ACC_GROUP_attribKey').getValue();

				myitem.monday = theItems.getData(CUSTOMER_LIST_BAPI + '_MONDAY_attribKey').getValue();

				myitem.tuesday = theItems.getData(CUSTOMER_LIST_BAPI + '_TUESDAY_attribKey').getValue();

				myitem.wednesday = theItems.getData(CUSTOMER_LIST_BAPI + '_WEDNESDAY_attribKey').getValue();

				myitem.thursday = theItems.getData(CUSTOMER_LIST_BAPI + '_THURSDAY_attribKey').getValue();

				myitem.friday = theItems.getData(CUSTOMER_LIST_BAPI + '_FRIDAY_attribKey').getValue();

				myitem.saturday = theItems.getData(CUSTOMER_LIST_BAPI + '_SATURDAY_attribKey').getValue();

				myitem.sunday = theItems.getData(CUSTOMER_LIST_BAPI + '_SUNDAY_attribKey').getValue();

				myitem.visitPeriod = theItems.getData(CUSTOMER_LIST_BAPI + '_VISIT_PERIOD_attribKey').getValue();

				myitem.sequence = theItems.getData(CUSTOMER_LIST_BAPI + '_SEQUENCE_attribKey').getValue();

				myitem.address = theItems.getData(CUSTOMER_LIST_BAPI + '_ADDRESS_attribKey').getValue();

				customerData.items.push(myitem);
			}
			console.log('finish getting data from customer list MBO');

			updateCustomerList(message.storage.PK_SALES_OFF_pkKey.value, message.storage.PK_TODAY_FLAG_pkKey.value, message.storage.PK_ALL_FLAG_pkKey.value, message.storage.PK_ALL_VAN_FLAG_pkKey.value);
			updateCustomerStore();
			mainContainer.unmask();
		} else {
			mainContainer.unmask();
			// no customer returned
			reportErrorMessage(NO_CUSTOMERS_FOUND_EXCEPTION, function() {
			});
		}
	} else {
		mainContainer.unmask();
		// handling exception raised from BAPI
		var errorString = message.getData('ErrorLogs').getValue()[0].getData('ErrorLogMessage').getValue();
		reportErrorMessage(errorString, function() {
		});
	}
}

// to include css based on device type
function includeCss() {

	// Setup criteria for css
	var cssfile;

	if (hwc.isIPad() || hwc.isWindows()) {
		cssfile = "PaperVan_iPad.css";
		fieldLabelWidth = '30%';
		signatureWidth = 500;
		signatureHeight = 400;
	} else {
		cssfile = "PaperVan.css";
		fieldLabelWidth = '50%';
		signatureWidth = 300;
		signatureHeight = 200;
	}

	var headID = document.getElementsByTagName("head")[0];
	var newScript = document.createElement("link");
	newScript.type = "text/css";
	newScript.rel = "stylesheet";
	newScript.href = "app/resource/css/" + cssfile;
	headID.appendChild(newScript);
}

function reportErrorMessage(errorString, callbackFunction) {
	var alertHeader;
	var alertDetail;
	var saveLog = false;
	// check exeption
	if (errorString.indexOf(INVALID_USER_EXCEPTION) >= 0) {
		alertHeader = USR_ACCOUNT_ERROR_HEADING;
		alertDetail = '';
	} else if (errorString.indexOf(NO_CUSTOMERS_FOUND_EXCEPTION) >= 0) {
		alertHeader = NO_CUST_RESULT_HEADING;
		alertDetail = NO_CUST_RESULT_TEXT;
	} else if (errorString.indexOf(NO_SALES_OFFICE_EXCEPTION) >= 0) {
		alertHeader = USR_ACCOUNT_ERROR_HEADING;
		alertDetail = NO_SALES_OFFICE_RESULT_TEXT;
	} else if (errorString.indexOf(VAN_NOT_ASSIGNED_EXCEPTION) >= 0) {
		alertHeader = USR_ACCOUNT_ERROR_HEADING;
		alertDetail = NO_VAN_RESULT_TEXT;
	} else if (errorString.indexOf(INPUT_ERROR_EXCEPTION) >= 0) {
		alertHeader = INPUT_ERROR_HEADING;
		alertDetail = ERROR_INPUT_RESULT_TEXT;
		saveLog = true;
	} else if (errorString.indexOf(CONNECTION_LOST_EXCEPTION) >= 0) {
		alertHeader = CONNECTION_LOST_HEADING;
		alertDetail = CONNECTION_LOST_TEXT;
	} else if (errorString.indexOf(TIMEOUT_EXCEPTION) >= 0) {
		alertHeader = TIMEOUT_HEADING;
		alertDetail = TIMEOUT_TEXT;
	} else if (errorString.indexOf(NO_RESULTS_FOUND_EXCEPTION) >= 0) {
		alertHeader = NO_SEARCH_RESULT_HEADING;
		alertDetail = NO_SEARCH_RESULT_TEXT;
	} else if (errorString.indexOf(VAN_NOT_ASSIGNED_EXCEPTION) >= 0) {
		alertHeader = VAN_NOT_ASSIGNED_HEADING;
		alertDetail = VAN_NOT_ASSIGNED_TEXT;
	} else if (errorString.indexOf(UPDATE_VAN_SCHEDULE_EXCEPTION) >= 0) {
		alertHeader = UPDATE_VAN_SCHEDULE_HEADING;
		alertDetail = UPDATE_VAN_SCHEDULE_TEXT;
	} else if (errorString.indexOf(DELETE_VAN_SCHEDULE_EXCEPTION) >= 0) {
		alertHeader = DELETE_VAN_SCHEDULE_HEADING;
		alertDetail = DELETE_VAN_SCHEDULE_TEXT;
	} else if (errorString.indexOf(LINK_ATTACHMENT_EXCEPTION) >= 0) {
		alertHeader = LINK_ATTACHMENT_HEADING;
		alertDetail = LINK_ATTACHMENT_TEXT;
	} else if (errorString.indexOf(CREATE_IMAGE_EXCEPTION) >= 0) {
		alertHeader = CREATE_IMAGE_HEADING;
		alertDetail = CREATE_IMAGE_TEXT;
	} else if (errorString.indexOf(CREATE_NOTE_EXCEPTION) >= 0) {
		alertHeader = CREATE_NOTE_HEADING;
		alertDetail = CREATE_NOTE_TEXT;
	} else if (errorString.indexOf(DELIVERY_PGI_EXCEPTION) >= 0) {
		alertHeader = DELIVERY_PGI_HEADING;
		alertDetail = DELIVERY_PGI_TEXT;
	} else if (errorString.indexOf(DELIVERY_CREATION_EXCEPTION) >= 0) {
		alertHeader = DELIVERY_CREATION_HEADING;
		alertDetail = DELIVERY_CREATION_TEXT;
	} else if (errorString.indexOf(ADD_ORDER_ATTACHMENT_EXCEPTION) >= 0) {
		alertHeader = ADD_ORDER_ATTACHMENT_HEADING;
		alertDetail = ADD_ORDER_ATTACHMENT_TEXT;
	} else if (errorString.indexOf(PLANT_NOT_ASSIGNED_EXCEPTION) >= 0) {
		alertHeader = PLANT_NOT_ASSIGNED_HEADING;
		alertDetail = PLANT_NOT_ASSIGNED_TEXT;
	} else {
		alertHeader = "Unknown error";
		alertDetail = "Please contact IT";
		saveLog = true;
	}
	if (saveLog) {
		hwc.log("Error log: " + errorString, "ERROR", false);
	}
	Ext.Msg.alert(alertHeader, alertDetail, callbackFunction);

}
