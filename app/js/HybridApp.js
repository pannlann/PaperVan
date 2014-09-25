/*
 * Sybase Hybrid App version 2.2.2
 * 
 * hybridapp.js
 * This file will be regenerated, so changes made herein will be removed the
 * next time the hybrid app is regenerated. It is therefore strongly recommended
 * that the user not make changes in this file.
 * 
 * The template used to create this file was compiled on Tue Feb 05 17:47:30 EST 2013
 *
 * Copyright (c) 2012 Sybase Inc. All rights reserved.
 */
 

 /**
 * Returns The constructor of a MBO structure. This is helper function for creating MBO's operations or Object Query input structure
 * @param attributes, By default, attribute names of a MBO, separated by one space, but in the case, that if an operation of the MBO has a parameter which doesn't map to the MBO's attribute, it would be parameters names.
 * @param children, The association names of a MBO or array type parameter names, separated by one space.
 */
function makeClass(attributes, children) {
    var attributeNames = attributes.split(' ');
    var attributeCount = attributeNames.length;
    var childrenNames = children.split(' ');
    var childrenCount = childrenNames.length;
  
   
    function constructor() {
        for (var i = 0; i < attributeCount; i++)
        {
        	var name = attributeNames[i];
        	var subAttr = null;
        	
        	//If the name contains . which should be structure, 
        	while( name.indexOf('.') >0 )
        	{
        		var part = name.substring( 0, name.indexOf('.'));
        		if ( subAttr )
        		{
        			subAttr.part = new Object();
        			subAttr = subAttr.part;
        		}else 
        		{
        		    this[part]= new Object();
        		    subAttr = this[part];
        		}
        		name = name.substring( name.indexOf('.')+1, name.length);
        	}
        	
        	if ( subAttr )
        	{
        		subAttr[name]= new Object();
            }else {
        		this[name] = new Object();
        	}
        }
      
        for (var i = 0; i < childrenCount; i++) {
            this[childrenNames[i]] =[];
            this['OldValue_' + childrenNames[i]] =[];
        }
        
        this['__state'] ="";
        this['pks'] = {};
      
        var self = this;
 
        this['pks'].put = function(pkName, pkValue ) {
        	self['pks'][pkName] = pkValue ;
        }
    }
    
    return constructor;
}


