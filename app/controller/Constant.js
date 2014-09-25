// file to handle constant variables.
var CUST_SEARCH_PLACE_HOLDER = 'Customer search.....';
var VAN_PRODUCT_SEARCH_PLACE_HOLDER = 'Van product search.....';
var CUST_SEARCH_ITM_ID = 'custSearch';
var APP_EXIT_BUTTOM_TEXT = 'Exit';
var CREDIT_LOW = 0;
// percent
var CREDIT_USED_HIGH = 90;
var ATP_LOW = 0;
var ATP_HIGH = 1;
var PRICE_INDEX = 1;
var ATP_QTY_INDEX = 2;
var COUNT_INDEX = 3;
var PRODUCT_DESC_INDEX = 4;
var PRODUCT_CODE_INDEX = 5;
var MESSAGE_HEIGHT = 47;
var LIST_IPAD_HEIGHT = 86;
var LIST_IPHONE_HEIGHT = 76;
var HEADER_HEIGHT = 26;
var PASSWORD_KEY = 'passwordKey';
var PRODUCT_SEARCH_BAPI = 'ZMOB_ORDER_PRODUCT_SEARCH';
var ACCOUNT_VALIDATION_BAPI = 'ZMOB_VALIDATE_ACCOUNT';
var CUSTOMER_LIST_BAPI = 'ZMOB_VAN_CUSTOMER_LIST';
var VAN_PRODUCT_LIST_BAPI = 'ZMOB_VAN_PRODUCT_LIST';
var PREVIOUS_PUR_BAPI = 'ZMOB_PREVIOUS_PURCHASES';
var ORDER_SIMULATE_BAPI = 'ZMOB_ORDER_SIMULATE_ITEM';
var ORDER_SIMULATE_MESSAGE_BAPI = 'ZMOB_ORDER_SIMULATE';
var ORDER_CREATE_BAPI = 'ZMOB_ORDER_CREATE_peer1';
var CUSTOMER_CONTACT_LIST_BAPI = 'ZMOB_CUSTOMER_CONTACT_LIST';
var CUSTOMER_DISPUTE_LIST_BAPI = 'ZMOB_CUSTOMER_DISPUTE_LIST';
var CUSTOMER_RECENT_ACTIVITY_BAPI = 'ZMOB_CUSTOMER_RECENT_ACT';
var ACTIVITY_CREATION_BAPI = 'ZMOB_CREATE_SALES_ACT';
var DISPUTE_CREATION_BAPI = 'ZMOB_CREATE_DISPUTE';
var CHANGE_CONTACT_BAPI = 'ZMOB_CHANGE_CONTACT';
var DELETE_CUSTOMER_BAPI = 'ZMOB_DELETE_CUSTOMER';
var DELETE_CONTACT_BAPI = 'ZMOB_DELETE_CONTACT';
var CREATE_CONTACT_BAPI = 'ZMOB_CREATE_CONTACT';
var CREATE_CUSTOMER_BAPI = 'ZMOB_CREATE_CUSTOMER';
var CHANGE_CUSTOMER_BAPI = 'ZMOB_CHANGE_CUSTOMER';
var DELETE_VAN_SCHEDULE_BAPI = 'ZMOB_VAN_CUSTOMER_DEL';
var UPDATE_VAN_SCHEDULE_BAPI = 'ZMOB_VAN_CUSTOMER_UPDATE';
var CUSTOMER_ADDRESS_BAPI = 'ZMOB_GET_CUSTOMER_ADDRESS';
var CREATE_DELIVERY_BAPI = 'ZMOB_CREATE_DEL_PGI';
var ADD_ATTACHMENT_BAPI = 'ZMOB_ADD_ATTACHMENT';
var VAN_BATCH_LIST_BAPI = 'ZMOB_VAN_BATCH_LIST';
var SHARED_STORAGE_KEY = 'Spicers';
var ERROR_MESSAGE = 'E';
var WARNING_MESSAGE = 'W';
var CREDIT_BLOCK = 'X';
var CREDIT_NOT_BLOCK = '';
var FIND_NUM = 1;
var MAX_HITS = 100;
var VAN_CUSTOMER_FLAG = 'VanCustomer';
var MY_CUSTOMER_FLAG = 'MyCustomer';
var TODAY_CUSTOMER_FLAG = 'TodayCustomer';
var SALES_OPPORTUNITY_TYPE = 'Sales Opportunity';
var VISITING_PERIOD = [{
	value : 'D',
	text : 'Daily'
}, {
	value : 'W',
	text : 'Weekly'
}, {
	value : 'F',
	text : 'Fortnightly'
}, {
	value : 'T',
	text : '3-weekly'
}, {
	value : 'M',
	text : 'Monthly'
}];

