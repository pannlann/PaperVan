var errCallback = function(error) {
	mainContainer.unmask();
	if (error.statusText != 'transaction aborted') {
		if (error.request.options.url.indexOf(getValidateAccountOData.entitySet) > 0) {
			// unauthorised username and password
			showIncorrectPasswordAlert();
		} else if (error.status == 0 && error.stausText == '' && error.responseText == '') {
			// no internet connection
			mainContainer.unmask();
			reportErrorMessage(CONNECTION_LOST_EXCEPTION, function() {
			});
		} else if (error.timedout == true) {
			mainContainer.unmask();
			reportErrorMessage(TIMEOUT_EXCEPTION, function() {
			});
		} else {
			mainContainer.unmask();
			reportErrorMessage(error.responseText, function() {
			});
		}

	}
};

// to include css based on device type
function includeCss() {

	// Setup criteria for css
	var cssfile;

	if (isIPad() || isDesktop()) {
		cssfile = "PaperVan_iPad.css";
		fieldLabelWidth = '30%';
		signatureWidth = 500;
		signatureHeight = 400;
		customerListItemHeight = 90;
	} else {
		cssfile = "PaperVan.css";
		fieldLabelWidth = '50%';
		signatureWidth = 300;
		signatureHeight = 200;
		customerListItemHeight = 80;
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
	var toastOnly = true;
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
	} else if (errorString.indexOf(CONNECTION_LOST_EXCEPTION) >= 0) {
		alertHeader = CONNECTION_LOST_HEADING;
		alertDetail = CONNECTION_LOST_TEXT;
	} else if (errorString.indexOf(TIMEOUT_EXCEPTION) >= 0) {
		alertHeader = TIMEOUT_HEADING;
		alertDetail = TIMEOUT_TEXT;
	} else if (errorString.indexOf(NO_RESULTS_FOUND_EXCEPTION) >= 0) {
		alertHeader = NO_SEARCH_RESULT_HEADING;
		alertDetail = NO_SEARCH_RESULT_HEADING + '. ' + NO_SEARCH_RESULT_TEXT;
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
	} else if (errorString.indexOf(DELIVERY_BATCH_SPLIT_EXCEPTION) >= 0) {
		alertHeader = DELIVERY_BATCH_SPLIT_HEADING;
		alertDetail = DELIVERY_BATCH_SPLIT_TEXT;
	} else if (errorString.indexOf(TOO_MANY_EXCEPTION) >= 0) {
		alertDetail = TOO_MANY_RESULT_HEADING + '. ' + TOO_MANY_RESULT_TEXT;
	} else if (errorString.indexOf(CUSTOMER_CONTACT_LIST_EXCEPTION) >= 0) {
		alertDetail = CUSTOMER_CONTACT_LIST_TEXT;
	} else if (errorString.indexOf(RECENT_ACTIVITY_LIST_EXCEPTION) >= 0) {
		alertDetail = RECENT_ACTIVITY_LIST_TEXT;
	} else if (errorString.indexOf(ERROR_CHANGING_CUSTOMER_EXCEPTION) >= 0) {
		alertDetail = ERROR_CHANGING_CUSTOMER_TEXT;
	} else if (errorString.indexOf(ERROR_DELETING_CUSTOMER_EXCEPTION) >= 0) {
		alertDetail = ERROR_DELETING_CUSTOMER_TEXT;
	} else if (errorString.indexOf(CANNOT_DELETE_DOM_CUST_EXCEPTION) >= 0) {
		alertDetail = CANNOT_DELETE_DOM_CUST_TEXT;
	} else if (errorString.indexOf(ERROR_CREATING_ACTIVITY_EXCEPTION) >= 0) {
		alertDetail = ERROR_CREATING_ACTIVITY_TEXT;
	} else if (errorString.indexOf(ERROR_CREATING_CONTACT_EXCEPTION) >= 0) {
		alertDetail = ERROR_CREATING_CONTACT_TEXT;
	} else if (errorString.indexOf(ERROR_CHANGING_CONTACT_EXCEPTION) >= 0) {
		alertDetail = ERROR_CHANGING_CONTACT_TEXT;
	} else if (errorString.indexOf(ERROR_CREATING_DISPUTE_EXCEPTION) >= 0) {
		alertDetail = ERROR_CREATING_DISPUTE_TEXT;
	} else if (errorString.indexOf(CREATE_CUSTOMER_ERROR_EXCEPTION) >= 0) {
		alertDetail = CREATE_CUSTOMER_ERROR_TEXT;
	} else if (errorString.indexOf(ERROR_DELETING_CONTACT_EXCEPTION) >= 0) {
		alertDetail = ERROR_DELETING_CONTACT_TEXT;
	} else if (errorString.indexOf(CONTACT_LINK_SALES_ACT_EXCEPTION) >= 0) {
		alertDetail = CONTACT_LINK_SALES_ACT_TEXT;
	} else if (errorString.indexOf(DELETE_VAN_SCHEDULE_EXCEPTION) >= 0) {
		alertDetail = DELETE_VAN_SCHEDULE_TEXT;
	} else if (errorString.indexOf(NO_MORE_PRODUCT_HISTORY_EXCEPTION) >= 0) {
		alertDetail = NO_MORE_PRODUCT_HISTORY_TEXT;
	} else if (errorString.indexOf(MATERIAL_PLANT_NOT_FOUND_EXCEPTION) >= 0) {
		alertDetail = MATERIAL_PLANT_NOT_FOUND_TEXT;
	} else if (errorString.indexOf(GR_INB_ERROR_EXCEPTION) >= 0) {
		alertDetail = GR_INB_ERROR_TEXT;
	} else {
		alertHeader = "Unknown error";
		alertDetail = "Please contact IT";
		saveLog = true;
	}
	if (toastOnly) {
		Ext.toast(alertDetail, 2000);
	} else {
		Ext.Msg.alert(alertHeader, alertDetail, callbackFunction);
	}

}

function isIPad() {
	if (Ext.os.deviceType != 'Phone' && Ext.os.is.iOS) {
		return true;
	} else {
		return false;
	}
}

function isDesktop() {
	return (Ext.os.deviceType == 'Desktop');
}