/****************** DEFINITION OF MBO JAVASCRIPT STRUCTURE ************************/
 
  
/**
 * Returns ZMOB_CHANGE_CONTACT MBO structure. 
 * Used by JavaScript functions of zmob_change_contact_findAll
 * @param E_RETURN, The "E_RETURN" is an attribute field of the MBO ZMOB_CHANGE_CONTACT
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_CHANGE_CONTACT = makeClass( "E_RETURN _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_CHANGE_CUSTOMER MBO structure. 
 * Used by JavaScript functions of zmob_change_customer_findAll
 * @param S_RETURN, The "S_RETURN" is an attribute field of the MBO ZMOB_CHANGE_CUSTOMER
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_CHANGE_CUSTOMER = makeClass( "S_RETURN _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_CREATE_CONTACT MBO structure. 
 * Used by JavaScript functions of zmob_create_contact_findAll
 * @param NEW_CONTACTID, The "NEW_CONTACTID" is an attribute field of the MBO ZMOB_CREATE_CONTACT
 * @param RETURN_STATUS, The "RETURN_STATUS" is an attribute field of the MBO ZMOB_CREATE_CONTACT
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_CREATE_CONTACT = makeClass( "NEW_CONTACTID RETURN_STATUS _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_CREATE_CUSTOMER MBO structure. 
 * Used by JavaScript functions of zmob_create_customer_findAll
 * @param E_KUNNR, The "E_KUNNR" is an attribute field of the MBO ZMOB_CREATE_CUSTOMER
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_CREATE_CUSTOMER = makeClass( "E_KUNNR _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_CREATE_DISPUTE MBO structure. 
 * Used by JavaScript functions of zmob_create_dispute_findAll
 * @param E_RETURN, The "E_RETURN" is an attribute field of the MBO ZMOB_CREATE_DISPUTE
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_CREATE_DISPUTE = makeClass( "E_RETURN _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_CREATE_SALES_ACT MBO structure. 
 * Used by JavaScript functions of zmob_create_sales_act_findAll
 * @param E_ACTIVITY_NO, The "E_ACTIVITY_NO" is an attribute field of the MBO ZMOB_CREATE_SALES_ACT
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_CREATE_SALES_ACT = makeClass( "E_ACTIVITY_NO _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_CUSTOMER_CONTACT_LIST MBO structure. 
 * Used by JavaScript functions of zmob_customer_contact_list_findAll
 * @param CONTACT, The "CONTACT" is an attribute field of the MBO ZMOB_CUSTOMER_CONTACT_LIST
 * @param PHONE, The "PHONE" is an attribute field of the MBO ZMOB_CUSTOMER_CONTACT_LIST
 * @param EMAIL, The "EMAIL" is an attribute field of the MBO ZMOB_CUSTOMER_CONTACT_LIST
 * @param FIRST_NAME, The "FIRST_NAME" is an attribute field of the MBO ZMOB_CUSTOMER_CONTACT_LIST
 * @param LAST_NAME, The "LAST_NAME" is an attribute field of the MBO ZMOB_CUSTOMER_CONTACT_LIST
 * @param FUNCTION, The "FUNCTION" is an attribute field of the MBO ZMOB_CUSTOMER_CONTACT_LIST
 * @param DEPARTMENT, The "DEPARTMENT" is an attribute field of the MBO ZMOB_CUSTOMER_CONTACT_LIST
 * @param TITLE, The "TITLE" is an attribute field of the MBO ZMOB_CUSTOMER_CONTACT_LIST
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_CUSTOMER_CONTACT_LIST = makeClass( "CONTACT PHONE EMAIL FIRST_NAME LAST_NAME FUNCTION DEPARTMENT TITLE _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_CUSTOMER_DISPUTE_LIST MBO structure. 
 * Used by JavaScript functions of zmob_customer_dispute_list_findAll
 * @param CASE_ID, The "CASE_ID" is an attribute field of the MBO ZMOB_CUSTOMER_DISPUTE_LIST
 * @param CASE_TITLE, The "CASE_TITLE" is an attribute field of the MBO ZMOB_CUSTOMER_DISPUTE_LIST
 * @param CASE_STATUS, The "CASE_STATUS" is an attribute field of the MBO ZMOB_CUSTOMER_DISPUTE_LIST
 * @param REFERENCE_DOC, The "REFERENCE_DOC" is an attribute field of the MBO ZMOB_CUSTOMER_DISPUTE_LIST
 * @param CREATEDBY, The "CREATEDBY" is an attribute field of the MBO ZMOB_CUSTOMER_DISPUTE_LIST
 * @param PROCESSOR, The "PROCESSOR" is an attribute field of the MBO ZMOB_CUSTOMER_DISPUTE_LIST
 * @param RESPO_PERS, The "RESPO_PERS" is an attribute field of the MBO ZMOB_CUSTOMER_DISPUTE_LIST
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_CUSTOMER_DISPUTE_LIST = makeClass( "CASE_ID CASE_TITLE CASE_STATUS REFERENCE_DOC CREATEDBY PROCESSOR RESPO_PERS _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_CUSTOMER_LIST MBO structure. 
 * Used by JavaScript functions of zmob_customer_list_findAll
 * @param CUSTOMER, The "CUSTOMER" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param NAME, The "NAME" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param ADDRESS, The "ADDRESS" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param CREDIT_LIMIT, The "CREDIT_LIMIT" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param CREDIT_AVAILABLE, The "CREDIT_AVAILABLE" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param CREDIT_USED, The "CREDIT_USED" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param CREDIT_BLOCK, The "CREDIT_BLOCK" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param PLANT, The "PLANT" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param TEL_NO, The "TEL_NO" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param P1_PTS, The "P1_PTS" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param P1_STATUS, The "P1_STATUS" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param ACC_GROUP, The "ACC_GROUP" is an attribute field of the MBO ZMOB_CUSTOMER_LIST
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_CUSTOMER_LIST = makeClass( "CUSTOMER NAME ADDRESS CREDIT_LIMIT CREDIT_AVAILABLE CREDIT_USED CREDIT_BLOCK PLANT TEL_NO P1_PTS P1_STATUS ACC_GROUP _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_CUSTOMER_RECENT_ACT MBO structure. 
 * Used by JavaScript functions of zmob_customer_recent_act_findAll,zmob_customer_recent_act_findByPrimaryKey
 * @param ACT_NO, The "ACT_NO" is an attribute field of the MBO ZMOB_CUSTOMER_RECENT_ACT
 * @param CONTACT, The "CONTACT" is an attribute field of the MBO ZMOB_CUSTOMER_RECENT_ACT
 * @param NAME, The "NAME" is an attribute field of the MBO ZMOB_CUSTOMER_RECENT_ACT
 * @param FROM_DATE, The "FROM_DATE" is an attribute field of the MBO ZMOB_CUSTOMER_RECENT_ACT
 * @param TO_DATE, The "TO_DATE" is an attribute field of the MBO ZMOB_CUSTOMER_RECENT_ACT
 * @param ACT_TEXT, The "ACT_TEXT" is an attribute field of the MBO ZMOB_CUSTOMER_RECENT_ACT
 * @param CREATEDBY, The "CREATEDBY" is an attribute field of the MBO ZMOB_CUSTOMER_RECENT_ACT
 * @param ACT_TYPE, The "ACT_TYPE" is an attribute field of the MBO ZMOB_CUSTOMER_RECENT_ACT
 * @param ACT_TYPE_TEXT, The "ACT_TYPE_TEXT" is an attribute field of the MBO ZMOB_CUSTOMER_RECENT_ACT
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_CUSTOMER_RECENT_ACT = makeClass( "ACT_NO CONTACT NAME FROM_DATE TO_DATE ACT_TEXT CREATEDBY ACT_TYPE ACT_TYPE_TEXT _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_DELETE_CONTACT MBO structure. 
 * Used by JavaScript functions of zmob_delete_contact_findAll
 * @param E_RETURN, The "E_RETURN" is an attribute field of the MBO ZMOB_DELETE_CONTACT
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_DELETE_CONTACT = makeClass( "E_RETURN _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_DELETE_CUSTOMER MBO structure. 
 * Used by JavaScript functions of zmob_delete_customer_findAll
 * @param E_RETURN, The "E_RETURN" is an attribute field of the MBO ZMOB_DELETE_CUSTOMER
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_DELETE_CUSTOMER = makeClass( "E_RETURN _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_GET_CUSTOMER_ADDRESS MBO structure. 
 * Used by JavaScript functions of zmob_get_customer_address_findAll
 * @param E_POSTCODE, The "E_POSTCODE" is an attribute field of the MBO ZMOB_GET_CUSTOMER_ADDRESS
 * @param E_TEL, The "E_TEL" is an attribute field of the MBO ZMOB_GET_CUSTOMER_ADDRESS
 * @param E_REGION, The "E_REGION" is an attribute field of the MBO ZMOB_GET_CUSTOMER_ADDRESS
 * @param E_NAME1, The "E_NAME1" is an attribute field of the MBO ZMOB_GET_CUSTOMER_ADDRESS
 * @param E_CITY, The "E_CITY" is an attribute field of the MBO ZMOB_GET_CUSTOMER_ADDRESS
 * @param E_FAX, The "E_FAX" is an attribute field of the MBO ZMOB_GET_CUSTOMER_ADDRESS
 * @param E_NAME2, The "E_NAME2" is an attribute field of the MBO ZMOB_GET_CUSTOMER_ADDRESS
 * @param E_EMAIL, The "E_EMAIL" is an attribute field of the MBO ZMOB_GET_CUSTOMER_ADDRESS
 * @param E_STREET, The "E_STREET" is an attribute field of the MBO ZMOB_GET_CUSTOMER_ADDRESS
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_GET_CUSTOMER_ADDRESS = makeClass( "E_POSTCODE E_TEL E_REGION E_NAME1 E_CITY E_FAX E_NAME2 E_EMAIL E_STREET _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_ORDER_CREATE MBO structure. 
 * Used by JavaScript functions of zmob_order_create_findAll
 * @param SALESDOCUMENT, The "SALESDOCUMENT" is an attribute field of the MBO ZMOB_ORDER_CREATE
 * @param TYPE, The "TYPE" is an attribute field of the MBO ZMOB_ORDER_CREATE
 * @param MESSAGE, The "MESSAGE" is an attribute field of the MBO ZMOB_ORDER_CREATE
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_ORDER_CREATE = makeClass( "SALESDOCUMENT TYPE MESSAGE _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_ORDER_CREATE_peer1 MBO structure. 
 * Used by JavaScript functions of zmob_order_create_peer1_findAll
 * @param SALESDOCUMENT, The "SALESDOCUMENT" is an attribute field of the MBO ZMOB_ORDER_CREATE_peer1
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_ORDER_CREATE_peer1 = makeClass( "SALESDOCUMENT _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_ORDER_PRODUCT_SEARCH MBO structure. 
 * Used by JavaScript functions of zmob_order_product_search_findAll
 * @param MATNR, The "MATNR" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param PRODUCT, The "PRODUCT" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param KG_THS, The "KG_THS" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param EA_PACK, The "EA_PACK" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param THS_PAL, The "THS_PAL" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param STOCK_QTY, The "STOCK_QTY" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param ATP_QTY, The "ATP_QTY" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param ATP_UOM, The "ATP_UOM" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param ATP2_QTY, The "ATP2_QTY" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param ATP5_QTY, The "ATP5_QTY" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param MESSAGES, The "MESSAGES" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param FLAG, The "FLAG" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param FLAG2, The "FLAG2" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param E_LIST_PRICE, The "E_LIST_PRICE" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param E_CUST_PRICE, The "E_CUST_PRICE" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param E_COST, The "E_COST" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param COUNT, The "COUNT" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param E_CURRENCY, The "E_CURRENCY" is an attribute field of the MBO ZMOB_ORDER_PRODUCT_SEARCH
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_ORDER_PRODUCT_SEARCH = makeClass( "MATNR PRODUCT KG_THS EA_PACK THS_PAL STOCK_QTY ATP_QTY ATP_UOM ATP2_QTY ATP5_QTY MESSAGES FLAG FLAG2 E_LIST_PRICE E_CUST_PRICE E_COST COUNT E_CURRENCY _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_ORDER_SIMULATE MBO structure. 
 * Used by JavaScript functions of zmob_order_simulate_findAll
 * @param TYPE, The "TYPE" is an attribute field of the MBO ZMOB_ORDER_SIMULATE
 * @param MESSAGE, The "MESSAGE" is an attribute field of the MBO ZMOB_ORDER_SIMULATE
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_ORDER_SIMULATE = makeClass( "TYPE MESSAGE _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_ORDER_SIMULATE_ITEM MBO structure. 
 * Used by JavaScript functions of zmob_order_simulate_item_findAll
 * @param ITM_NUMBER, The "ITM_NUMBER" is an attribute field of the MBO ZMOB_ORDER_SIMULATE_ITEM
 * @param MATERIAL, The "MATERIAL" is an attribute field of the MBO ZMOB_ORDER_SIMULATE_ITEM
 * @param SHORT_TEXT, The "SHORT_TEXT" is an attribute field of the MBO ZMOB_ORDER_SIMULATE_ITEM
 * @param REQ_QTY, The "REQ_QTY" is an attribute field of the MBO ZMOB_ORDER_SIMULATE_ITEM
 * @param SALES_UNIT, The "SALES_UNIT" is an attribute field of the MBO ZMOB_ORDER_SIMULATE_ITEM
 * @param NET_VALUE1, The "NET_VALUE1" is an attribute field of the MBO ZMOB_ORDER_SIMULATE_ITEM
 * @param CURR_ISO, The "CURR_ISO" is an attribute field of the MBO ZMOB_ORDER_SIMULATE_ITEM
 * @param PLANT, The "PLANT" is an attribute field of the MBO ZMOB_ORDER_SIMULATE_ITEM
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_ORDER_SIMULATE_ITEM = makeClass( "ITM_NUMBER MATERIAL SHORT_TEXT REQ_QTY SALES_UNIT NET_VALUE1 CURR_ISO PLANT _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_PREVIOUS_PURCHASES MBO structure. 
 * Used by JavaScript functions of zmob_previous_purchases_findAll,zmob_previous_purchases_findByPrimaryKey
 * @param MATNR, The "MATNR" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param PRODUCT, The "PRODUCT" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param KG_THS, The "KG_THS" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param EA_PACK, The "EA_PACK" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param THS_PAL, The "THS_PAL" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param STOCK_QTY, The "STOCK_QTY" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param ATP_QTY, The "ATP_QTY" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param ATP_UOM, The "ATP_UOM" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param ATP2_QTY, The "ATP2_QTY" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param ATP5_QTY, The "ATP5_QTY" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param MESSAGES, The "MESSAGES" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param FLAG, The "FLAG" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param FLAG2, The "FLAG2" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param E_LIST_PRICE, The "E_LIST_PRICE" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param E_CUST_PRICE, The "E_CUST_PRICE" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param E_COST, The "E_COST" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param E_CURRENCY, The "E_CURRENCY" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param COUNT, The "COUNT" is an attribute field of the MBO ZMOB_PREVIOUS_PURCHASES
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_PREVIOUS_PURCHASES = makeClass( "MATNR PRODUCT KG_THS EA_PACK THS_PAL STOCK_QTY ATP_QTY ATP_UOM ATP2_QTY ATP5_QTY MESSAGES FLAG FLAG2 E_LIST_PRICE E_CUST_PRICE E_COST E_CURRENCY COUNT _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_VALIDATE_ACCOUNT MBO structure. 
 * Used by JavaScript functions of zmob_validate_account_findAll
 * @param E_RESULT, The "E_RESULT" is an attribute field of the MBO ZMOB_VALIDATE_ACCOUNT
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_VALIDATE_ACCOUNT = makeClass( "E_RESULT _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_VAN_CUSTOMER_DEL MBO structure. 
 * Used by JavaScript functions of zmob_van_customer_del_findAll
 * @param RETURN_STATUS, The "RETURN_STATUS" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_DEL
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_VAN_CUSTOMER_DEL = makeClass( "RETURN_STATUS _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_VAN_CUSTOMER_LIST MBO structure. 
 * Used by JavaScript functions of zmob_van_customer_list_findAll
 * @param CUSTOMER, The "CUSTOMER" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param NAME, The "NAME" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param CREDIT_LIMIT, The "CREDIT_LIMIT" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param CREDIT_AVAILABLE, The "CREDIT_AVAILABLE" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param CREDIT_USED, The "CREDIT_USED" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param CREDIT_BLOCK, The "CREDIT_BLOCK" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param PLANT, The "PLANT" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param TEL_NO, The "TEL_NO" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param P1_PTS, The "P1_PTS" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param P1_STATUS, The "P1_STATUS" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param ACC_GROUP, The "ACC_GROUP" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param MONDAY, The "MONDAY" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param TUESDAY, The "TUESDAY" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param WEDNESDAY, The "WEDNESDAY" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param THURSDAY, The "THURSDAY" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param FRIDAY, The "FRIDAY" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param SATURDAY, The "SATURDAY" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param SUNDAY, The "SUNDAY" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param VISIT_PERIOD, The "VISIT_PERIOD" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param SEQUENCE, The "SEQUENCE" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param ADDRESS, The "ADDRESS" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_LIST
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_VAN_CUSTOMER_LIST = makeClass( "CUSTOMER NAME CREDIT_LIMIT CREDIT_AVAILABLE CREDIT_USED CREDIT_BLOCK PLANT TEL_NO P1_PTS P1_STATUS ACC_GROUP MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY VISIT_PERIOD SEQUENCE ADDRESS _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_VAN_CUSTOMER_UPDATE MBO structure. 
 * Used by JavaScript functions of zmob_van_customer_update_findAll,zmob_van_customer_update_findByPrimaryKey
 * @param RETURN_STATUS, The "RETURN_STATUS" is an attribute field of the MBO ZMOB_VAN_CUSTOMER_UPDATE
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_VAN_CUSTOMER_UPDATE = makeClass( "RETURN_STATUS _surrogateKey", "" );
 
  
/**
 * Returns ZMOB_VAN_PRODUCT_LIST MBO structure. 
 * Used by JavaScript functions of zmob_van_product_list_findAll
 * @param MATNR, The "MATNR" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param PRODUCT, The "PRODUCT" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param KG_THS, The "KG_THS" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param EA_PACK, The "EA_PACK" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param THS_PAL, The "THS_PAL" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param STOCK_QTY, The "STOCK_QTY" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param ATP_QTY, The "ATP_QTY" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param ATP_UOM, The "ATP_UOM" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param ATP2_QTY, The "ATP2_QTY" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param ATP5_QTY, The "ATP5_QTY" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param MESSAGES, The "MESSAGES" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param FLAG, The "FLAG" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param FLAG2, The "FLAG2" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param E_LIST_PRICE, The "E_LIST_PRICE" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param E_CUST_PRICE, The "E_CUST_PRICE" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param E_COST, The "E_COST" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param E_CURRENCY, The "E_CURRENCY" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param COUNT, The "COUNT" is an attribute field of the MBO ZMOB_VAN_PRODUCT_LIST
 * @param _surrogateKey, _surrogateKey need to be set if this MBO used in delete operation from its parent MBO. 
 */   