var REGION_LIST = [{
	text : '',
	value : '',
	plant : ''
}, {
	text : 'ACT',
	value : 'ACT',
	plant : '1510'

}, {
	text : 'NSW',
	value : 'NSW',
	plant : '2510'

}, {
	text : 'NT',
	value : 'NT',
	plant : '8510'

}, {
	text : 'QLD',
	value : 'QLD',
	plant : '4510'

}, {
	text : 'SA',
	value : 'SA',
	plant : '5510'

}, {
	text : 'TAS',
	value : 'TAS',
	plant : '7510'

}, {
	text : 'VIC',
	value : 'VIC',
	plant : '3610'

}, {
	text : 'WA',
	value : 'WA',
	plant : '6510'
}];
var CONTACT_DEPARTMENT = [{
	text : '',
	value : ''
}, {
	text : 'Managing Director',
	value : '0001'
}, {
	text : 'Purchasing',
	value : '0002'
}, {
	text : 'Sales',
	value : '0003'
}, {
	text : 'Organization',
	value : '0004'
}, {
	text : 'Administration',
	value : '0005'
}, {
	text : 'Production',
	value : '0006'
}, {
	text : 'Quality assurance',
	value : '0007'
}, {
	text : 'Secretaries',
	value : '0008'
}, {
	text : 'Financial department',
	value : '0009'
}, {
	text : 'Legal department',
	value : '0010'
}];
var CONTACT_FUNCTION = [{
	text : '',
	value : ''
}, {
	text : 'Account Director',
	value : '03'
}, {
	text : 'Account Executive',
	value : '02'
}, {
	text : 'Account Manager',
	value : '04'
}, {
	text : 'Accounts',
	value : 'A'
}, {
	text : 'Admin Manager',
	value : '05'
}, {
	text : 'Administration',
	value : '08'
}, {
	text : 'Area Manager',
	value : '07'
}, {
	text : 'Art Director',
	value : '06'
}, {
	text : 'Assist. Manager',
	value : '34'
}, {
	text : 'CEO',
	value : '24'
}, {
	text : 'Country run',
	value : 'C'
}, {
	text : 'Creative Director',
	value : '09'
}, {
	text : 'Customer Service',
	value : 'V'
}, {
	text : 'Designer',
	value : 'G'
}, {
	text : 'Director',
	value : 'D'
}, {
	text : 'Estimator',
	value : 'E'
}, {
	text : 'Footy Tipper',
	value : 'F'
}, {
	text : 'General Manager',
	value : '10'
}, {
	text : 'Graphic Designer',
	value : '25'
}, {
	text : 'Head Designer',
	value : '28'
}, {
	text : 'Key contact',
	value : '1'
}, {
	text : 'Lecturer',
	value : '31'
}, {
	text : 'Manager',
	value : 'M'
}, {
	text : 'Managing Director',
	value : 'Z'
}, {
	text : 'Marketing',
	value : '26'
}, {
	text : 'Marketing Manager',
	value : '11'
}, {
	text : 'No Mail',
	value : 'X'
}, {
	text : 'Operations Manager',
	value : '12'
}, {
	text : 'Ord acknowledgement',
	value : 'K'
}, {
	text : 'Owner',
	value : '13'
}, {
	text : 'Planner',
	value : '32'
}, {
	text : 'Print Broker',
	value : '14'
}, {
	text : 'Print Manager',
	value : '15'
}, {
	text : 'Print rep',
	value : 'T'
}, {
	text : 'Printing Consultant',
	value : '33'
}, {
	text : 'Production Assistant',
	value : '16'
}, {
	text : 'Production Manager',
	value : 'P'
}, {
	text : 'Project Manager',
	value : '30'
}, {
	text : 'Project Officer',
	value : '29'
}, {
	text : 'Public Relations',
	value : '36'
}, {
	text : 'Publications',
	value : '21'
}, {
	text : 'Publications Manager',
	value : '22'
}, {
	text : 'Purch Officer',
	value : 'O'
}, {
	text : 'Purchasing Manager',
	value : '18'
}, {
	text : 'Receptionist',
	value : 'R'
}, {
	text : 'Sales manager',
	value : 'N'
}, {
	text : 'Senior Designer',
	value : '23'
}, {
	text : 'Specifier',
	value : 'I'
}, {
	text : 'Stock stat',
	value : 'S'
}, {
	text : 'Studio Assistant',
	value : '37'
}, {
	text : 'Studio Director',
	value : '19'
}, {
	text : 'Studio Manager',
	value : '20'
}, {
	text : 'Technical Manager',
	value : '35'
}, {
	text : 'Unknown',
	value : 'U'
}, {
	text : 'Web Designer',
	value : '27'
}];

