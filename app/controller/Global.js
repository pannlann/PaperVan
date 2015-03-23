// file to handle global variables.
var environment = 'R3D';
var noItemInCart = 1;
var mobAppType;
var mainContainer;
var credScreen;
var selectedCust;
var selectedCustAddr = {};
var signatureWidth;
var signatureHeight;
var selectedSalesAct;
var selectedContact;
var lastSavedPlant = '3610';
var sharedStorage;
var custSearchTask;
var vanProdSearchTask;
var userStorageLoc;
var userPlant;
var storageLocOptions;
var activitySubTypeList = [];
var customerPlant;
var isVanOrder;
var currentGeoLocation;
var customerGrouper;
var filters;
var searchString;
var selectedSalesOffice = '';
var customerListItemHeight;
var xcsrftoken;
var emailPDFPayload;
var openInboundDeliveryPayload;
var customerDetailPayload;
var contactPayload;
var customerVanSchedulePayload;
var activityPayload;
var orderPayload;
var disputePayload;
var attachmentPayload;
var deliveryPayload;
var vanReplPayload;
var updateVanReplKey;
var oDataBackEnd;
var serverConnection;
var isSkipProductSalesHistory;
var productHistoryViewID;
var vanVanReplData;
var searchVanReplData;
var preVanReplData;
var currentTab = 'customerTab';
var openInboundDeliveryData = [];
var vanProdSalesHistoryData = {
	items : []
};
var searchProdSalesHistoryData = {
	items : []
};
var preProdSalesHistoryData = {
	items : []
};
var searchProdAtpData = {
	items : []
};
var previousProdAtpData = {
	items : []
};
var vanProdAtpData = {
	items : []
};
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
var deliveryNo;
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
var vanProductOption;

// Selected product in format of
// items : {}
var userId;
var password;
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
var shiptoData = []; 