ZMOB_VAN_PRODUCT_LIST = makeClass( "MATNR PRODUCT KG_THS EA_PACK THS_PAL STOCK_QTY ATP_QTY ATP_UOM ATP2_QTY ATP5_QTY MESSAGES FLAG FLAG2 E_LIST_PRICE E_CUST_PRICE E_COST E_CURRENCY COUNT _surrogateKey", "" );

/**
 * Variable PK_FIRSTNAME_pkKey   used by function zmob_change_contact_findAll, zmob_create_contact_findAll, for details please see the definition of the functions.
 */
var  PK_FIRSTNAME_pkKey = "PK_FIRSTNAME_pkKey";
/**
 * Variable PK_CUSTOMER_pkKey   used by function zmob_change_contact_findAll, zmob_change_customer_findAll, zmob_create_contact_findAll, zmob_create_dispute_findAll, zmob_create_sales_act_findAll, zmob_customer_contact_list_findAll, zmob_customer_dispute_list_findAll, zmob_customer_recent_act_findAll, zmob_customer_recent_act_findByPrimaryKey, zmob_delete_contact_findAll, zmob_delete_customer_findAll, zmob_get_customer_address_findAll, zmob_order_product_search_findAll, zmob_van_customer_del_findAll, zmob_van_customer_update_findAll, zmob_van_customer_update_findByPrimaryKey, zmob_van_product_list_findAll, for details please see the definition of the functions.
 */
var  PK_CUSTOMER_pkKey = "PK_CUSTOMER_pkKey";
/**
 * Variable PK_LASTNAME_pkKey   used by function zmob_change_contact_findAll, zmob_create_contact_findAll, for details please see the definition of the functions.
 */
var  PK_LASTNAME_pkKey = "PK_LASTNAME_pkKey";
/**
 * Variable PK_EMAIL_pkKey   used by function zmob_change_contact_findAll, zmob_change_customer_findAll, zmob_create_contact_findAll, zmob_create_customer_findAll, for details please see the definition of the functions.
 */
var  PK_EMAIL_pkKey = "PK_EMAIL_pkKey";
/**
 * Variable PK_CONTACT_pkKey   used by function zmob_change_contact_findAll, zmob_create_dispute_findAll, zmob_create_sales_act_findAll, zmob_delete_contact_findAll, for details please see the definition of the functions.
 */
var  PK_CONTACT_pkKey = "PK_CONTACT_pkKey";
/**
 * Variable PK_TEL_pkKey   used by function zmob_change_contact_findAll, zmob_change_customer_findAll, zmob_create_contact_findAll, zmob_create_customer_findAll, for details please see the definition of the functions.
 */
var  PK_TEL_pkKey = "PK_TEL_pkKey";
/**
 * Variable PK_FUNCTION_pkKey   used by function zmob_change_contact_findAll, zmob_create_contact_findAll, for details please see the definition of the functions.
 */
var  PK_FUNCTION_pkKey = "PK_FUNCTION_pkKey";
/**
 * Variable PK_CONTACT_TITLE_pkKey   used by function zmob_change_contact_findAll, zmob_create_contact_findAll, for details please see the definition of the functions.
 */
var  PK_CONTACT_TITLE_pkKey = "PK_CONTACT_TITLE_pkKey";
/**
 * Variable PK_DEPARTMENT_pkKey   used by function zmob_change_contact_findAll, zmob_create_contact_findAll, for details please see the definition of the functions.
 */
var  PK_DEPARTMENT_pkKey = "PK_DEPARTMENT_pkKey";
/**
 * Variable PK_NAME2_pkKey   used by function zmob_change_customer_findAll, zmob_create_customer_findAll, for details please see the definition of the functions.
 */
var  PK_NAME2_pkKey = "PK_NAME2_pkKey";
/**
 * Variable PK_NAME1_pkKey   used by function zmob_change_customer_findAll, zmob_create_customer_findAll, for details please see the definition of the functions.
 */
var  PK_NAME1_pkKey = "PK_NAME1_pkKey";
/**
 * Variable PK_POSTCODE_pkKey   used by function zmob_change_customer_findAll, zmob_create_customer_findAll, for details please see the definition of the functions.
 */
var  PK_POSTCODE_pkKey = "PK_POSTCODE_pkKey";
/**
 * Variable PK_CITY_pkKey   used by function zmob_change_customer_findAll, zmob_create_customer_findAll, for details please see the definition of the functions.
 */
var  PK_CITY_pkKey = "PK_CITY_pkKey";
/**
 * Variable PK_REGION_pkKey   used by function zmob_change_customer_findAll, zmob_create_customer_findAll, for details please see the definition of the functions.
 */
var  PK_REGION_pkKey = "PK_REGION_pkKey";
/**
 * Variable PK_FAX_pkKey   used by function zmob_change_customer_findAll, zmob_create_customer_findAll, for details please see the definition of the functions.
 */
var  PK_FAX_pkKey = "PK_FAX_pkKey";
/**
 * Variable PK_STREET_pkKey   used by function zmob_change_customer_findAll, zmob_create_customer_findAll, for details please see the definition of the functions.
 */
var  PK_STREET_pkKey = "PK_STREET_pkKey";
/**
 * Variable PK_DIST_TEXT_pkKey   used by function zmob_create_dispute_findAll, for details please see the definition of the functions.
 */
var  PK_DIST_TEXT_pkKey = "PK_DIST_TEXT_pkKey";
/**
 * Variable PK_REF_pkKey   used by function zmob_create_dispute_findAll, for details please see the definition of the functions.
 */
var  PK_REF_pkKey = "PK_REF_pkKey";
/**
 * Variable PK_CLAIM_AMOUNT_pkKey   used by function zmob_create_dispute_findAll, for details please see the definition of the functions.
 */
var  PK_CLAIM_AMOUNT_pkKey = "PK_CLAIM_AMOUNT_pkKey";
/**
 * Variable PK_TITLE_pkKey   used by function zmob_create_dispute_findAll, for details please see the definition of the functions.
 */
var  PK_TITLE_pkKey = "PK_TITLE_pkKey";
/**
 * Variable PK_CATEGORY_pkKey   used by function zmob_create_dispute_findAll, for details please see the definition of the functions.
 */
var  PK_CATEGORY_pkKey = "PK_CATEGORY_pkKey";
/**
 * Variable PK_QTY_pkKey   used by function zmob_create_sales_act_findAll, for details please see the definition of the functions.
 */
var  PK_QTY_pkKey = "PK_QTY_pkKey";
/**
 * Variable PK_REASON_pkKey   used by function zmob_create_sales_act_findAll, for details please see the definition of the functions.
 */
var  PK_REASON_pkKey = "PK_REASON_pkKey";
/**
 * Variable PK_DATE_pkKey   used by function zmob_create_sales_act_findAll, for details please see the definition of the functions.
 */
var  PK_DATE_pkKey = "PK_DATE_pkKey";
/**
 * Variable PK_OUTCOME_pkKey   used by function zmob_create_sales_act_findAll, for details please see the definition of the functions.
 */
var  PK_OUTCOME_pkKey = "PK_OUTCOME_pkKey";
/**
 * Variable PK_DESC_1_pkKey   used by function zmob_create_sales_act_findAll, for details please see the definition of the functions.
 */
var  PK_DESC_1_pkKey = "PK_DESC_1_pkKey";
/**
 * Variable PK_AMOUNT_pkKey   used by function zmob_create_sales_act_findAll, for details please see the definition of the functions.
 */
var  PK_AMOUNT_pkKey = "PK_AMOUNT_pkKey";
/**
 * Variable PK_DOC_NO_pkKey   used by function zmob_create_sales_act_findAll, for details please see the definition of the functions.
 */