var CONTACT_TITLE = [{
	text : '',
	value : ''
}, {
	text : 'Mr.',
	value : 'Mr.'
}, {
	text : 'Mrs.',
	value : 'Mrs.'
}, {
	text : 'Ms.',
	value : 'Ms.'
}, {
	text : 'Miss',
	value : 'Miss'
}, {
	text : 'Dr.',
	value : 'Dr.'
}];
var SORT_BY = [{
	text : '',
	value : ''
}, {
	text : 'Price',
	value : 'custPr'
}, {
	text : 'ATP Qty',
	value : 'atpQty'
}, {
	text : 'Transaction Count',
	value : 'count'
}, {
	text : 'Description',
	value : 'prodDesc'
}, {
	text : 'Code',
	value : 'prodNo'
}];

var CUSTOMER_SELECTION = [{
	text : 'Select',
	value : ''
}, {
	text : "Today Customers",
	value : TODAY_CUSTOMER_FLAG
}, {
	text : 'My Customers',
	value : MY_CUSTOMER_FLAG
}, {
	text : 'Regional Van Customers',
	value : VAN_CUSTOMER_FLAG
}, {
	text : 'VIC',
	value : '5010'
}, {
	text : 'NSW',
	value : '5020'
}, {
	text : 'QLD (Brisbane)',
	value : '5030'
}, {
	text : 'QLD (Townsville)',
	value : '5031'
}, {
	text : 'SA',
	value : '5050'
}, {
	text : 'WA',
	value : '5040'
}, {
	text : 'ACT',
	value : '5080'
}, {
	text : 'NT',
	value : '5070'
}, {
	text : 'TAS',
	value : '5060'
}];

var ACTIVITY_REASON = [{
	text : 'Regular Sales Call',
	value : '001'
}, {
	text : 'Advertising Campaign',
	value : '002'
}, {
	text : 'Customer Inquiry',
	value : '003'
}, {
	text : 'Decision Meeting',
	value : '004'
}, {
	text : 'Contract End Date',
	value : '005'
}, {
	text : 'Annual Reports',
	value : '100'
}, {
	text : 'Contract/Tendor/RFP',
	value : '101'
}, {
	text : 'Customer Value Prop',
	value : '102'
}, {
	text : 'New Business',
	value : '103'
}, {
	text : 'Product Replacement',
	value : '104'
}, {
	text : 'Quote',
	value : '105'
}, {
	text : 'Regained Lost Bus',
	value : '106'
}, {
	text : 'Repeat Business',
	value : '107'
}, {
	text : 'Sample /  Follow Up',
	value : '108'
}, {
	text : 'Transfer of Existing',
	value : '109'
}, {
	text : 'Sales Force History',
	value : 'Z00'
}];

var ACTIVITY_OUTCOME = [{
	text : '',
	value : ''
}, {
	text : 'Order Signed',
	value : '001'
}, {
	text : 'Unsuccessful',
	value : '002'
}, {
	text : 'Presentat.to Follow',
	value : '003'
}, {
	text : 'Aroused Interest',
	value : '004'
}, {
	text : 'Completed',
	value : '005'
}, {
	text : 'Successful',
	value : '006'
}, {
	text : 'Build Opportunity',
	value : '100'
}, {
	text : 'Closed Lost',
	value : '101'
}, {
	text : 'Closed Won',
	value : '102'
}, {
	text : 'Cust reqs Machine',
	value : '103'
}, {
	text : 'Negotiation/Review',
	value : '104'
}, {
	text : 'Preparation Phase',
	value : '105'
}, {
	text : 'Quoted Customer',
	value : '106'
}, {
	text : 'Withdrawn',
	value : '107'
}];

var ACTIVITY_TYPE = [{
	text : 'Sales Call',
	value : '0001'
}, {
	text : 'Phone Call',
	value : '0002'
}, {
	text : 'Sales Opportunity',
	value : 'Z001'
}, {
	text : 'Service Call',
	value : 'Z002'
}, {
	text : 'Email',
	value : 'Z003'
}];

var OPPORTUNITY_TYPE = [{
	text : 'Flip Publishing',
	value : '01'
}, {
	text : 'Commerical Print Pro',
	value : '02'
}, {
	text : 'Indent - Sheets',
	value : '03'
}, {
	text : 'Lost Opportunity',
	value : '04'
}, {
	text : 'Lost Indent -sheets',
	value : '05'
}, {
	text : 'Flip Publishing',
	value : '06'
}, {
	text : 'Sign & Display',
	value : '07'
}, {
	text : 'SAP Sales Order',
	value : '08'
}, {
	text : 'SAP Quote',
	value : '09'
}, {
	text : 'Indent - Reels',
	value : '10'
}, {
	text : 'Lost Indent Reels',
	value : '11'
}, {
	text : 'Sign & Display - Con',
	value : '12'
}, {
	text : 'Hardware',
	value : '13'
}, {
	text : 'Industrial Packaging',
	value : '14'
}, {
	text : 'Product Budget',
	value : '15'
}, {
	text : 'Service Agreement',
	value : '16'
}];

var DISPUTE_CATEGORY = [{
	text : 'Complaints/Logistics',
	value : '0002'
}, {
	text : 'Financial',
	value : '0001'
}];

var DEFAULT_ORDER_TYPE = [{
	text : 'Order',
	value : 'ZSTK'
}, {
	text : 'Quote',
	value : 'ZMQT'
}, {
	text : 'Con Cust Fill-Up',
	value : 'ZMCF'
}];

var DEFAULT_SHIPPING_COND = [{
	text : 'Std Within 24 hrs',
	value : '10'
}, {
	text : 'Express Within 4 hrs',
	value : '20'
}, {
	text : 'Pickup Within 4 hrs',
	value : '40'
}];

var DEFAULT_LAST_DAYS = [{
	text : '',
	value : '0'
}, {
	text : '1 Day',
	value : '1'
}, {
	text : '7 Days',
	value : '7'
}, {
	text : '15 Days',
	value : '15'
}, {
	text : '30 Days',
	value : '30'
}, {
	text : '90 Days',
	value : '90'
}, {
	text : '180 Days',
	value : '180'
}];

var STORAGE_LOC = [{
	value : '1510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Fyshwick Store',
		value : '1000'
	}, {
		text : '2000 | Fyshwick Alt Prd',
		value : '2000'
	}]
}, {
	value : '2510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Chullora Store',
		value : '1000'
	}, {
		text : '2000 | Chullora Alt Prd',
		value : '2000'
	}, {
		text : 'VH01 | Xpress Van 01',
		value : 'VH01'
	}, {
		text : 'VH02 | Xpress Van 02',
		value : 'VH02'
	}, {
		text : 'VH10 | S&D Office',
		value : 'VH10'
	}, {
		text : 'VH20 | Fotoba Parts',
		value : 'VH20'
	}]
}, {
	value : '3610',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Scoresby Store',
		value : '1000'
	}, {
		text : '1004 | S&D ServiceParts',
		value : '1004'
	}, {
		text : '1005 | Geon S&D Parts',
		value : '1005'
	}, {
		text : '2000 | Scoresby Alt Prd',
		value : '2000'
	}, {
		text : 'VH01 | iMedia van 01',
		value : 'VH01'
	}]
}, {
	value : '4510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Pinkenba Store',
		value : '1000'
	}, {
		text : '1004 | Virginia Store',
		value : '1004'
	}, {
		text : '2000 | Pinkenba Alt Prd',
		value : '2000'
	}, {
		text : '2004 | Virginia Alt Prd',
		value : '2004'
	}]
}, {
	value : '4520',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Townsville Store',
		value : '1000'
	}, {
		text : '2000 | Tnsville Alt Prd',
		value : '2000'
	}]
}, {
	value : '5510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Beverley Store',
		value : '1000'
	}, {
		text : '1005 | Beverley Consum',
		value : '1005'
	}, {
		text : '2000 | Beverley Alt Prd',
		value : '2000'
	}, {
		text : 'VH30 | C.Knowles Cons',
		value : 'VH30'
	}, {
		text : 'VH31 | C.Nicholls Cons',
		value : 'VH31'
	}, {
		text : 'VH32 | N.Catalano Cons',
		value : 'VH32'
	}, {
		text : 'VH33 | M.O Connor Cons',
		value : 'VH33'
	}]
}, {
	value : '6510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Bassendean Store',
		value : '1000'
	}, {
		text : '1005 | Bssendean Consum',
		value : '1005'
	}, {
		text : '2000 | Bssendean Alt Pr',
		value : '2000'
	}, {
		text : 'VH06 | Xpress Van',
		value : 'VH06'
	}]
}, {
	value : '7510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Derwent Park',
		value : '1000'
	}, {
		text : '2000 | Drwnt Prk Alt Pr',
		value : '2000'
	}]
}, {
	value : '8510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Winnellie Store',
		value : '1000'
	}, {
		text : '2000 | Winnellie Alt Pr',
		value : '2000'
	}]
}];