var  PK_DOC_NO_pkKey = "PK_DOC_NO_pkKey";
/**
 * Variable PK_ACT_TYPE_pkKey   used by function zmob_create_sales_act_findAll, for details please see the definition of the functions.
 */
var  PK_ACT_TYPE_pkKey = "PK_ACT_TYPE_pkKey";
/**
 * Variable PK_ACT_TEXT_pkKey   used by function zmob_create_sales_act_findAll, for details please see the definition of the functions.
 */
var  PK_ACT_TEXT_pkKey = "PK_ACT_TEXT_pkKey";
/**
 * Variable PK_VOLUME_pkKey   used by function zmob_create_sales_act_findAll, for details please see the definition of the functions.
 */
var  PK_VOLUME_pkKey = "PK_VOLUME_pkKey";
/**
 * Variable PK_SALES_OFF_pkKey   used by function zmob_customer_list_findAll, zmob_van_customer_list_findAll, for details please see the definition of the functions.
 */
var  PK_SALES_OFF_pkKey = "PK_SALES_OFF_pkKey";
/**
 * Variable PK_ACT_MAX_pkKey   used by function zmob_customer_recent_act_findAll, zmob_customer_recent_act_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_ACT_MAX_pkKey = "PK_ACT_MAX_pkKey";
/**
 * Variable PK_ORDER_ITEM_pkKey   used by function zmob_order_create_findAll, zmob_order_create_peer1_findAll, zmob_order_simulate_findAll, zmob_order_simulate_item_findAll, for details please see the definition of the functions.
 */
var  PK_ORDER_ITEM_pkKey = "PK_ORDER_ITEM_pkKey";
/**
 * Variable PK_ORDER_PARTNER_pkKey   used by function zmob_order_create_findAll, zmob_order_create_peer1_findAll, zmob_order_simulate_findAll, zmob_order_simulate_item_findAll, for details please see the definition of the functions.
 */
var  PK_ORDER_PARTNER_pkKey = "PK_ORDER_PARTNER_pkKey";
/**
 * Variable PK_ORDER_HEADER_pkKey   used by function zmob_order_create_findAll, zmob_order_create_peer1_findAll, zmob_order_simulate_findAll, zmob_order_simulate_item_findAll, for details please see the definition of the functions.
 */
var  PK_ORDER_HEADER_pkKey = "PK_ORDER_HEADER_pkKey";
/**
 * Variable PK_GENERAL_ORDER_TEXT_pkKey   used by function zmob_order_create_findAll, zmob_order_create_peer1_findAll, for details please see the definition of the functions.
 */
var  PK_GENERAL_ORDER_TEXT_pkKey = "PK_GENERAL_ORDER_TEXT_pkKey";
/**
 * Variable PK_QUOTATION_TEXT_pkKey   used by function zmob_order_create_findAll, zmob_order_create_peer1_findAll, for details please see the definition of the functions.
 */
var  PK_QUOTATION_TEXT_pkKey = "PK_QUOTATION_TEXT_pkKey";
/**
 * Variable PK_DELIVERY_TEXT_pkKey   used by function zmob_order_create_findAll, zmob_order_create_peer1_findAll, for details please see the definition of the functions.
 */
var  PK_DELIVERY_TEXT_pkKey = "PK_DELIVERY_TEXT_pkKey";
/**
 * Variable PK_FIND_ALT_pkKey   used by function zmob_order_product_search_findAll, for details please see the definition of the functions.
 */
var  PK_FIND_ALT_pkKey = "PK_FIND_ALT_pkKey";
/**
 * Variable PK_FIND_NUM_pkKey   used by function zmob_order_product_search_findAll, for details please see the definition of the functions.
 */
var  PK_FIND_NUM_pkKey = "PK_FIND_NUM_pkKey";
/**
 * Variable PK_MAX_HITS_pkKey   used by function zmob_order_product_search_findAll, for details please see the definition of the functions.
 */
var  PK_MAX_HITS_pkKey = "PK_MAX_HITS_pkKey";
/**
 * Variable PK_STRING_pkKey   used by function zmob_order_product_search_findAll, for details please see the definition of the functions.
 */
var  PK_STRING_pkKey = "PK_STRING_pkKey";
/**
 * Variable PK_ZERO_pkKey   used by function zmob_order_product_search_findAll, for details please see the definition of the functions.
 */
var  PK_ZERO_pkKey = "PK_ZERO_pkKey";
/**
 * Variable PK_ATP_QTY_pkKey   used by function zmob_order_product_search_findAll, for details please see the definition of the functions.
 */
var  PK_ATP_QTY_pkKey = "PK_ATP_QTY_pkKey";
/**
 * Variable PK_PLANT_pkKey   used by function zmob_order_product_search_findAll, for details please see the definition of the functions.
 */
var  PK_PLANT_pkKey = "PK_PLANT_pkKey";
/**
 * Variable PK_CUSTOMER_PREV_pkKey   used by function zmob_previous_purchases_findAll, zmob_previous_purchases_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_CUSTOMER_PREV_pkKey = "PK_CUSTOMER_PREV_pkKey";
/**
 * Variable PK_DAYS_pkKey   used by function zmob_previous_purchases_findAll, zmob_previous_purchases_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_DAYS_pkKey = "PK_DAYS_pkKey";
/**
 * Variable PK_USER_pkKey   used by function zmob_van_customer_del_findAll, zmob_van_customer_list_findAll, zmob_van_customer_update_findAll, zmob_van_customer_update_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_USER_pkKey = "PK_USER_pkKey";
/**
 * Variable PK_TODAY_FLAG_pkKey   used by function zmob_van_customer_list_findAll, for details please see the definition of the functions.
 */
var  PK_TODAY_FLAG_pkKey = "PK_TODAY_FLAG_pkKey";
/**
 * Variable PK_ALL_FLAG_pkKey   used by function zmob_van_customer_list_findAll, for details please see the definition of the functions.
 */
var  PK_ALL_FLAG_pkKey = "PK_ALL_FLAG_pkKey";
/**
 * Variable PK_ALL_VAN_FLAG_pkKey   used by function zmob_van_customer_list_findAll, for details please see the definition of the functions.
 */
var  PK_ALL_VAN_FLAG_pkKey = "PK_ALL_VAN_FLAG_pkKey";
/**
 * Variable PK_VISIT_PERIOD_pkKey   used by function zmob_van_customer_update_findAll, zmob_van_customer_update_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_VISIT_PERIOD_pkKey = "PK_VISIT_PERIOD_pkKey";
/**
 * Variable PK_WEDNESDAY_pkKey   used by function zmob_van_customer_update_findAll, zmob_van_customer_update_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_WEDNESDAY_pkKey = "PK_WEDNESDAY_pkKey";
/**
 * Variable PK_FRIDAY_pkKey   used by function zmob_van_customer_update_findAll, zmob_van_customer_update_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_FRIDAY_pkKey = "PK_FRIDAY_pkKey";
/**
 * Variable PK_SUNDAY_pkKey   used by function zmob_van_customer_update_findAll, zmob_van_customer_update_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_SUNDAY_pkKey = "PK_SUNDAY_pkKey";
/**
 * Variable PK_SATURDAY_pkKey   used by function zmob_van_customer_update_findAll, zmob_van_customer_update_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_SATURDAY_pkKey = "PK_SATURDAY_pkKey";
/**
 * Variable PK_MONDAY_pkKey   used by function zmob_van_customer_update_findAll, zmob_van_customer_update_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_MONDAY_pkKey = "PK_MONDAY_pkKey";
/**
 * Variable PK_THURSDAY_pkKey   used by function zmob_van_customer_update_findAll, zmob_van_customer_update_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_THURSDAY_pkKey = "PK_THURSDAY_pkKey";
/**
 * Variable PK_TUESDAY_pkKey   used by function zmob_van_customer_update_findAll, zmob_van_customer_update_findByPrimaryKey, for details please see the definition of the functions.
 */
var  PK_TUESDAY_pkKey = "PK_TUESDAY_pkKey"; 
   
  
/******************MBO OPERATION AND OBJECT QUERY FUNCTIONS************************/
    	 
/*
 * Global variables for ZMOB_CHANGE_CONTACT MBO actions
 */