var DEFAULT_PLANTS = [{
	text : '1510',
	value : '1510'
}, {
	text : '2510',
	value : '2510'
}, {
	text : '3610',
	value : '3610'
}, {
	text : '4510',
	value : '4510'
}, {
	text : '4520',
	value : '4520'
}, {
	text : '5510',
	value : '5510'
}, {
	text : '6510',
	value : '6510'
}, {
	text : '7510',
	value : '7510'
}, {
	text : '8510',
	value : '8510'
}];

var NO_SEARCH_RESULT_HEADING = 'No results returned';
var TRY_CATCH_ERROR_HEADING = 'Error';
var REGIONAL_CUSTOMER_HEADING = 'Regional Customers';
var NO_RESULTS_FOUND_HEADING = 'No products found';
var NO_CUST_RESULT_HEADING = 'No customers returned';
var USR_ACCOUNT_ERROR_HEADING = 'User account error';
var TOO_MANY_RESULT_HEADING = 'Too many search hits';
var INPUT_ERROR_HEADING = 'Input error';
var CONNECTION_LOST_HEADING = 'Connection Lost';
var TIMEOUT_HEADING = 'Timeout';
var DELETE_VAN_SCHEDULE_HEADING = 'Error';
var UPDATE_VAN_SCHEDULE_HEADING = 'Error';
var VAN_NOT_ASSIGNED_HEADING = USR_ACCOUNT_ERROR_HEADING;
var LINK_ATTACHMENT_HEADING = 'Error';
var CREATE_IMAGE_HEADING = 'Error';
var CREATE_NOTE_HEADING = 'Error';
var DELIVERY_PGI_HEADING = 'Error'; 
var DELIVERY_CREATION_HEADING = 'Error';
var ADD_ORDER_ATTACHMENT_HEADING = 'Error';
var PLANT_NOT_ASSIGNED_HEADING = "Error";
var DELIVERY_BATCH_SPLIT_HEADING = "Error";

var NO_SEARCH_RESULT_TEXT = 'Please check the search options.';
var NO_RESULTS_FOUND_TEXT = 'Please change date range to get more result.';
var NO_CUST_RESULT_TEXT = 'Please check whether reps number is assigned correctly in SAP.';
var NO_SALES_OFFICE_RESULT_TEXT = 'Please check whether sales office is assigned correctly in SAP.';
var NO_VAN_RESULT_TEXT = 'Please check whether paper van number is assigned correctly in SAP.';
var ERROR_INPUT_RESULT_TEXT = 'Please contact IT.';
var TOO_MANY_RESULT_TEXT = 'Please refine search';
var REGIONAL_CUSTOMER_TEXT = 'It will take a minute to retrieve all customers. Do you want to load the customers?';
var CONNECTION_LOST_TEXT = 'Please check your internet connection.';
var TIMEOUT_TEXT = 'A request takes longer than expected. Please check internet signal and try again.';
var DELETE_VAN_SCHEDULE_TEXT = 'Schedule may no be deleted.';
var UPDATE_VAN_SCHEDULE_TEXT = 'Schedule may no be deleted.';
var VAN_NOT_ASSIGNED_TEXT = "A van number is not assigned in SAP user's account.'";
var LINK_ATTACHMENT_TEXT = 'Error when linking attachments. Please contact IT.';
var CREATE_IMAGE_TEXT = 'Error when creating signature\'s image. Please contact IT.';
var CREATE_NOTE_TEXT = 'Error when creating recipient\'s note. Please contact IT.';
var DELIVERY_PGI_TEXT = 'Error when posting goods issue.'; 
var DELIVERY_CREATION_TEXT = 'Error when creating delivery.';
var ADD_ORDER_ATTACHMENT_TEXT = 'Signature cannot be attached to order.';
var PLANT_NOT_ASSIGNED_TEXT = "A plant number is not assigned in SAP user's account. Please contact SAP team";
var DELIVERY_BATCH_SPLIT_TEXT = 'An error occurs when spliting batches. Please change a delivery and manually assign batches';

var TOO_MANY_EXCEPTION = 'TOO_MANY_SEARCH_HITS';
var INVALID_USER_EXCEPTION = 'INVALID_USER';
var NO_CUSTOMERS_FOUND_EXCEPTION = 'NO_CUSTOMERS_FOUND';
var REP_NOT_ASSIGNED_EXCEPTION = 'REP_NOT_ASSIGNED';
var NO_SALES_OFFICE_EXCEPTION = 'NO_SALES_OFFICE';
var VAN_NOT_ASSIGNED_EXCEPTION = 'VAN_NOT_ASSIGNED';
var INPUT_ERROR_EXCEPTION = 'INPUT_ERROR';
var NO_RESULTS_FOUND_EXCEPTION = 'NO_RESULTS_FOUND';
var CONNECTION_LOST_EXCEPTION = 'CONNECTION_LOST';
var UNKNOWN_EXCEPTION = 'UNKNOWN';
var TIMEOUT_EXCEPTION = 'TIMEOUT';
var DELETE_VAN_SCHEDULE_EXCEPTION = 'DELETE_VAN_ERROR';
var UPDATE_VAN_SCHEDULE_EXCEPTION = 'UPDATE_VAN_ERROR';
var VAN_NOT_ASSIGNED_EXCEPTION = 'VAN_NOT_ASSIGNED';
var LINK_ATTACHMENT_EXCEPTION = 'LINK_ATTACHMENT_ERROR';
var CREATE_IMAGE_EXCEPTION = 'CREATE_IMAGE_ERROR';
var CREATE_NOTE_EXCEPTION = 'CREATE_NOTE_ERROR';
var DELIVERY_PGI_EXCEPTION = 'PGI_ERROR'; 
var DELIVERY_CREATION_EXCEPTION = 'DELIVERY_CREATION_ERROR';
var ADD_ORDER_ATTACHMENT_EXCEPTION = 'ORDER_ATTACHMENT_EXCEPTION';
var PLANT_NOT_ASSIGNED_EXCEPTION = 'NO_PLANT_ASSIGNED';
var DELIVERY_BATCH_SPLIT_EXCEPTION = 'BATCH_SPLIT_ERROR';
// // loading message
var VALIDATE_ACCOUNT_LOADING = 'Validaing user account...';
var PRODUCT_LOADING = 'Retrieving products...';
var CUSTOMER_LOADING = 'Retrieving customers...';
var PREV_PUR_LOADING = 'Retrieving previous purchases...';
var ORDER_SIMULATE_LOADING = 'Simulating an order...';
var ORDER_CREATE_LOADING = 'Creating an order...';
var ACTIVITY_CREATE_LOADING = 'Creating an activity...';
var DISPUTE_CREATE_LOADING = 'Creating a dispute case...';
var CONTACT_CHANGE_LOADING = 'Changing contact detail...';
var CONTACT_CREATE_LOADING = 'Creating contact detail...';
var CUSTOMER_CREATE_LOADING = 'Creating customer...';
var CUSTOMER_CHANGE_LOADING = 'Changing customer...';
var CONTACT_LOADING = 'Retrieving contacts...';
var RECENT_ACT_LOADING = 'Retrieving activities...';
var DISPUTE_LOADING = 'Retrieving dispute cases...';
var DELETE_CUSTOMER_LOADING = 'Deleting customer...';
var DELETE_CONTACT_LOADING = 'Deleting contact...';
var CUSTOMER_ADDRESS_LOADING = 'Loading customer address...';
var VAN_PRODUCT_LOADING = "Loading van's products...";
var DELETE_VAN_SCHEDULE_LOADING = "Deleting van's schedule...";
var UPDATE_VAN_SCHEDULE_LOADING = "Updating van's schedule...";
var VAN_BATCH_LOADING = "Retrieving batches...";
var CREATE_DELIVERY_LOADING = "Creating delivery...";
var ADD_ATTACHMENT_LOADING = "Adding attachment...";
// ERROR CONST
var DEVICE_NOT_CONNECTED = 'Device%2520not%2520connected';
var DEVICE_TIME_OUT = 'Server%2520response%2520time%2520out';