ZMOB_CHANGE_CONTACT.findAllAction = "ZMOB_CHANGE_CONTACT_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_change_contactObj which is the instance of ZMOB_CHANGE_CONTACT JavaScript structure.  User needs to set values for personalization key PK_FIRSTNAME_pkKey PK_CUSTOMER_pkKey PK_LASTNAME_pkKey PK_EMAIL_pkKey PK_CONTACT_pkKey PK_TEL_pkKey PK_FUNCTION_pkKey PK_CONTACT_TITLE_pkKey PK_DEPARTMENT_pkKey by calling zmob_change_contactObj.pks.put function, for examples zmob_change_contactObj.pks.put(PK_FIRSTNAME_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_change_contact_findAll(zmob_change_contactObj, credInfo ,  errorCallback)
{
    var keys = ["PK_FIRSTNAME_pkKey", "PK_CUSTOMER_pkKey", "PK_LASTNAME_pkKey", "PK_EMAIL_pkKey", "PK_CONTACT_pkKey", "PK_TEL_pkKey", "PK_FUNCTION_pkKey", "PK_CONTACT_TITLE_pkKey", "PK_DEPARTMENT_pkKey"];
    var types = ["string", "string", "string", "string", "string", "string", "string", "string", "string"];
    var objValues = [zmob_change_contactObj.pks.PK_FIRSTNAME_pkKey, zmob_change_contactObj.pks.PK_CUSTOMER_pkKey, zmob_change_contactObj.pks.PK_LASTNAME_pkKey, zmob_change_contactObj.pks.PK_EMAIL_pkKey, zmob_change_contactObj.pks.PK_CONTACT_pkKey, zmob_change_contactObj.pks.PK_TEL_pkKey, zmob_change_contactObj.pks.PK_FUNCTION_pkKey, zmob_change_contactObj.pks.PK_CONTACT_TITLE_pkKey, zmob_change_contactObj.pks.PK_DEPARTMENT_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_CHANGE_CONTACT_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_CHANGE_CUSTOMER MBO actions
 */
ZMOB_CHANGE_CUSTOMER.findAllAction = "ZMOB_CHANGE_CUSTOMER_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_change_customerObj which is the instance of ZMOB_CHANGE_CUSTOMER JavaScript structure.  User needs to set values for personalization key PK_CUSTOMER_pkKey PK_NAME2_pkKey PK_EMAIL_pkKey PK_NAME1_pkKey PK_POSTCODE_pkKey PK_TEL_pkKey PK_CITY_pkKey PK_REGION_pkKey PK_FAX_pkKey PK_STREET_pkKey by calling zmob_change_customerObj.pks.put function, for examples zmob_change_customerObj.pks.put(PK_CUSTOMER_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_change_customer_findAll(zmob_change_customerObj, credInfo ,  errorCallback)
{
    var keys = ["PK_CUSTOMER_pkKey", "PK_NAME2_pkKey", "PK_EMAIL_pkKey", "PK_NAME1_pkKey", "PK_POSTCODE_pkKey", "PK_TEL_pkKey", "PK_CITY_pkKey", "PK_REGION_pkKey", "PK_FAX_pkKey", "PK_STREET_pkKey"];
    var types = ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string"];
    var objValues = [zmob_change_customerObj.pks.PK_CUSTOMER_pkKey, zmob_change_customerObj.pks.PK_NAME2_pkKey, zmob_change_customerObj.pks.PK_EMAIL_pkKey, zmob_change_customerObj.pks.PK_NAME1_pkKey, zmob_change_customerObj.pks.PK_POSTCODE_pkKey, zmob_change_customerObj.pks.PK_TEL_pkKey, zmob_change_customerObj.pks.PK_CITY_pkKey, zmob_change_customerObj.pks.PK_REGION_pkKey, zmob_change_customerObj.pks.PK_FAX_pkKey, zmob_change_customerObj.pks.PK_STREET_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_CHANGE_CUSTOMER_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_CREATE_CONTACT MBO actions
 */
ZMOB_CREATE_CONTACT.findAllAction = "ZMOB_CREATE_CONTACT_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_create_contactObj which is the instance of ZMOB_CREATE_CONTACT JavaScript structure.  User needs to set values for personalization key PK_FIRSTNAME_pkKey PK_FUNCTION_pkKey PK_CUSTOMER_pkKey PK_LASTNAME_pkKey PK_EMAIL_pkKey PK_TEL_pkKey PK_CONTACT_TITLE_pkKey PK_DEPARTMENT_pkKey by calling zmob_create_contactObj.pks.put function, for examples zmob_create_contactObj.pks.put(PK_FIRSTNAME_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_create_contact_findAll(zmob_create_contactObj, credInfo ,  errorCallback)
{
    var keys = ["PK_FIRSTNAME_pkKey", "PK_FUNCTION_pkKey", "PK_CUSTOMER_pkKey", "PK_LASTNAME_pkKey", "PK_EMAIL_pkKey", "PK_TEL_pkKey", "PK_CONTACT_TITLE_pkKey", "PK_DEPARTMENT_pkKey"];
    var types = ["string", "string", "string", "string", "string", "string", "string", "string"];
    var objValues = [zmob_create_contactObj.pks.PK_FIRSTNAME_pkKey, zmob_create_contactObj.pks.PK_FUNCTION_pkKey, zmob_create_contactObj.pks.PK_CUSTOMER_pkKey, zmob_create_contactObj.pks.PK_LASTNAME_pkKey, zmob_create_contactObj.pks.PK_EMAIL_pkKey, zmob_create_contactObj.pks.PK_TEL_pkKey, zmob_create_contactObj.pks.PK_CONTACT_TITLE_pkKey, zmob_create_contactObj.pks.PK_DEPARTMENT_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_CREATE_CONTACT_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_CREATE_CUSTOMER MBO actions
 */
ZMOB_CREATE_CUSTOMER.findAllAction = "ZMOB_CREATE_CUSTOMER_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_create_customerObj which is the instance of ZMOB_CREATE_CUSTOMER JavaScript structure.  User needs to set values for personalization key PK_NAME2_pkKey PK_EMAIL_pkKey PK_NAME1_pkKey PK_POSTCODE_pkKey PK_TEL_pkKey PK_CITY_pkKey PK_REGION_pkKey PK_FAX_pkKey PK_STREET_pkKey by calling zmob_create_customerObj.pks.put function, for examples zmob_create_customerObj.pks.put(PK_NAME2_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_create_customer_findAll(zmob_create_customerObj, credInfo ,  errorCallback)
{
    var keys = ["PK_NAME2_pkKey", "PK_EMAIL_pkKey", "PK_NAME1_pkKey", "PK_POSTCODE_pkKey", "PK_TEL_pkKey", "PK_CITY_pkKey", "PK_REGION_pkKey", "PK_FAX_pkKey", "PK_STREET_pkKey"];
    var types = ["string", "string", "string", "string", "string", "string", "string", "string", "string"];
    var objValues = [zmob_create_customerObj.pks.PK_NAME2_pkKey, zmob_create_customerObj.pks.PK_EMAIL_pkKey, zmob_create_customerObj.pks.PK_NAME1_pkKey, zmob_create_customerObj.pks.PK_POSTCODE_pkKey, zmob_create_customerObj.pks.PK_TEL_pkKey, zmob_create_customerObj.pks.PK_CITY_pkKey, zmob_create_customerObj.pks.PK_REGION_pkKey, zmob_create_customerObj.pks.PK_FAX_pkKey, zmob_create_customerObj.pks.PK_STREET_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_CREATE_CUSTOMER_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_CREATE_DISPUTE MBO actions
 */
ZMOB_CREATE_DISPUTE.findAllAction = "ZMOB_CREATE_DISPUTE_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_create_disputeObj which is the instance of ZMOB_CREATE_DISPUTE JavaScript structure.  User needs to set values for personalization key PK_CUSTOMER_pkKey PK_DIST_TEXT_pkKey PK_REF_pkKey PK_CONTACT_pkKey PK_CLAIM_AMOUNT_pkKey PK_TITLE_pkKey PK_CATEGORY_pkKey by calling zmob_create_disputeObj.pks.put function, for examples zmob_create_disputeObj.pks.put(PK_CUSTOMER_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_create_dispute_findAll(zmob_create_disputeObj, credInfo ,  errorCallback)
{
    var keys = ["PK_CUSTOMER_pkKey", "PK_DIST_TEXT_pkKey", "PK_REF_pkKey", "PK_CONTACT_pkKey", "PK_CLAIM_AMOUNT_pkKey", "PK_TITLE_pkKey", "PK_CATEGORY_pkKey"];
    var types = ["string", "string", "string", "string", "decimal", "string", "string"];
    var objValues = [zmob_create_disputeObj.pks.PK_CUSTOMER_pkKey, zmob_create_disputeObj.pks.PK_DIST_TEXT_pkKey, zmob_create_disputeObj.pks.PK_REF_pkKey, zmob_create_disputeObj.pks.PK_CONTACT_pkKey, zmob_create_disputeObj.pks.PK_CLAIM_AMOUNT_pkKey, zmob_create_disputeObj.pks.PK_TITLE_pkKey, zmob_create_disputeObj.pks.PK_CATEGORY_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_CREATE_DISPUTE_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_CREATE_SALES_ACT MBO actions
 */
ZMOB_CREATE_SALES_ACT.findAllAction = "ZMOB_CREATE_SALES_ACT_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_create_sales_actObj which is the instance of ZMOB_CREATE_SALES_ACT JavaScript structure.  User needs to set values for personalization key PK_QTY_pkKey PK_REASON_pkKey PK_DATE_pkKey PK_OUTCOME_pkKey PK_DESC_1_pkKey PK_AMOUNT_pkKey PK_CUSTOMER_pkKey PK_CONTACT_pkKey PK_DOC_NO_pkKey PK_ACT_TYPE_pkKey PK_ACT_TEXT_pkKey PK_VOLUME_pkKey by calling zmob_create_sales_actObj.pks.put function, for examples zmob_create_sales_actObj.pks.put(PK_QTY_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_create_sales_act_findAll(zmob_create_sales_actObj, credInfo ,  errorCallback)
{
    var keys = ["PK_QTY_pkKey", "PK_REASON_pkKey", "PK_DATE_pkKey", "PK_OUTCOME_pkKey", "PK_DESC_1_pkKey", "PK_AMOUNT_pkKey", "PK_CUSTOMER_pkKey", "PK_CONTACT_pkKey", "PK_DOC_NO_pkKey", "PK_ACT_TYPE_pkKey", "PK_ACT_TEXT_pkKey", "PK_VOLUME_pkKey"];
    var types = ["string", "string", "DateTime", "string", "string", "decimal", "string", "string", "string", "string", "string", "string"];
    var objValues = [zmob_create_sales_actObj.pks.PK_QTY_pkKey, zmob_create_sales_actObj.pks.PK_REASON_pkKey, zmob_create_sales_actObj.pks.PK_DATE_pkKey, zmob_create_sales_actObj.pks.PK_OUTCOME_pkKey, zmob_create_sales_actObj.pks.PK_DESC_1_pkKey, zmob_create_sales_actObj.pks.PK_AMOUNT_pkKey, zmob_create_sales_actObj.pks.PK_CUSTOMER_pkKey, zmob_create_sales_actObj.pks.PK_CONTACT_pkKey, zmob_create_sales_actObj.pks.PK_DOC_NO_pkKey, zmob_create_sales_actObj.pks.PK_ACT_TYPE_pkKey, zmob_create_sales_actObj.pks.PK_ACT_TEXT_pkKey, zmob_create_sales_actObj.pks.PK_VOLUME_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_CREATE_SALES_ACT_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_CUSTOMER_CONTACT_LIST MBO actions
 */
ZMOB_CUSTOMER_CONTACT_LIST.findAllAction = "ZMOB_CUSTOMER_CONTACT_LIST_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_customer_contact_listObj which is the instance of ZMOB_CUSTOMER_CONTACT_LIST JavaScript structure.  User needs to set a value for personalization key PK_CUSTOMER_pkKey by calling zmob_customer_contact_listObj.pks.put function, for examples zmob_customer_contact_listObj.pks.put(PK_CUSTOMER_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_customer_contact_list_findAll(zmob_customer_contact_listObj, credInfo ,  errorCallback)
{
    var keys = ["PK_CUSTOMER_pkKey"];
    var types = ["string"];
    var objValues = [zmob_customer_contact_listObj.pks.PK_CUSTOMER_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_CUSTOMER_CONTACT_LIST_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_CUSTOMER_DISPUTE_LIST MBO actions
 */
ZMOB_CUSTOMER_DISPUTE_LIST.findAllAction = "ZMOB_CUSTOMER_DISPUTE_LIST_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_customer_dispute_listObj which is the instance of ZMOB_CUSTOMER_DISPUTE_LIST JavaScript structure.  User needs to set a value for personalization key PK_CUSTOMER_pkKey by calling zmob_customer_dispute_listObj.pks.put function, for examples zmob_customer_dispute_listObj.pks.put(PK_CUSTOMER_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_customer_dispute_list_findAll(zmob_customer_dispute_listObj, credInfo ,  errorCallback)
{
    var keys = ["PK_CUSTOMER_pkKey"];
    var types = ["string"];
    var objValues = [zmob_customer_dispute_listObj.pks.PK_CUSTOMER_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_CUSTOMER_DISPUTE_LIST_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_CUSTOMER_LIST MBO actions
 */
ZMOB_CUSTOMER_LIST.findAllAction = "ZMOB_CUSTOMER_LIST_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_customer_listObj which is the instance of ZMOB_CUSTOMER_LIST JavaScript structure.  User needs to set a value for personalization key PK_SALES_OFF_pkKey by calling zmob_customer_listObj.pks.put function, for examples zmob_customer_listObj.pks.put(PK_SALES_OFF_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_customer_list_findAll(zmob_customer_listObj, credInfo ,  errorCallback)
{
    var keys = ["PK_SALES_OFF_pkKey"];
    var types = ["string"];
    var objValues = [zmob_customer_listObj.pks.PK_SALES_OFF_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_CUSTOMER_LIST_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_CUSTOMER_RECENT_ACT MBO actions
 */
ZMOB_CUSTOMER_RECENT_ACT.findAllAction = "ZMOB_CUSTOMER_RECENT_ACT_findAll";
ZMOB_CUSTOMER_RECENT_ACT.findByPrimaryKeyAction = "ZMOB_CUSTOMER_RECENT_ACT_findByPrimaryKey";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_customer_recent_actObj which is the instance of ZMOB_CUSTOMER_RECENT_ACT JavaScript structure.  User needs to set values for personalization key PK_CUSTOMER_pkKey PK_ACT_MAX_pkKey by calling zmob_customer_recent_actObj.pks.put function, for examples zmob_customer_recent_actObj.pks.put(PK_CUSTOMER_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_customer_recent_act_findAll(zmob_customer_recent_actObj, credInfo ,  errorCallback)
{
    var keys = ["PK_CUSTOMER_pkKey", "PK_ACT_MAX_pkKey"];
    var types = ["string", "int"];
    var objValues = [zmob_customer_recent_actObj.pks.PK_CUSTOMER_pkKey, zmob_customer_recent_actObj.pks.PK_ACT_MAX_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_CUSTOMER_RECENT_ACT_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_customer_recent_actObj which is the instance of ZMOB_CUSTOMER_RECENT_ACT JavaScript structure.  User needs to set values for personalization key PK_CUSTOMER_pkKey PK_ACT_MAX_pkKey by calling zmob_customer_recent_actObj.pks.put function, for examples zmob_customer_recent_actObj.pks.put(PK_CUSTOMER_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_customer_recent_act_findByPrimaryKey(zmob_customer_recent_actObj, credInfo ,  errorCallback)
{
    var keys = ["ZMOB_CUSTOMER_RECENT_ACT_findByPrimaryKey_ACT_NO_paramKey", "PK_CUSTOMER_pkKey", "PK_ACT_MAX_pkKey"];
    var types = ["string", "string", "int"];
    var objValues = [zmob_customer_recent_actObj.ACT_NO, zmob_customer_recent_actObj.pks.PK_CUSTOMER_pkKey, zmob_customer_recent_actObj.pks.PK_ACT_MAX_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_CUSTOMER_RECENT_ACT_findByPrimaryKey");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_DELETE_CONTACT MBO actions
 */
ZMOB_DELETE_CONTACT.findAllAction = "ZMOB_DELETE_CONTACT_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_delete_contactObj which is the instance of ZMOB_DELETE_CONTACT JavaScript structure.  User needs to set values for personalization key PK_CUSTOMER_pkKey PK_CONTACT_pkKey by calling zmob_delete_contactObj.pks.put function, for examples zmob_delete_contactObj.pks.put(PK_CUSTOMER_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_delete_contact_findAll(zmob_delete_contactObj, credInfo ,  errorCallback)
{
    var keys = ["PK_CUSTOMER_pkKey", "PK_CONTACT_pkKey"];
    var types = ["string", "string"];
    var objValues = [zmob_delete_contactObj.pks.PK_CUSTOMER_pkKey, zmob_delete_contactObj.pks.PK_CONTACT_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_DELETE_CONTACT_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_DELETE_CUSTOMER MBO actions
 */
ZMOB_DELETE_CUSTOMER.findAllAction = "ZMOB_DELETE_CUSTOMER_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_delete_customerObj which is the instance of ZMOB_DELETE_CUSTOMER JavaScript structure.  User needs to set a value for personalization key PK_CUSTOMER_pkKey by calling zmob_delete_customerObj.pks.put function, for examples zmob_delete_customerObj.pks.put(PK_CUSTOMER_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_delete_customer_findAll(zmob_delete_customerObj, credInfo ,  errorCallback)
{
    var keys = ["PK_CUSTOMER_pkKey"];
    var types = ["string"];
    var objValues = [zmob_delete_customerObj.pks.PK_CUSTOMER_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_DELETE_CUSTOMER_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_GET_CUSTOMER_ADDRESS MBO actions
 */
ZMOB_GET_CUSTOMER_ADDRESS.findAllAction = "ZMOB_GET_CUSTOMER_ADDRESS_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_get_customer_addressObj which is the instance of ZMOB_GET_CUSTOMER_ADDRESS JavaScript structure.  User needs to set a value for personalization key PK_CUSTOMER_pkKey by calling zmob_get_customer_addressObj.pks.put function, for examples zmob_get_customer_addressObj.pks.put(PK_CUSTOMER_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_get_customer_address_findAll(zmob_get_customer_addressObj, credInfo ,  errorCallback)
{
    var keys = ["PK_CUSTOMER_pkKey"];
    var types = ["string"];
    var objValues = [zmob_get_customer_addressObj.pks.PK_CUSTOMER_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_GET_CUSTOMER_ADDRESS_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_ORDER_CREATE MBO actions
 */
ZMOB_ORDER_CREATE.findAllAction = "ZMOB_ORDER_CREATE_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_order_createObj which is the instance of ZMOB_ORDER_CREATE JavaScript structure.  User needs to set values for personalization key PK_ORDER_ITEM_pkKey PK_ORDER_PARTNER_pkKey PK_ORDER_HEADER_pkKey PK_GENERAL_ORDER_TEXT_pkKey PK_QUOTATION_TEXT_pkKey PK_DELIVERY_TEXT_pkKey by calling zmob_order_createObj.pks.put function, for examples zmob_order_createObj.pks.put(PK_ORDER_ITEM_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_order_create_findAll(zmob_order_createObj, credInfo ,  errorCallback)
{
    var keys = ["PK_ORDER_ITEM_pkKey", "PK_ORDER_PARTNER_pkKey", "PK_ORDER_HEADER_pkKey", "PK_GENERAL_ORDER_TEXT_pkKey", "PK_QUOTATION_TEXT_pkKey", "PK_DELIVERY_TEXT_pkKey"];
    var types = ["string", "string", "string", "string", "string", "string"];
    var objValues = [zmob_order_createObj.pks.PK_ORDER_ITEM_pkKey, zmob_order_createObj.pks.PK_ORDER_PARTNER_pkKey, zmob_order_createObj.pks.PK_ORDER_HEADER_pkKey, zmob_order_createObj.pks.PK_GENERAL_ORDER_TEXT_pkKey, zmob_order_createObj.pks.PK_QUOTATION_TEXT_pkKey, zmob_order_createObj.pks.PK_DELIVERY_TEXT_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_ORDER_CREATE_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_ORDER_CREATE_peer1 MBO actions
 */
ZMOB_ORDER_CREATE_peer1.findAllAction = "ZMOB_ORDER_CREATE_peer1_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_order_create_peer1Obj which is the instance of ZMOB_ORDER_CREATE_peer1 JavaScript structure.  User needs to set values for personalization key PK_ORDER_ITEM_pkKey PK_ORDER_PARTNER_pkKey PK_ORDER_HEADER_pkKey PK_GENERAL_ORDER_TEXT_pkKey PK_QUOTATION_TEXT_pkKey PK_DELIVERY_TEXT_pkKey by calling zmob_order_create_peer1Obj.pks.put function, for examples zmob_order_create_peer1Obj.pks.put(PK_ORDER_ITEM_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_order_create_peer1_findAll(zmob_order_create_peer1Obj, credInfo ,  errorCallback)
{
    var keys = ["PK_ORDER_ITEM_pkKey", "PK_ORDER_PARTNER_pkKey", "PK_ORDER_HEADER_pkKey", "PK_GENERAL_ORDER_TEXT_pkKey", "PK_QUOTATION_TEXT_pkKey", "PK_DELIVERY_TEXT_pkKey"];
    var types = ["string", "string", "string", "string", "string", "string"];
    var objValues = [zmob_order_create_peer1Obj.pks.PK_ORDER_ITEM_pkKey, zmob_order_create_peer1Obj.pks.PK_ORDER_PARTNER_pkKey, zmob_order_create_peer1Obj.pks.PK_ORDER_HEADER_pkKey, zmob_order_create_peer1Obj.pks.PK_GENERAL_ORDER_TEXT_pkKey, zmob_order_create_peer1Obj.pks.PK_QUOTATION_TEXT_pkKey, zmob_order_create_peer1Obj.pks.PK_DELIVERY_TEXT_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_ORDER_CREATE_peer1_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_ORDER_PRODUCT_SEARCH MBO actions
 */
ZMOB_ORDER_PRODUCT_SEARCH.findAllAction = "ZMOB_ORDER_PRODUCT_SEARCH_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_order_product_searchObj which is the instance of ZMOB_ORDER_PRODUCT_SEARCH JavaScript structure.  User needs to set values for personalization key PK_FIND_ALT_pkKey PK_FIND_NUM_pkKey PK_MAX_HITS_pkKey PK_STRING_pkKey PK_CUSTOMER_pkKey PK_ZERO_pkKey PK_ATP_QTY_pkKey PK_PLANT_pkKey by calling zmob_order_product_searchObj.pks.put function, for examples zmob_order_product_searchObj.pks.put(PK_FIND_ALT_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_order_product_search_findAll(zmob_order_product_searchObj, credInfo ,  errorCallback)
{
    var keys = ["PK_FIND_ALT_pkKey", "PK_FIND_NUM_pkKey", "PK_MAX_HITS_pkKey", "PK_STRING_pkKey", "PK_CUSTOMER_pkKey", "PK_ZERO_pkKey", "PK_ATP_QTY_pkKey", "PK_PLANT_pkKey"];
    var types = ["string", "int", "int", "string", "string", "string", "decimal", "string"];
    var objValues = [zmob_order_product_searchObj.pks.PK_FIND_ALT_pkKey, zmob_order_product_searchObj.pks.PK_FIND_NUM_pkKey, zmob_order_product_searchObj.pks.PK_MAX_HITS_pkKey, zmob_order_product_searchObj.pks.PK_STRING_pkKey, zmob_order_product_searchObj.pks.PK_CUSTOMER_pkKey, zmob_order_product_searchObj.pks.PK_ZERO_pkKey, zmob_order_product_searchObj.pks.PK_ATP_QTY_pkKey, zmob_order_product_searchObj.pks.PK_PLANT_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_ORDER_PRODUCT_SEARCH_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_ORDER_SIMULATE MBO actions
 */
ZMOB_ORDER_SIMULATE.findAllAction = "ZMOB_ORDER_SIMULATE_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_order_simulateObj which is the instance of ZMOB_ORDER_SIMULATE JavaScript structure.  User needs to set values for personalization key PK_ORDER_ITEM_pkKey PK_ORDER_PARTNER_pkKey PK_ORDER_HEADER_pkKey by calling zmob_order_simulateObj.pks.put function, for examples zmob_order_simulateObj.pks.put(PK_ORDER_ITEM_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_order_simulate_findAll(zmob_order_simulateObj, credInfo ,  errorCallback)
{
    var keys = ["PK_ORDER_ITEM_pkKey", "PK_ORDER_PARTNER_pkKey", "PK_ORDER_HEADER_pkKey"];
    var types = ["string", "string", "string"];
    var objValues = [zmob_order_simulateObj.pks.PK_ORDER_ITEM_pkKey, zmob_order_simulateObj.pks.PK_ORDER_PARTNER_pkKey, zmob_order_simulateObj.pks.PK_ORDER_HEADER_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_ORDER_SIMULATE_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_ORDER_SIMULATE_ITEM MBO actions
 */
ZMOB_ORDER_SIMULATE_ITEM.findAllAction = "ZMOB_ORDER_SIMULATE_ITEM_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_order_simulate_itemObj which is the instance of ZMOB_ORDER_SIMULATE_ITEM JavaScript structure.  User needs to set values for personalization key PK_ORDER_ITEM_pkKey PK_ORDER_PARTNER_pkKey PK_ORDER_HEADER_pkKey by calling zmob_order_simulate_itemObj.pks.put function, for examples zmob_order_simulate_itemObj.pks.put(PK_ORDER_ITEM_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_order_simulate_item_findAll(zmob_order_simulate_itemObj, credInfo ,  errorCallback)
{
    var keys = ["PK_ORDER_ITEM_pkKey", "PK_ORDER_PARTNER_pkKey", "PK_ORDER_HEADER_pkKey"];
    var types = ["string", "string", "string"];
    var objValues = [zmob_order_simulate_itemObj.pks.PK_ORDER_ITEM_pkKey, zmob_order_simulate_itemObj.pks.PK_ORDER_PARTNER_pkKey, zmob_order_simulate_itemObj.pks.PK_ORDER_HEADER_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_ORDER_SIMULATE_ITEM_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_PREVIOUS_PURCHASES MBO actions
 */
ZMOB_PREVIOUS_PURCHASES.findAllAction = "ZMOB_PREVIOUS_PURCHASES_findAll";
ZMOB_PREVIOUS_PURCHASES.findByPrimaryKeyAction = "ZMOB_PREVIOUS_PURCHASES_findByPrimaryKey";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_previous_purchasesObj which is the instance of ZMOB_PREVIOUS_PURCHASES JavaScript structure.  User needs to set values for personalization key PK_CUSTOMER_PREV_pkKey PK_DAYS_pkKey by calling zmob_previous_purchasesObj.pks.put function, for examples zmob_previous_purchasesObj.pks.put(PK_CUSTOMER_PREV_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_previous_purchases_findAll(zmob_previous_purchasesObj, credInfo ,  errorCallback)
{
    var keys = ["PK_CUSTOMER_PREV_pkKey", "PK_DAYS_pkKey"];
    var types = ["string", "int"];
    var objValues = [zmob_previous_purchasesObj.pks.PK_CUSTOMER_PREV_pkKey, zmob_previous_purchasesObj.pks.PK_DAYS_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_PREVIOUS_PURCHASES_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_previous_purchasesObj which is the instance of ZMOB_PREVIOUS_PURCHASES JavaScript structure.  User needs to set values for personalization key PK_CUSTOMER_PREV_pkKey PK_DAYS_pkKey by calling zmob_previous_purchasesObj.pks.put function, for examples zmob_previous_purchasesObj.pks.put(PK_CUSTOMER_PREV_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_previous_purchases_findByPrimaryKey(zmob_previous_purchasesObj, credInfo ,  errorCallback)
{
    var keys = ["ZMOB_PREVIOUS_PURCHASES_findByPrimaryKey_MATNR_paramKey", "PK_CUSTOMER_PREV_pkKey", "PK_DAYS_pkKey"];
    var types = ["string", "string", "int"];
    var objValues = [zmob_previous_purchasesObj.MATNR, zmob_previous_purchasesObj.pks.PK_CUSTOMER_PREV_pkKey, zmob_previous_purchasesObj.pks.PK_DAYS_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_PREVIOUS_PURCHASES_findByPrimaryKey");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_VALIDATE_ACCOUNT MBO actions
 */
ZMOB_VALIDATE_ACCOUNT.findAllAction = "ZMOB_VALIDATE_ACCOUNT_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_validate_accountObj which is the instance of ZMOB_VALIDATE_ACCOUNT JavaScript structure.  
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_validate_account_findAll(zmob_validate_accountObj, credInfo ,  errorCallback)
{
    var keys = [];
    var types = [];
    var objValues = [];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_VALIDATE_ACCOUNT_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_VAN_CUSTOMER_DEL MBO actions
 */
ZMOB_VAN_CUSTOMER_DEL.findAllAction = "ZMOB_VAN_CUSTOMER_DEL_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_van_customer_delObj which is the instance of ZMOB_VAN_CUSTOMER_DEL JavaScript structure.  User needs to set values for personalization key PK_CUSTOMER_pkKey PK_USER_pkKey by calling zmob_van_customer_delObj.pks.put function, for examples zmob_van_customer_delObj.pks.put(PK_CUSTOMER_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_van_customer_del_findAll(zmob_van_customer_delObj, credInfo ,  errorCallback)
{
    var keys = ["PK_CUSTOMER_pkKey", "PK_USER_pkKey"];
    var types = ["string", "string"];
    var objValues = [zmob_van_customer_delObj.pks.PK_CUSTOMER_pkKey, zmob_van_customer_delObj.pks.PK_USER_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_VAN_CUSTOMER_DEL_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_VAN_CUSTOMER_LIST MBO actions
 */
ZMOB_VAN_CUSTOMER_LIST.findAllAction = "ZMOB_VAN_CUSTOMER_LIST_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_van_customer_listObj which is the instance of ZMOB_VAN_CUSTOMER_LIST JavaScript structure.  User needs to set values for personalization key PK_SALES_OFF_pkKey PK_TODAY_FLAG_pkKey PK_USER_pkKey PK_ALL_FLAG_pkKey PK_ALL_VAN_FLAG_pkKey by calling zmob_van_customer_listObj.pks.put function, for examples zmob_van_customer_listObj.pks.put(PK_SALES_OFF_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_van_customer_list_findAll(zmob_van_customer_listObj, credInfo ,  errorCallback)
{
    var keys = ["PK_SALES_OFF_pkKey", "PK_TODAY_FLAG_pkKey", "PK_USER_pkKey", "PK_ALL_FLAG_pkKey", "PK_ALL_VAN_FLAG_pkKey"];
    var types = ["string", "string", "string", "string", "string"];
    var objValues = [zmob_van_customer_listObj.pks.PK_SALES_OFF_pkKey, zmob_van_customer_listObj.pks.PK_TODAY_FLAG_pkKey, zmob_van_customer_listObj.pks.PK_USER_pkKey, zmob_van_customer_listObj.pks.PK_ALL_FLAG_pkKey, zmob_van_customer_listObj.pks.PK_ALL_VAN_FLAG_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_VAN_CUSTOMER_LIST_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_VAN_CUSTOMER_UPDATE MBO actions
 */
ZMOB_VAN_CUSTOMER_UPDATE.findAllAction = "ZMOB_VAN_CUSTOMER_UPDATE_findAll";
ZMOB_VAN_CUSTOMER_UPDATE.findByPrimaryKeyAction = "ZMOB_VAN_CUSTOMER_UPDATE_findByPrimaryKey";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_van_customer_updateObj which is the instance of ZMOB_VAN_CUSTOMER_UPDATE JavaScript structure.  User needs to set values for personalization key PK_VISIT_PERIOD_pkKey PK_WEDNESDAY_pkKey PK_CUSTOMER_pkKey PK_FRIDAY_pkKey PK_SUNDAY_pkKey PK_USER_pkKey PK_SATURDAY_pkKey PK_MONDAY_pkKey PK_THURSDAY_pkKey PK_TUESDAY_pkKey by calling zmob_van_customer_updateObj.pks.put function, for examples zmob_van_customer_updateObj.pks.put(PK_VISIT_PERIOD_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_van_customer_update_findAll(zmob_van_customer_updateObj, credInfo ,  errorCallback)
{
    var keys = ["PK_VISIT_PERIOD_pkKey", "PK_WEDNESDAY_pkKey", "PK_CUSTOMER_pkKey", "PK_FRIDAY_pkKey", "PK_SUNDAY_pkKey", "PK_USER_pkKey", "PK_SATURDAY_pkKey", "PK_MONDAY_pkKey", "PK_THURSDAY_pkKey", "PK_TUESDAY_pkKey"];
    var types = ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string"];
    var objValues = [zmob_van_customer_updateObj.pks.PK_VISIT_PERIOD_pkKey, zmob_van_customer_updateObj.pks.PK_WEDNESDAY_pkKey, zmob_van_customer_updateObj.pks.PK_CUSTOMER_pkKey, zmob_van_customer_updateObj.pks.PK_FRIDAY_pkKey, zmob_van_customer_updateObj.pks.PK_SUNDAY_pkKey, zmob_van_customer_updateObj.pks.PK_USER_pkKey, zmob_van_customer_updateObj.pks.PK_SATURDAY_pkKey, zmob_van_customer_updateObj.pks.PK_MONDAY_pkKey, zmob_van_customer_updateObj.pks.PK_THURSDAY_pkKey, zmob_van_customer_updateObj.pks.PK_TUESDAY_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_VAN_CUSTOMER_UPDATE_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_van_customer_updateObj which is the instance of ZMOB_VAN_CUSTOMER_UPDATE JavaScript structure.  User needs to set values for personalization key PK_VISIT_PERIOD_pkKey PK_WEDNESDAY_pkKey PK_CUSTOMER_pkKey PK_FRIDAY_pkKey PK_SUNDAY_pkKey PK_USER_pkKey PK_SATURDAY_pkKey PK_MONDAY_pkKey PK_THURSDAY_pkKey PK_TUESDAY_pkKey by calling zmob_van_customer_updateObj.pks.put function, for examples zmob_van_customer_updateObj.pks.put(PK_VISIT_PERIOD_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_van_customer_update_findByPrimaryKey(zmob_van_customer_updateObj, credInfo ,  errorCallback)
{
    var keys = ["ZMOB_VAN_CUSTOMER_UPDATE_findByPrimaryKey_RETURN_STATUS_paramKey", "PK_VISIT_PERIOD_pkKey", "PK_WEDNESDAY_pkKey", "PK_CUSTOMER_pkKey", "PK_FRIDAY_pkKey", "PK_SUNDAY_pkKey", "PK_USER_pkKey", "PK_SATURDAY_pkKey", "PK_MONDAY_pkKey", "PK_THURSDAY_pkKey", "PK_TUESDAY_pkKey"];
    var types = ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string", "string"];
    var objValues = [zmob_van_customer_updateObj.RETURN_STATUS, zmob_van_customer_updateObj.pks.PK_VISIT_PERIOD_pkKey, zmob_van_customer_updateObj.pks.PK_WEDNESDAY_pkKey, zmob_van_customer_updateObj.pks.PK_CUSTOMER_pkKey, zmob_van_customer_updateObj.pks.PK_FRIDAY_pkKey, zmob_van_customer_updateObj.pks.PK_SUNDAY_pkKey, zmob_van_customer_updateObj.pks.PK_USER_pkKey, zmob_van_customer_updateObj.pks.PK_SATURDAY_pkKey, zmob_van_customer_updateObj.pks.PK_MONDAY_pkKey, zmob_van_customer_updateObj.pks.PK_THURSDAY_pkKey, zmob_van_customer_updateObj.pks.PK_TUESDAY_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_VAN_CUSTOMER_UPDATE_findByPrimaryKey");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	   
    	 
/*
 * Global variables for ZMOB_VAN_PRODUCT_LIST MBO actions
 */
ZMOB_VAN_PRODUCT_LIST.findAllAction = "ZMOB_VAN_PRODUCT_LIST_findAll";

 
 
/**
 * Returns void. This is an object query onlineRequest, therefore workflow message will be sent back to user by the hybrid web container, please handle the result in the function customAfterDataReceived(incomingWorkflowMessage) defined in Custom.js.
 * Please define hwc.processDataMessage function and handle the result in the function. For instance, hwc.processDataMessage = function dataReceived( incomingWorkflowMessage, noUI, loading, fromActivationFlow, dataType) {...}
 * @param zmob_van_product_listObj which is the instance of ZMOB_VAN_PRODUCT_LIST JavaScript structure.  User needs to set a value for personalization key PK_CUSTOMER_pkKey by calling zmob_van_product_listObj.pks.put function, for examples zmob_van_product_listObj.pks.put(PK_CUSTOMER_pkKey,"yourValue") .
 * @param credInfo, credential info, by default it's empty string. User could set "supusername=username&suppassword=password", for example.
 * @param errorCallback Name of the function to be called if an online request fails.
 */    	  		
function zmob_van_product_list_findAll(zmob_van_product_listObj, credInfo ,  errorCallback)
{
    var keys = ["PK_CUSTOMER_pkKey"];
    var types = ["string"];
    var objValues = [zmob_van_product_listObj.pks.PK_CUSTOMER_pkKey];
   
    var workflowMessageToSend = new WorkflowMessage("");
	workflowMessageToSend.setHeader("");
	createMessageValues(  workflowMessageToSend.getValues(), keys, types, objValues );
	workflowMessageToSend.setRequestAction("ZMOB_VAN_PRODUCT_LIST_findAll");
	
	 hwc.doOnlineRequest_CONT( credInfo, 
				workflowMessageToSend.serializeToString(),
				workflowMessageToSend.getHasFileMessageValue(),
				 120, 
				 0, 
				"", //errorMessage
			    errorCallback, 
			    null,    // TODO: cacheKey
			    null,    // TODO: cachePolicy, 
			    null    //TODO: asynchronous,
		);
	    
}	       

/**
 * Returns workflow, message value collection.
 * @param keys, Workflow message keys
 * @param types, Workflow message type
 * @param objValues ,Workflow message values
 */   
function createMessageValues( workFlowValues, keys, types, objValues )
{
	for( var i = 0; i < keys.length; i++ )
    {
       data = new MessageValue();
       data.setKey( keys[i]);
       data.setType( convertToSUPType (types[i] ));
       if ( objValues[i] != null )
       {
           data.setValue( objValues[i])
       }else
       {
           data.setNullAttribute(true );
       }
       
       if ( objValues[i] instanceof Object ) 
       {
           continue;
       } 
       workFlowValues.add(data.getKey(), data);
    }
}


/**
 * Returns Workflow SUP Type.
 * @param theTypeAttrib, MBO's attribute type or an operation's parameter type.
 */    	
function convertToSUPType(theTypeAttrib) {
    
    if ( theTypeAttrib.toLowerCase() === "boolean"
        || theTypeAttrib.toLowerCase()=== "bool") {
        return "BOOLEAN";
    }
    else if (theTypeAttrib.toLowerCase() === "int" 
        || theTypeAttrib.toLowerCase() ==="decimal" 
        || theTypeAttrib.toLowerCase() ==="double"
          ) {
        return "NUMBER";
    }
    else if (theTypeAttrib.toLowerCase() === "datetime" 
         || theTypeAttrib.toLowerCase() === "date" ) {
        return "DATETIME";
    }
    else if (theTypeAttrib.toLowerCase() === "datetime-local" ) {
        return "DATETIME";
    }
    else if (theTypeAttrib.toLowerCase() === "time" 
       || theTypeAttrib.toLowerCase() === "string") {
        return "TEXT";
    }else {
        return theTypeAttrib.toUpperCase();
    }
}

