Ext.define('PaperVan.controller.Controller', {
	extend : 'Ext.app.Controller',

	config : {
		profile : Ext.os.deviceType.toLowerCase(),
		refs : {
			mainPanel : 'mainPanel',
			customerList : 'customerList',
			productSearch : 'productSearch',
			productTab : 'productTab',
			productResultList : 'productResultList',
			productDesc : 'productDesc',
			cartList : 'cartList',
			cartTab : 'cartTab',
			customerTab : 'customerTab',
			cartOrder : 'cartOrder',
			previousPurchaseList : 'previousPurchaseList',
			previousPurchaseTab : 'previousPurchaseTab',
			orderMessageList : 'orderMessageList',
			orderItemList : 'orderItemList',
			customerMain : 'customerMain',
			activityCreation : 'activityCreation',
			activityUpdate : 'activityUpdate',
			disputeCreation : 'disputeCreation',
			customerRecentActivity : 'customerRecentActivity',
			customerContact : 'customerContact',
			customerContactChange : 'customerContactChange',
			customerDispute : 'customerDispute',
			customerDetailOption : 'customerDetailOption',
			customerCreate : 'customerCreate',
			customerChange : 'customerChange',
			vanProductTab : 'vanProductTab',
			vanProductResultList : 'vanProductResultList',
			vanScheduleUpdate : 'vanScheduleUpdate',
			productDescMain : 'productDescMain',
			customerContainer : 'customerContainer',
			vanReplUpdate : 'vanReplUpdate',
			vanProductOption : 'vanProductOption',
		},
		control : {
			'vanReplUpdate numberfield[itemId=replMinField]' : {
				change : 'onReplMinFieldChange'
			},

			'vanReplUpdate numberfield[itemId=replMaxField]' : {
				change : 'onReplMaxFieldChange'
			},

			'vanReplUpdate spinnerfield[itemId=replMinSpinner]' : {
				change : 'onReplMinSpinnerChange'
			},

			'vanReplUpdate spinnerfield[itemId=replMaxSpinner]' : {
				change : 'onReplMaxSpinnerChange'
			},

			'vanReplUpdate button[itemId=vanReplUpdateButton]' : {
				tap : 'onVanReplUpdateTap'
			},

			'vanReplUpdate button[itemId=vanReplDeleteButton]' : {
				tap : 'onVanReplDeleteTap'
			},

			'customerContainer selectfield[itemId=vanScheduleDaySelect]' : {
				change : 'onVanScheduleDayChange'
			},

			productDescMain : {
				activate : 'onProductDescMainActivate'
			},

			'vanProductTab button[itemId=vanAddToCartButton]' : {
				tap : 'onAddToCartTap'
			},

			'vanProductTab button[itemId=vanOptionButton]' : {
				tap : 'onVanOptionButtonTap'
			},

			vanProductTab : {
				back : 'onVanProductTabBack',
				pop : 'onVanProductTabBack',
			},

			'vanProductOption button[itemId=vanRefreshButton]' : {
				tap : 'onVanRefreshButtonTap',
			},
			'vanProductOption button[itemId=receiptInbStoButton]' : {
				tap : 'onReceiptInbStoButtonTap',
			},
			'vanProductOption button[itemId=replenishVanStkButton]' : {
				tap : 'onReplenishVanStkButtonTap',
			},

			'vanProductTab button[itemId=vanSortButton]' : {
				tap : 'onSortTap'
			},

			vanScheduleUpdate : {
				initialize : 'onVanScheduleUpdateInit',
			},

			customerCreate : {
				initialize : 'onCustomerCreateInit',
			},
			'activityCreation textareafield[itemId=activityCreationTextArea]' : {
				focus : 'onTextAreaFocus',
				blur : 'onTextAreaBlur',
			},

			'activityUpdate textareafield[itemId=updateActivityTextArea]' : {
				focus : 'onTextAreaFocus',
				blur : 'onTextAreaBlur',
			},

			'disputeCreation textareafield[itemId=disputeCreationTextArea]' : {
				focus : 'onTextAreaFocus',
				blur : 'onTextAreaBlur',
			},

			'customerCreate button[itemId=customerCreateButton]' : {
				tap : 'onCreateCustomerSubmit',
			},

			'customerChange button[itemId=customerChangeButton]' : {
				tap : 'onChangeCustomerSubmit',
			},

			customerDispute : {
				initialize : 'onCustomerDisputeInit',
			},

			customerDetailOption : {
				show : 'onCustomerDetailOptionShow',
			},

			'customerContactCreate button[itemId=contactCreateButton]' : {
				tap : 'onCreateContactSubmit',
			},

			'customerContactChange button[itemId=contactChangeButton]' : {
				tap : 'onChangeContactSubmit',
			},

			'activityCreation button[itemId=activityCreationButton]' : {
				tap : 'onActivitySubmit',
			},

			'activityCreation selectfield[itemId=activityTypeSelect]' : {
				change : 'onActivityTypeChange',
			},

			'activityUpdate button[itemId=updateActivityButton]' : {
				tap : 'onActivityUpdate',
			},

			'activityUpdate selectfield[itemId=updateActivityTypeSelect]' : {
				change : 'onUpdateActivityTypeChange',
			},

			activityCreation : {
				initialize : 'onActivityCreationInit',
			},

			activityUpdate : {
				initialize : 'onActivityUpdateInit',
			},

			disputeCreation : {
				initialize : 'onDisputeCreationInit',
			},

			'disputeCreation button[itemId=disputeCreationButton]' : {
				tap : 'onDisputeCreationSubmit',
			},

			customerContact : {
				itemtap : 'onContactTab',
			},

			customerRecentActivity : {
				itemtap : 'onRecentActTab',
			},

			customerTab : {
				back : 'onCustomerTabBack',
				pop : 'onCustomerTabBack',
			},

			customerMain : {
				activate : 'onCustomerMainActivate'
			},

			orderConfirmation : {
				activate : 'onOrderConfirmationActivate'
			},
			'mainPanel' : {
				activate : 'onActivate',
				activeitemchange : 'onChangeTab'
			},
			'mainPanel searchfield[itemId=custSearch]' : {
				clearicontap : 'onClearSearch',
				//	keyup : 'onSearchKeyUp'
			},
			'mainPanel searchfield[itemId=vanProductSearch]' : {
				clearicontap : 'onClearVanSearch',
				//	keyup : 'onVanSearchKeyUp'
			},
			customerList : {
				select : 'onCustomerListSelect',
				itemdoubletap : 'onCustomerListDoubleTap',
				initialize : 'onCustListIniialize'
			},

			productSearch : {
				activate : 'onProductActivate'
			},

			'productSearch numberfield[itemId=atpQty]' : {
				blur : 'onBlur'
			},

			'productSearch button[itemId=productSearchButton]' : {
				tap : 'onSearchTap'
			},

			productDesc : {
				activate : 'onProductDescActivate'
			},

			productResultList : {
				activate : 'onProductResultActivate',
				select : 'onProductResultListSelect'
			},

			vanProductResultList : {
				activate : 'onVanProductResultActivate',
				select : 'onVanProductResultListSelect'
			},

			'productTab button[itemId=productSortButton]' : {
				tap : 'onSortTap'
			},

			'productTab button[itemId=addToCartButton]' : {
				tap : 'onAddToCartTap'
			},

			cartList : {
				// itemswipe : 'onCartItemSwipe',
				itemdoubletap : 'onCartItemDoubleTap',
				itemsingletap : 'onCartListSelect',
				activate : 'onCartListActivate',
				painted : 'onCartListActivate'
			},

			'cartTab button[itemId=deleteAllButton]' : {
				tap : 'onDeleteAllTap'
			},

			'cartTab button[itemId=checkoutButton]' : {
				tap : 'onOrderConfirmation'
			},

			'cartTab selectfield[itemId=deliveringPlant]' : {
				change : 'onDeliveringPlantChange'
			},

			cartTab : {
				show : 'onCartTabShow'
			},

			cartOrder : {
				back : 'onCartOrderBack'
			},

			'cartOrder button[itemId=doneButton]' : {
				tap : 'onUpdateItemTap'
			},

			'cartOrder button[itemId=createOrderButton]' : {
				tap : 'onCreateOrderButtonTap'
			},

			'cartOrder button[itemId=signatureConfirmButton]' : {
				tap : 'onSignatureConfirmButtonTap'
			},

			'cartOrderDetail selectfield[itemId=orderType]' : {
				change : 'onOrderTypeChange'
			},

			'previousPurchaseTab selectfield[itemId=daysSelectField]' : {
				change : 'onDaysSelected'
			},
			previousPurchaseList : {
				activate : 'onPreviousPurchaseActivate',
				select : 'onPreviousPurchaseListSelect'

			},

			'previousPurchaseTab button[itemId=previousPurchaseSortButton]' : {
				tap : 'onSortTap'
			},

			'sortPicker' : {
				// change : 'onSortChange',
				pick : 'onSortChange'
			},

			'previousPurchaseTab button[itemId=preAddToCartButton]' : {
				tap : 'onAddToCartTap'
			},

			previousPurchaseTab : {
				back : 'onPreviousPruchaseBack'
			},

			'credentialScreen button[itemId=loginButton]' : {
				tap : 'onLoginButtonTap'
			},

			// 'credentialScreen passwordfield[itemId=passwordCredential]' : {
			// change : 'onLoginButtonTap'
			// },

			// 'customerTab button[itemId=regionalCustomerButton]' : {
			// tap : 'onRegionalCustomerButtonTap'
			// },
			'customerTab button[itemId=camera]' : {
				tap : 'onCamera'
			},
			'customerTab button[itemId=customerContainerOptionButton]' : {
				tap : 'onCustomerContainerOptionButtonTap'
			},
			'customerTab button[itemId=customerDetailOptionButton]' : {
				tap : 'onCustomerDetailOptionButtonTap'
			},
			'customerDetailOption button[itemId=createActivityOption]' : {
				tap : 'onCreateActivityButtonTap'
			},
			'customerDetailOption button[itemId=createContactOption]' : {
				tap : 'onCreateContactOptionTap'
			},
			'customerTab button[itemId=customerDetailButton]' : {
				tap : 'onCustomerDetailButtonTap'
			},

			'customerDetailOption button[itemId=createDisputeOption]' : {
				tap : 'onCreateDisputeButtonTap'
			},
			'customerContainerOption selectfield[itemId=refreshCustomerOptionSelect]' : {
				change : 'onRefreshCustomerOptionSelectChange',
			},
			'customerContainerOption button[itemId=createCustomerButton]' : {
				tap : 'onCreateCustomerButtonTap',
			},
			'customerDetailOption button[itemId=changeCustomerOption]' : {
				tap : 'onChangeCustomerButtonTap',
			},
			'customerDetailOption button[itemId=deleteCustomerOption]' : {
				tap : 'onDeleteCustomerOptionTap',
			},
			'customerContainerOption button[itemId=updateVanScheduleButton]' : {
				tap : 'onUpdateVanScheduleButtonTap',
			},
			'customerTab button[itemId=deleteVanScheduleButton]' : {
				tap : 'onVanScheduleDeleteButtonTap'
			},
			'vanScheduleUpdate button[itemId=vanScheduleUpdateButton]' : {
				tap : 'onVanScheduleUpdateButtonTap'
			}
		}
	},

	onVanReplUpdateTap : function(button) {
		var vanReplData;
		var relativeFields = button.getParent().getItems().items;
		var minField = relativeFields.findAll({_itemId:'replMinField'})[0];
		var maxField = relativeFields.findAll({_itemId:'replMaxField'})[0];
		var minSpinner = relativeFields.findAll({_itemId:'replMinSpinner'})[0];
		var maxSpinner = relativeFields.findAll({_itemId:'replMaxSpinner'})[0];
		var minStk;
		var maxStk;

		// determine current tab
		var vanReplUpdateItemId = button.getParent().getParent().getItemId();
		switch (vanReplUpdateItemId) {
			case 'vanVanReplUpdate':
				vanReplData = vanVanReplData;
				break;
			case 'searchVanReplUpdate':
				vanReplData = searchVanReplData;
				break;
			case 'previousVanReplUpdate':
				vanReplData = previousVanReplData;
				break;
		};

		if (vanReplData.delQty == 0) {
			minStk = minField.getValue();
			maxStk = maxField.getValue();
		} else {
			minStk = minSpinner.getValue();
			maxStk = maxSpinner.getValue();
		}

		updateVanReplInfo(vanReplData.prodNo, vanReplData.plant, vanReplData.sloc, minStk, maxStk);
	},

	onVanReplDeleteTap : function(button) {
		var vanReplData;
		var minStk = 0;
		var maxStk = 0;

		// determine current tab
		var vanReplUpdateItemId = button.getParent().getParent().getItemId();
		switch (vanReplUpdateItemId) {
			case 'vanVanReplUpdate':
				vanReplData = vanVanReplData;
				break;
			case 'searchVanReplUpdate':
				vanReplData = searchVanReplData;
				break;
			case 'previousVanReplUpdate':
				vanReplData = previousVanReplData;
				break;
		};

		updateVanReplInfo(vanReplData.prodNo, vanReplData.plant, vanReplData.sloc, minStk, maxStk);

	},

	onReplMinFieldChange : function(field, newValue) {
		var relativeFields = field.getParent().getItems().items;
		var maxField = relativeFields.findAll({_itemId:'replMaxField'})[0];
		if (newValue < 0) {
			field.setValue(0);
		} else if (maxField.getValue() < newValue) {
			maxField.setValue(newValue);
		}
	},

	onReplMaxFieldChange : function(field, newValue) {
		var relativeFields = field.getParent().getItems().items;
		var minField = relativeFields.findAll({_itemId:'replMinField'})[0];
		if (newValue < 0) {
			field.setValue(0);
		} else if (minField.getValue() > newValue) {
			minField.setValue(newValue);
		}

	},

	onReplMinSpinnerChange : function(field, newValue) {
		var deliveryQty;
		var relativeFields = field.getParent().getItems().items;
		switch (currentTab) {
			case 'vanProductTab':
				deliveryQty = vanVanReplData.delQty;
				break;
			case 'productTab':
				deliveryQty = searchVanReplData.delQty;
				break;
			case 'previousPurchaseTab':
				deliveryQty = preVanReplData.delQty;
				break;
		}
		var maxSpinner = relativeFields.findAll({_itemId:'replMaxSpinner'})[0];
		if (newValue < 0) {
			field.setValue(0);
		} else if (maxSpinner.getValue() <= newValue) {
			var value = parseFloat(newValue) + deliveryQty;
			maxSpinner.setValue(value);
		}
	},

	onReplMaxSpinnerChange : function(field, newValue) {
		var deliveryQty;
		var relativeFields = field.getParent().getItems().items;
		switch (currentTab) {
			case 'vanProductTab':
				deliveryQty = vanVanReplData.delQty;
				break;
			case 'productTab':
				deliveryQty = searchVanReplData.delQty;
				break;
			case 'previousPurchaseTab':
				deliveryQty = preVanReplData.delQty;
				break;
		}
		var minSpinner = relativeFields.findAll({_itemId:'replMinSpinner'})[0];
		if (newValue < 0) {
			field.setValue(0);
		} else if (minSpinner.getValue() >= newValue) {
			var value = parseFloat(newValue) - deliveryQty;
			minSpinner.setValue(value);
		}
	},

	onCamera : function(button) {
		// if(Ext.os.is)
		if (Ext.os.is.WindowsPhone) {
			window.cordova.plugins.barcodeScanner.scan(readBarcodeSuccess, readBarcodeFail);
			Ext.Function.defer(function() {
				window.cordova.plugins.barcodeScanner.scan(readBarcodeSuccess, readBarcodeFail);
			}, 500);
		} else {
			cordova.plugins.barcodeScanner.scan(readBarcodeSuccess, readBarcodeFail);
		}
	},

	onVanScheduleDayChange : function(select, day) {
		filterCustomerByDay(day);
	},

	onVanScheduleUpdateButtonTap : function(button) {
		var visitPeriod = Ext.ComponentQuery.query('#vanRoutineSelect')[0].getValue();
		var monday = (Ext.ComponentQuery.query('#vanRoutineMon')[0].getChecked() == true ? Ext.ComponentQuery.query('#vanRoutineMon')[0].getValue() : "");
		var tuesday = (Ext.ComponentQuery.query('#vanRoutineTue')[0].getChecked() == true ? Ext.ComponentQuery.query('#vanRoutineTue')[0].getValue() : "");
		var wednesday = (Ext.ComponentQuery.query('#vanRoutineWed')[0].getChecked() == true ? Ext.ComponentQuery.query('#vanRoutineWed')[0].getValue() : "");
		var thursday = (Ext.ComponentQuery.query('#vanRoutineThu')[0].getChecked() == true ? Ext.ComponentQuery.query('#vanRoutineThu')[0].getValue() : "");
		var friday = (Ext.ComponentQuery.query('#vanRoutineFri')[0].getChecked() == true ? Ext.ComponentQuery.query('#vanRoutineFri')[0].getValue() : "");
		var saturday = (Ext.ComponentQuery.query('#vanRoutineSat')[0].getChecked() == true ? Ext.ComponentQuery.query('#vanRoutineSat')[0].getValue() : "");
		var sunday = (Ext.ComponentQuery.query('#vanRoutineSun')[0].getChecked() == true ? Ext.ComponentQuery.query('#vanRoutineSun')[0].getValue() : "");

		tempChangeCustomer.custNo = selectedCust;
		tempChangeCustomer.visitPeriod = visitPeriod;
		tempChangeCustomer.monday = monday;
		tempChangeCustomer.tuesday = tuesday;
		tempChangeCustomer.wednesday = wednesday;
		tempChangeCustomer.thursday = thursday;
		tempChangeCustomer.friday = friday;
		tempChangeCustomer.saturday = saturday;
		tempChangeCustomer.sunday = sunday;

		changeVanSchedule(visitPeriod, monday, tuesday, wednesday, thursday, friday, saturday, sunday);
	},
	onVanScheduleDeleteButtonTap : function(button) {
		deleteVanSchedule();
	},
	onReceiptInbStoButtonTap : function(button) {
		vanProductOption.hide();
		Ext.toast('Receipting Inbound STOs', 3000);
		// get open inbound
		getOpenInboundDelivery(userPlant, userStorageLoc);

	},
	onReplenishVanStkButtonTap : function(button) {
		vanProductOption.hide();
		createVanRepl(userPlant, userStorageLoc);
	},
	onVanRefreshButtonTap : function(button) {
		vanProductOption.hide();
		Ext.toast('Updating my stock', 3000);
		getVanProduct();
	},
	onTextAreaBlur : function(textArea) {
		textArea.parent.parent.getScrollable().getScroller().setDisabled(false);

	},
	onTextAreaFocus : function(textArea) {
		textArea.parent.parent.getScrollable().getScroller().setDisabled(true);
	},
	onDeleteCustomerOptionTap : function(button) {
		customerDetailOption.hide();
		Ext.Msg.confirm("Confirm", "Do you want to delete a customer?", function(buttonId) {
			if (buttonId === 'yes') {
				deleteCustomer();
			}
		}, this // scope of the controller
		);
	},
	onRefreshCustomerOptionSelectChange : function(select, newValue, oldValue) {
		if (newValue != '') {
			var salesOffice;
			var todayCustomerFlag;
			var allCustomerFlag;
			var allVanCustomerFlag;
			if (newValue == MY_CUSTOMER_FLAG) {
				salesOffice = '';
				todayCustomerFlag = '';
				allCustomerFlag = 'X';
				allVanCustomerFlag = '';
			} else if (newValue == TODAY_CUSTOMER_FLAG) {
				salesOffice = '';
				todayCustomerFlag = 'X';
				allCustomerFlag = '';
				allVanCustomerFlag = '';
			} else if (newValue == VAN_CUSTOMER_FLAG) {
				salesOffice = '';
				todayCustomerFlag = '';
				allCustomerFlag = '';
				allVanCustomerFlag = 'X';
			} else {
				salesOffice = newValue;
				todayCustomerFlag = '';
				allCustomerFlag = '';
				allVanCustomerFlag = '';
			}

			customerContainerOption.setHidden(true);
			selectedSalesOffice = salesOffice;
			if (salesOffice == '') {
				Ext.toast('Retriving customers...', 3000);
				getCustomerList(salesOffice, todayCustomerFlag, allCustomerFlag, allVanCustomerFlag);
			} else {
				var custSearchField = Ext.ComponentQuery.query('#custSearch')[0];

				var queryString = Ext.ComponentQuery.query('#custSearch')[0].getValue();
				if (queryString.length >= MIN_CHAR_SEARCH) {
					searchString = queryString;
					getCustomerList(selectedSalesOffice, '', '', '');
					searchString = '';
				} else {
					// move curdor to search string
					Ext.defer(function() {
						custSearchField.focus();
					}, 300);
				}
				// Ext.toast('Please type at least 3 letters in customer search field', 2000);
			}
		}
	},
	onCustomerDetailOptionShow : function(option) {
		//console.log('detail option show');
		if (selectedCustRecord.accountGroup == 'Z001') {
			Ext.ComponentQuery.query('#deleteCustomerOption')[0].setHidden(true);
			Ext.ComponentQuery.query('#changeCustomerOption')[0].setHidden(true);
		} else {
			Ext.ComponentQuery.query('#deleteCustomerOption')[0].setHidden(false);
			Ext.ComponentQuery.query('#changeCustomerOption')[0].setHidden(false);
		}
	},
	onVanOptionButtonTap : function(button) {
		vanProductOption.show();
	},
	onCustomerContainerOptionButtonTap : function(button) {
		customerContainerOption.show();
	},
	onCustomerDetailOptionButtonTap : function(button) {
		customerDetailOption.show();
	},
	onCustomerDisputeInit : function(list) {
		updateDisputeStore();
	},
	onActivityTypeChange : function(select, newValue, oldValue) {
		// automatically update reason
		var reason;
		var salesOpp = ACTIVITY_TYPE.findAll({ text: 'Sales Opportunity' })[0].value;
		var reasonSelect = Ext.ComponentQuery.query('#activityReasonSelect')[0];
		// when activity type is sales opportunity
		if (newValue == salesOpp) {
			reason = ACTIVITY_REASON.findAll({ text: 'Annual Reports' })[0].value;
			// unhide opportunity related fields
			Ext.ComponentQuery.query('#volOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#qtyOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#amountOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#salesDocNo')[0].setHidden(false);
		} else {
			reason = ACTIVITY_REASON.findAll({ text: 'Regular Sales Call' })[0].value;
			// hide opportunity related fields
			Ext.ComponentQuery.query('#volOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#qtyOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#amountOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#salesDocNo')[0].setHidden(true);
		}
		reasonSelect.setValue(reason);
	},
	onUpdateActivityTypeChange : function(select, newValue, oldValue) {
		// automatically update reason
		var reason;
		var salesOpp = ACTIVITY_TYPE.findAll({ text: 'Sales Opportunity' })[0].value;
		var reasonSelect = Ext.ComponentQuery.query('#updateActivityReasonSelect')[0];
		// when activity type is sales opportunity
		if (newValue == salesOpp) {
			reason = ACTIVITY_REASON.findAll({ text: 'Annual Reports' })[0].value;
			// unhide opportunity related fields
			Ext.ComponentQuery.query('#updateVolOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#updateQtyOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#updateAmountOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#updateSalesDocNo')[0].setHidden(false);
		} else {
			reason = ACTIVITY_REASON.findAll({ text: 'Regular Sales Call' })[0].value;
			// hide opportunity related fields
			Ext.ComponentQuery.query('#updateVolOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#updateQtyOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#updateAmountOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#updateSalesDocNo')[0].setHidden(true);
		}
		reasonSelect.setValue(reason);
	},
	onActivityCreationInit : function() {
		// update contact select field in activity creation screens
		var availableContactField = Ext.ComponentQuery.query('#availableContactSelect')[0];
		availableContactField.setOptions(availableContact);
		availableContactField.setReadOnly(isContactReadOnly);

		// update activity subtype
		var activitySubTypeSelect = Ext.ComponentQuery.query('#opportunityTypeSelect')[0];
		activitySubTypeSelect.setOptions(activitySubTypeList);
	},

	onActivityUpdateInit : function() {
		// update contact select field in activity creation screens
		var availableContactField = Ext.ComponentQuery.query('#updateAvailableContactSelect')[0];
		availableContactField.setOptions(availableContact);
		availableContactField.setReadOnly(isContactReadOnly);

		// update activity subtype
		var activitySubTypeSelect = Ext.ComponentQuery.query('#updateOpportunityTypeSelect')[0];
		activitySubTypeSelect.setOptions(activitySubTypeList);
	},

	onDisputeCreationInit : function() {
		// update contact select field in dispute creation screens
		var availableDisputeField = Ext.ComponentQuery.query('#availableDisputeSelect')[0];
		availableDisputeField.setOptions(availableContact);
		availableDisputeField.setReadOnly(isContactReadOnly);
	},
	onUpdateVanScheduleButtonTap : function(button) {
		console.log('onUpdateVanScheduleButton');

		if (selectedCust != null) {
			customerContainerOption.hide();
			var customerTab = Ext.ComponentQuery.query('customerTab')[0];

			customerTab.push({
				xtype : 'vanScheduleUpdate',
			});

			//update van schedule screen
			if (selectedCustRecord.visitPeriod != '') {
				Ext.ComponentQuery.query('#vanRoutineSelect')[0].setValue(selectedCustRecord.visitPeriod);
			} else {
				Ext.ComponentQuery.query('#vanRoutineSelect')[0].setValue('W');
			}
			if (selectedCustRecord.monday == 'X') {
				Ext.ComponentQuery.query('#vanRoutineMon')[0].setChecked(true);
			} else {
				Ext.ComponentQuery.query('#vanRoutineMon')[0].setChecked(false);
			}
			if (selectedCustRecord.tuesday == 'X') {
				Ext.ComponentQuery.query('#vanRoutineTue')[0].setChecked(true);
			} else {
				Ext.ComponentQuery.query('#vanRoutineTue')[0].setChecked(false);
			}
			if (selectedCustRecord.wednesday == 'X') {
				Ext.ComponentQuery.query('#vanRoutineWed')[0].setChecked(true);
			} else {
				Ext.ComponentQuery.query('#vanRoutineWed')[0].setChecked(false);
			}
			if (selectedCustRecord.thursday == 'X') {
				Ext.ComponentQuery.query('#vanRoutineThu')[0].setChecked(true);
			} else {
				Ext.ComponentQuery.query('#vanRoutineThu')[0].setChecked(false);
			}
			if (selectedCustRecord.friday == 'X') {
				Ext.ComponentQuery.query('#vanRoutineFri')[0].setChecked(true);
			} else {
				Ext.ComponentQuery.query('#vanRoutineFri')[0].setChecked(false);
			}
			if (selectedCustRecord.saturday == 'X') {
				Ext.ComponentQuery.query('#vanRoutineSat')[0].setChecked(true);
			} else {
				Ext.ComponentQuery.query('#vanRoutineSat')[0].setChecked(false);
			}
			if (selectedCustRecord.sunday == 'X') {
				Ext.ComponentQuery.query('#vanRoutineSun')[0].setChecked(true);
			} else {
				Ext.ComponentQuery.query('#vanRoutineSun')[0].setChecked(false);
			}

			var button = Ext.ComponentQuery.query('#customerContainerOptionButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#customerDetailButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#deleteVanScheduleButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
		} else {
			Ext.Msg.alert('Alert', 'Please select customer before proceeding', function() {
			});
		}

	},
	onChangeCustomerButtonTap : function(button) {

		customerDetailOption.hide();
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'customerChange',
		});

		// update customer change screen
		Ext.ComponentQuery.query('#customerChName1')[0].setValue(selectedCustAddr.name1);
		Ext.ComponentQuery.query('#customerChName2')[0].setValue(selectedCustAddr.name2);
		Ext.ComponentQuery.query('#customerChStreetNumber')[0].setValue(selectedCustAddr.street);
		Ext.ComponentQuery.query('#customerChSuburb')[0].setValue(selectedCustAddr.city);
		Ext.ComponentQuery.query('#customerChPostcode')[0].setValue(selectedCustAddr.postcode);
		Ext.ComponentQuery.query('#customerChRegion')[0].setValue(selectedCustAddr.region);
		Ext.ComponentQuery.query('#customerChEmail')[0].setValue(selectedCustAddr.email);
		Ext.ComponentQuery.query('#customerChTelephone')[0].setValue(selectedCustAddr.tel);
		Ext.ComponentQuery.query('#customerChFax')[0].setValue(selectedCustAddr.fax);

		var button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

	},
	onCreateCustomerButtonTap : function(button) {
		customerContainerOption.hide();
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];
		customerTab.push({
			xtype : 'customerCreate',
		});
	},
	onCreateDisputeButtonTap : function(button) {
		customerDetailOption.hide();
		var title = 'Create Dispute Case';
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'disputeCreation',
			title : title,
		});

		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},
	onCreateContactOptionTap : function(button) {
		customerDetailOption.hide();
		var title = 'Create Contact';
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'customerContactCreate',
			title : title,
		});

		var button;
		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},
	onCreateActivityButtonTap : function(button) {
		customerDetailOption.hide();
		var title = 'Create Activity';
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'activityCreation',
			title : title,
		});

		var button;
		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},
	onContactTab : function(list, index, target, record, event) {
		console.log('contact tab');
		if (event.target.className == 'hold' || event.target.className == 'cont_phone') {
			event.stopEvent();
		} else if (event.target.className == 'contact_edit') {
			var title = 'Change ' + record.getData().contName;
			var customerTab = Ext.ComponentQuery.query('customerTab')[0];

			customerTab.push({
				xtype : 'customerContactChange',
				title : title,
			});

			Ext.ComponentQuery.query('#contactChFirstText')[0].setValue(record.getData().firstName);
			Ext.ComponentQuery.query('#contactChLastText')[0].setValue(record.getData().lastName);
			Ext.ComponentQuery.query('#contactChTel')[0].setValue(record.getData().phone);
			Ext.ComponentQuery.query('#contactChEmail')[0].setValue(record.getData().email);
			Ext.ComponentQuery.query('#contactChTitle')[0].setValue(record.getData().title);
			Ext.ComponentQuery.query('#contactChDepartment')[0].setValue(record.getData().department);
			Ext.ComponentQuery.query('#contactChFunction')[0].setValue(record.getData().functions);

			selectedContact = record.getData().contNo;

			var button = Ext.ComponentQuery.query('#createActivityButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#createDisputeButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#customerDetailOptionButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
		} else if (event.target.className == 'contact_delete') {
			// get selected contact
			selectedContact = record.getData().contNo;
			Ext.Msg.confirm("Confirm", "Do you want to delete a contact?", function(buttonId) {
				if (buttonId === 'yes') {
					deleteContact();
				}
			}, this // scope of the controller
			);
		}
	},

	onRecentActTab : function(list, index, target, record) {
		var data = record.getData();
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];
		var titleText = 'Act ' + data.actNo;

		// setup selectedSalesAct value
		selectedSalesAct = data.actNo;

		customerTab.push({
			xtype : 'activityUpdate',
			title : titleText
		});

		// dateFormat(actDate, 'yyyymmdd');
		var fromDate = new Date(convertSAPDateToJSDate(data.fromDate));
		Ext.ComponentQuery.query('#updateActivityDate')[0].setValue(fromDate);
		Ext.ComponentQuery.query('#updateAvailableContactSelect')[0].setValue(data.contNo);
		Ext.ComponentQuery.query('#updateActivityTypeSelect')[0].setValue(data.actTypeKey);
		Ext.ComponentQuery.query('#updateActivityReasonSelect')[0].setValue(data.reason);
		Ext.ComponentQuery.query('#updateActivityOutcomeSelect')[0].setValue(data.outcome);
		Ext.ComponentQuery.query('#updateOpportunityTypeSelect')[0].setValue(data.oppType);
		Ext.ComponentQuery.query('#updateVolOpportunity')[0].setValue(data.volume);
		Ext.ComponentQuery.query('#updateQtyOpportunity')[0].setValue(data.quantity);
		Ext.ComponentQuery.query('#updateAmountOpportunity')[0].setValue(data.amount);
		Ext.ComponentQuery.query('#updateSalesDocNo')[0].setValue(data.salesDoc);
		Ext.ComponentQuery.query('#updateActivityTextArea')[0].setValue(data.text);

		var button = Ext.ComponentQuery.query('#createActivityButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#createDisputeButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},

	onDisputeCreationSubmit : function(button) {
		var title = Ext.ComponentQuery.query('#disputeTitle')[0].getValue();
		var category = Ext.ComponentQuery.query('#disputeTypeSelect')[0].getValue();
		var contact = Ext.ComponentQuery.query('#availableDisputeSelect')[0].getValue();
		var referenceDoc = Ext.ComponentQuery.query('#disputeRefDoc')[0].getValue().trim();
		var claimAmount = Ext.ComponentQuery.query('#disputeClaimAmount')[0].getValue();
		var disputeText = Ext.ComponentQuery.query('#disputeCreationTextArea')[0].getValue().trim();

		if (disputeText.length > 0) {
			// save activity data into memory to be added into activityData later
			tempDispute = {
				title : title,
				status : 'New',
				referenceDoc : referenceDoc,
				createdBy : userId,
				responsible : userId,
				type : "Dispute Cases",
			};
			Ext.Msg.confirm("Confirm", "Do you want to submit a dispute case?", function(buttonId) {
				if (buttonId === 'yes') {
					createDispute(title, category, contact, referenceDoc, claimAmount, disputeText);
				}
			}, this // scope of the controller
			);
		} else {
			Ext.Msg.alert('Alert', 'Please enter text before submit a case.', function() {
			});
		}
	},
	onActivitySubmit : function(button) {
		var actDate = Ext.ComponentQuery.query('#activityDate')[0].getValue();
		var formattedDate = dateFormat(actDate, 'yyyymmdd');
		var selectedContact = Ext.ComponentQuery.query('#availableContactSelect')[0].getValue();
		var actText = Ext.ComponentQuery.query('#activityCreationTextArea')[0].getValue().trim();
		var actType = Ext.ComponentQuery.query('#activityTypeSelect')[0].getValue();
		var actTypeText = Ext.ComponentQuery.query('#activityTypeSelect')[0].getComponent().getValue();
		var actReason = Ext.ComponentQuery.query('#activityReasonSelect')[0].getValue();
		var actOutcome = Ext.ComponentQuery.query('#activityOutcomeSelect')[0].getValue();
		var actOppType = Ext.ComponentQuery.query('#opportunityTypeSelect')[0].getValue();
		var actVol = Ext.ComponentQuery.query('#volOpportunity')[0].getValue();
		var actQty = Ext.ComponentQuery.query('#qtyOpportunity')[0].getValue();
		var actAmount = Ext.ComponentQuery.query('#amountOpportunity')[0].getValue();
		var actSalesDoc = Ext.ComponentQuery.query('#salesDocNo')[0].getValue();
		if (actText.length > 0) {
			// save activity data into memory to be added into activityData later
			tempActivity = {
				actType : actTypeText,
				contName : Ext.ComponentQuery.query('#availableContactSelect')[0].getComponent().getValue(),
				contNo : selectedContact,
				createdBy : userId,
				fromDate : dateFormat(actDate, 'yyyymmdd'),
				text : actText,
				toDate : dateFormat(actDate, 'yyyymmdd'),
				type : "Recent Activity",
			};

			Ext.Msg.confirm("Confirm", "Do you want to submit a sales activity?", function(buttonId) {
				if (buttonId === 'yes') {
					createSalesActivity(formattedDate, selectedContact, actText, actType, actReason, actOutcome, actVol, actQty, actAmount, actSalesDoc, actOppType);
				}
			}, this // scope of the controller
			);
		} else {
			Ext.Msg.alert('Alert', 'Please enter text before submit an activity.', function() {
			});
		}
	},

	onActivityUpdate : function(button) {
		var actDate = Ext.ComponentQuery.query('#updateActivityDate')[0].getValue();
		var formattedDate = dateFormat(actDate, 'yyyymmdd');
		var selectedContact = Ext.ComponentQuery.query('#updateAvailableContactSelect')[0].getValue();
		var actText = Ext.ComponentQuery.query('#updateActivityTextArea')[0].getValue().trim();
		var actType = Ext.ComponentQuery.query('#updateActivityTypeSelect')[0].getValue();
		var actTypeText = Ext.ComponentQuery.query('#updateActivityTypeSelect')[0].getComponent().getValue();
		var actReason = Ext.ComponentQuery.query('#updateActivityReasonSelect')[0].getValue();
		var actOutcome = Ext.ComponentQuery.query('#updateActivityOutcomeSelect')[0].getValue();
		var actOppType = Ext.ComponentQuery.query('#updateOpportunityTypeSelect')[0].getValue();
		var actVol = Ext.ComponentQuery.query('#updateVolOpportunity')[0].getValue();
		var actQty = Ext.ComponentQuery.query('#updateQtyOpportunity')[0].getValue();
		var actAmount = Ext.ComponentQuery.query('#updateAmountOpportunity')[0].getValue();
		var actSalesDoc = Ext.ComponentQuery.query('#updateSalesDocNo')[0].getValue();
		if (actText.length > 0) {

			Ext.Msg.confirm("Confirm", "Do you want to update a sales activity?", function(buttonId) {
				if (buttonId === 'yes') {
					changeSalesActivity(formattedDate, selectedContact, actText, actType, actReason, actOutcome, actVol, actQty, actAmount, actSalesDoc, actOppType);
				}
			}, this // scope of the controller
			);
		} else {
			Ext.Msg.alert('Alert', 'Please enter text before submit an activity.', function() {
			});
		}
	},

	onCustomerMainActivate : function(view) {

		// set customer general detail
		var customerDetailView = Ext.ComponentQuery.query('customerDetail')[0];
		customerDetailView.setData(selectedCustRecord);
		updateContactStore();
		updateActivityStore();

		// show delete all button
		var button;

		button = Ext.ComponentQuery.query('#customerContainerOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#directCustomerButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#customerDetailButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#createActivityButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}
		button = Ext.ComponentQuery.query('#createDisputeButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}
		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}
		button = Ext.ComponentQuery.query('#deleteVanScheduleButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},
	onVanScheduleUpdateInit : function(customerCreate) {
		console.log('van update init');
		var button;

		button = Ext.ComponentQuery.query('#customerContainerOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#customerDetailButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#createActivityButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#createDisputeButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#deleteVanScheduleButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},
	onCustomerCreateInit : function(customerCreate) {
		//console.log('customer create init');
		var button;

		button = Ext.ComponentQuery.query('#customerContainerOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#customerDetailButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#createActivityButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#createDisputeButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#vanScheduleUpdateButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},
	onVanProductTabBack : function(vanProductTab) {
		if (vanProductTab.getActiveItem().getItemId() == 'vanProductContainer') {

			// show delete all button
			var button;

			button = Ext.ComponentQuery.query('#vanOptionButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}

			button = Ext.ComponentQuery.query('#vanSortButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}

			button = Ext.ComponentQuery.query('#vanAddToCartButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
		}
	},
	onCustomerTabBack : function(customerTab) {
		console.log('back to custTab');
		if (customerTab.getActiveItem().getItemId() == 'customerContainer') {
			updateCustomerListTitle();
			// show delete all button
			var button;

			button = Ext.ComponentQuery.query('#customerContainerOptionButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
			button = Ext.ComponentQuery.query('#customerDetailButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
			button = Ext.ComponentQuery.query('#createActivityButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#createDisputeButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#customerDetailOptionButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#vanScheduleUpdateButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#deleteVanScheduleButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}

		}
	},
	onCreateCustomerSubmit : function(button) {
		var name1 = Ext.ComponentQuery.query('#customerCrName1')[0].getValue();
		var name2 = Ext.ComponentQuery.query('#customerCrName2')[0].getValue();
		var street = Ext.ComponentQuery.query('#customerCrStreetNumber')[0].getValue();
		var postcode = Ext.ComponentQuery.query('#customerCrPostcode')[0].getValue();
		var suburb = Ext.ComponentQuery.query('#customerCrSuburb')[0].getValue();
		var region = Ext.ComponentQuery.query('#customerCrRegion')[0].getValue();
		var email = Ext.ComponentQuery.query('#customerCrEmail')[0].getValue();
		var tel = Ext.ComponentQuery.query('#customerCrTelephone')[0].getValue();
		var fax = Ext.ComponentQuery.query('#customerCrFax')[0].getValue();

		if (name1.trim() == '') {
			Ext.Msg.alert('Alert', 'Customer name must be filled.', function() {
			});
		} else if (street.trim() == '') {
			Ext.Msg.alert('Alert', 'Street must be filled.', function() {
			});
		} else if (postcode == null) {
			Ext.Msg.alert('Alert', 'Postcode must be filled.', function() {
			});
		} else if (suburb.trim() == '') {
			Ext.Msg.alert('Alert', 'Suburb must be filled.', function() {
			});
		} else if (region.trim() == '') {
			Ext.Msg.alert('Alert', 'Region must be filled.', function() {
			});
		} else if (tel.toString().trim() == '') {
			Ext.Msg.alert('Alert', 'Telephone number must be filled.', function() {
			});
		} else if (!is_email(email)) {
			Ext.Msg.alert('Alert', 'Email is not correctly formatted. Please change.', function() {
			});
		} else {
			Ext.Msg.confirm("Confirm", "Please confirm to create a customer", function(buttonId) {
				if (buttonId === 'yes') {
					// keep contact data
					tempNewCustomer.custName = name1;
					tempNewCustomer.creditLimit = 0;
					tempNewCustomer.creditAvailable = 0;
					tempNewCustomer.creditUsed = 0;
					tempNewCustomer.custAddr = street + ', ' + suburb + ' ' + region + ', ' + postcode;
					tempNewCustomer.creditBlock = '';
					tempNewCustomer.plant = REGION_LIST.find({
						value : region
					}).plant;
					tempNewCustomer.telNo = tel;
					tempNewCustomer.p1Pts = 0;
					tempNewCustomer.p1Status = '';
					tempNewCustomer.accountGroup = 'Z005';

					//call create contact BAPI
					createCustomer(name1, name2, street, postcode, suburb, region, email, tel, fax);
				}
			}, this // scope of the controller
			);
		}
	},
	onChangeCustomerSubmit : function(button) {
		var name1 = Ext.ComponentQuery.query('#customerChName1')[0].getValue();
		var name2 = Ext.ComponentQuery.query('#customerChName2')[0].getValue();
		var street = Ext.ComponentQuery.query('#customerChStreetNumber')[0].getValue();
		var postcode = Ext.ComponentQuery.query('#customerChPostcode')[0].getValue();
		var suburb = Ext.ComponentQuery.query('#customerChSuburb')[0].getValue();
		var region = Ext.ComponentQuery.query('#customerChRegion')[0].getValue();
		var email = Ext.ComponentQuery.query('#customerChEmail')[0].getValue();
		var tel = Ext.ComponentQuery.query('#customerChTelephone')[0].getValue();
		var fax = Ext.ComponentQuery.query('#customerChFax')[0].getValue();

		if (name1.trim() == '') {
			Ext.Msg.alert('Alert', 'Customer name must be filled.', function() {
			});
		} else if (street.trim() == '') {
			Ext.Msg.alert('Alert', 'Street must be filled.', function() {
			});
		} else if (postcode == null) {
			Ext.Msg.alert('Alert', 'Postcode must be filled.', function() {
			});
		} else if (suburb.trim() == '') {
			Ext.Msg.alert('Alert', 'Suburb must be filled.', function() {
			});
		} else if (region.trim() == '') {
			Ext.Msg.alert('Alert', 'Region must be filled.', function() {
			});
		} else if (tel.toString().trim() == '') {
			Ext.Msg.alert('Alert', 'Telephone number must be filled.', function() {
			});
		} else if (!is_email(email)) {
			Ext.Msg.alert('Alert', 'Email is not correctly formatted. Please change.', function() {
			});
		} else {
			Ext.Msg.confirm("Confirm", "Please confirm to change a customer", function(buttonId) {
				if (buttonId === 'yes') {
					// keep contact data
					tempChangeCustomer.custNo = selectedCust;
					tempChangeCustomer.custName = name1;
					tempChangeCustomer.custAddr = street + ', ' + suburb + ' ' + region + ', ' + postcode;
					tempChangeCustomer.telNo = tel;

					//call create contact BAPI
					changeCustomer(name1, name2, street, postcode, suburb, region, email, tel, fax);
				}
			}, this // scope of the controller
			);
		}
	},
	onCreateContactSubmit : function(button) {
		var firstName = Ext.ComponentQuery.query('#contactCrFirstText')[0].getValue();
		var lastName = Ext.ComponentQuery.query('#contactCrLastText')[0].getValue();
		var tel = Ext.ComponentQuery.query('#contactCrTel')[0].getValue();
		var email = Ext.ComponentQuery.query('#contactCrEmail')[0].getValue();
		var title = Ext.ComponentQuery.query('#contactCrTitle')[0].getValue();
		var department = Ext.ComponentQuery.query('#contactCrDepartment')[0].getValue();
		var functions = Ext.ComponentQuery.query('#contactCrFunction')[0].getValue();

		if (firstName.trim() == '' || lastName.trim() == '') {
			Ext.Msg.alert('Alert', 'First and last name cannot be blank.', function() {
			});
		} else if (!is_email(email)) {
			Ext.Msg.alert('Alert', 'Email is not correctly formatted. Please change.', function() {
			});
		} else {
			Ext.Msg.confirm("Confirm", "Please confirm to create a contact", function(buttonId) {
				if (buttonId === 'yes') {
					// keep contact data
					tempNewContact.firstName = firstName;
					tempNewContact.lastName = lastName;
					tempNewContact.phone = tel;
					tempNewContact.email = email;
					tempNewContact.title = title;
					tempNewContact.functions = functions;
					tempNewContact.department = department;
					tempNewContact.contName = tempNewContact.title + ' ' + tempNewContact.firstName + ' ' + tempNewContact.lastName;
					tempNewContact.type = 'Contact';

					//call create contact BAPI
					createContact(firstName, lastName, tel, email, title, department, functions);
				}
			}, this // scope of the controller
			);
		}
	},
	onChangeContactSubmit : function(button) {
		var firstName = Ext.ComponentQuery.query('#contactChFirstText')[0].getValue();
		var lastName = Ext.ComponentQuery.query('#contactChLastText')[0].getValue();
		var tel = Ext.ComponentQuery.query('#contactChTel')[0].getValue();
		var email = Ext.ComponentQuery.query('#contactChEmail')[0].getValue();
		var title = Ext.ComponentQuery.query('#contactChTitle')[0].getValue();
		var department = Ext.ComponentQuery.query('#contactChDepartment')[0].getValue();
		var functions = Ext.ComponentQuery.query('#contactChFunction')[0].getValue();

		if (firstName.trim() == '' || lastName.trim() == '') {
			Ext.Msg.alert('Alert', 'First and last name cannot be blank.', function() {
			});
		} else if (!is_email(email)) {
			Ext.Msg.alert('Alert', 'Email is not correctly formatted. Please change.', function() {
			});
		} else {
			Ext.Msg.confirm("Confirm", "Please confirm to change a contact", function(buttonId) {
				if (buttonId === 'yes') {
					changeContact(firstName, lastName, tel, email, title, department, functions);
				}
			}, this // scope of the controller
			);
		}
	},
	onCustomerDetailButtonTap : function(button) {
		getCustomerDetail();
	},
	onSignatureConfirmButtonTap : function() {
		// open up signature capturing screen
		showConfirmDelivery();
	},
	onCreateOrderButtonTap : function() {
		if (isVanOrder) {
			//check print name, check and signature first
			var signatureField = Ext.ComponentQuery.query('#signatureField')[0].getValue();
			var confirmCheck = Ext.ComponentQuery.query('#vanConfirmDeliveryConfirm')[0].getChecked();
			var deliveryName = Ext.ComponentQuery.query('#vanConfirmDeliveryName')[0].getValue();

			if (signatureField == null) {
				Ext.Msg.alert('Alert', 'Please enter a signature', function() {
				});
			} else if (deliveryName.length == 0) {
				Ext.Msg.alert('Alert', 'Please enter recipient\'s name', function() {
				});
			} else if (confirmCheck == false) {
				Ext.Msg.alert('Alert', 'Please check to confirm receipt', function() {
				});
			} else {
				createOrder();
			}

		} else {
			createOrder();
		}
	},
	onCartOrderBack : function(cartOrder) {
		console.log('back to cartOrder');

		// allow to change tab
		isInOrderConfirmationScreen = false;

		if (cartOrder.getActiveItem().getId() == 'cartList') {
			// disable changes on all field in OrderDetail
			var cartOrderHeaderDetail = Ext.ComponentQuery.query('cartOrderDetail')[0];
			var allChilds = cartOrderHeaderDetail.getInnerItems();
			for (var i = 0; i < allChilds.length; i++) {
				if (allChilds[i].getItemId() != 'shippingAdr') {
					allChilds[i].setReadOnly(false);
				}
			}

			// show delete all button
			var button = Ext.ComponentQuery.query('#deleteAllButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}

			// show order confirmation
			button = Ext.ComponentQuery.query('#checkoutButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}

			// hide createOrder button
			button = Ext.ComponentQuery.query('#createOrderButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}

			button = Ext.ComponentQuery.query('#signatureConfirmButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
		}
	},
	onOrderConfirmationActivate : function() {
		// set height of orderConfirmationScreen
		var messageStoreCount = orderMessage.items.length;
		var orderItemStoreCount = simulatedOrder.items.length;
		var tempHeight;
		var button;

		// update message and item store before show order confirmation screem
		updateOrderItemStore();
		updateOrderMessageStore();

		if (messageStoreCount > 0) {
			tempHeight = (messageStoreCount * MESSAGE_HEIGHT ) + HEADER_HEIGHT;
			this.getOrderMessageList().element.setHeight(tempHeight);
		}
		if (orderItemStoreCount > 0) {
			if (isIPad() || isDesktop()) {
				tempHeight = (orderItemStoreCount * LIST_IPAD_HEIGHT ) + HEADER_HEIGHT;
			} else {
				tempHeight = (orderItemStoreCount * LIST_IPHONE_HEIGHT) + HEADER_HEIGHT;
			}
			this.getOrderItemList().element.setHeight(tempHeight);
		}

		if (isVanOrder) {
			button = Ext.ComponentQuery.query('#createOrderButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#signatureConfirmButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
		} else {
			button = Ext.ComponentQuery.query('#createOrderButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
			button = Ext.ComponentQuery.query('#signatureConfirmButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}

		}

	},
	onOrderTypeChange : function(select, newValue, oldValue) {
		var validToDate = Ext.ComponentQuery.query('#validToDate')[0];
		var createOrderButton = Ext.ComponentQuery.query('#createOrderButton')[0];
		var checkoutButton = Ext.ComponentQuery.query('#checkoutButton')[0];
		var quoteCommentField = Ext.ComponentQuery.query('#quoteCommentField')[0];
		var orderCommentField = Ext.ComponentQuery.query('#orderCommentField')[0];
		var delInstructionField = Ext.ComponentQuery.query('#delInstructionField')[0];

		if (newValue == 'ZSTK' || newValue == 'ZMCF') {
			validToDate.setHidden(true);
			quoteCommentField.setHidden(true);
			orderCommentField.setHidden(false);
			delInstructionField.setHidden(false);
			createOrderButton.setText('Place Order Now');
			checkoutButton.setText('Order Confirmation');
		} else {
			validToDate.setHidden(false);
			quoteCommentField.setHidden(false);
			orderCommentField.setHidden(true);
			delInstructionField.setHidden(true);
			createOrderButton.setText('Place Quote Now');
			checkoutButton.setText('Quote Confirmation');
		}
	},
	onDeliveringPlantChange : function(select, newValue, oldValue) {
		//updateCartStorageLoc(newValue);
	},
	onOrderConfirmation : function() {
		console.log('order confirmation clicked');
		var poValue = Ext.ComponentQuery.query('#poNumber')[0].getValue();

		if (productsInCart.items.length == 0) {
			Ext.Msg.alert('Cart', 'Please add product in the cart.', function() {
			});
		} else if (poValue == '') {
			Ext.Msg.alert('Cart', 'Please enter PO number.', function() {
				// move to order header screen
				var cartTab = Ext.ComponentQuery.query('#cartTab')[0];
				cartTab.setActiveItem(1);
			});
		} else {

			Ext.Msg.show({
				title : 'Order confirmation',
				message : 'Where do stocks come from?',
				scope : this,
				buttons : [{
					itemId : 'v',
					text : 'Van'
				}, {
					itemId : 'w',
					text : 'Warehouse'
				}],
				fn : function(btn) {
					if (btn == 'v') {
						isVanOrder = true;
					} else if (btn == 'w') {
						isVanOrder = false;
					}
					simulateOrder();

				}
			});

		}
	},
	onCustListIniialize : function() {
		console.log('customer List is init');
		//save initi group to memory for later use
		customerGrouper = Ext.getStore('customer').getGrouper();
	},
	onChangeTab : function(mainPanel, value, oldValue) {
		console.log('tab changes: ' + value.getItemId());
		currentTab = value.getItemId();
		if (!isInOrderConfirmationScreen) {
			if (value.getItemId() != 'customerTab') {
				if (selectedCust == null) {
					Ext.toast('Please select customer before proceeding', 1500);
					return false;
				} else if (value.getItemId() == 'vanProductTab' && vanProdResultData.items.length <= 0) {
					Ext.toast(PRODUCT_LOADING, 10000);
					getVanProduct();
				}
			}
		} else {
			return false;
		}

	},
	onLoginButtonTap : function(button) {
		console.log('login tapped');

		var usernameField = Ext.ComponentQuery.query('#userIdCredential');
		if (usernameField.length > 0) {
			userId = usernameField[0].getValue();
			if (userId != null) {
				userId = userId.toUpperCase();
			}

			if (sharedStorage != null) {
				sharedStorage.setItem(USER_KEY, userId);
			}
		}

		var passwordField = Ext.ComponentQuery.query('#passwordCredential');
		if (passwordField.length > 0) {
			password = passwordField[0].getValue();
		}
		console.log('Password: ' + password);
		validateCredentials();
	},
	onSortChange : function(picker, value, opts) {
		var sortBy = picker.getValue()['sortBy'];
		console.log('sort by: ' + sortBy);
		if (sortBy != '') {
			var pickerId = picker.getItemId();
			if (pickerId == 'productSearch') {
				var store = Ext.getStore('productResult');
			} else if (pickerId == 'previousPurchase') {
				var store = Ext.getStore('previousPurchase');
			} else if (pickerId == 'vanProduct') {
				var store = Ext.getStore('vanProductResult');
			}

			var sortDirection;
			store.clearFilter();
			switch (sortBy) {
				case SORT_BY[PRODUCT_DESC_INDEX].value :
					sortDirection = 'ASC';
					break;
				case SORT_BY[PRODUCT_CODE_INDEX].value :
					sortDirection = 'ASC';
					break;
				case SORT_BY[PRICE_INDEX].value :
					sortDirection = 'ASC';
					break;
				case SORT_BY[ATP_QTY_INDEX].value :
					sortDirection = 'DESC';
					break;
				case SORT_BY[COUNT_INDEX].value :
					sortDirection = 'DESC';
					break;
				default :
					break;
			}
			store.sort(sortBy, sortDirection);
			picker.destroy();
		}
	},
	onPreviousPruchaseBack : function(view) {
		var activeItems = view.getActiveItem();

		if (activeItems._itemId == 'daysSelectField') {
			var button;
			// hide sort button
			button = Ext.ComponentQuery.query('#previousPurchaseSortButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}

		}
	},
	onPreviousPurchaseActivate : function() {

		// show sort button
		button = Ext.ComponentQuery.query('#previousPurchaseSortButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}

		// hide add button
		button = Ext.ComponentQuery.query('#preAddToCartButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

	},
	onDaysSelected : function(select, newValue, oldValue) {
		console.log('new value: ' + newValue);
		if (newValue != '0') {
			getPreviousPurchase(newValue);
		}
	},
	onCartTabShow : function() {
		var cartList = Ext.ComponentQuery.query('cartList');
		if (cartList.length > 0) {
			if (cartList[0].isPainted()) {
				activateCartList();
				updateCartTotal();
			}
		}
	},
	onCartListActivate : function(component, newItem, oldItem) {

		console.log('cartList is active');
		activateCartList();
		updateCartTotal();

	},
	onDeleteAllTap : function(button) {
		Ext.Msg.confirm("Delete all?", "Do you want to delete all products in the cart?", function(buttonId) {
			if (buttonId === 'yes') {
				deleteAllInCart();
				updateCartBadgeText();
				updateCartStore();
				updateCartTotal();
			}
		}, this // scope of the controller
		);
	},

	// when product is selected then save product record in
	// selectedProduct variable
	// and display product description
	onCartListSelect : function(list, index, target, record, event) {

		if (event.target.className == 'cart_input') {
			event.stopEvent();
		} else {

			// save select record
			selectedProduct = JSON.parse(JSON.stringify(productsInCart.items[index]));
			console.log('product result list is select at: ' + selectedProduct.prodNo);

			//get material uom
			getMaterialUom(selectedProduct.prodNo);
			// call Product Description screen
			list.up('cartOrder').push({
				xtype : 'productDesc',
				data : selectedProduct,
				id : 'cartProductDesc',
				title : selectedProduct.prodDesc
			});

			// if (selectedProduct.batch != '') {
			// setProdDescBatchOption('#cartProductDesc', selectedProduct.prodNo);
			// }

			var cartProductDescView = Ext.ComponentQuery
			.query('#cartProductDesc')[0];
			var allItems = cartProductDescView.items.items;
			for (var i = 0; i < allItems.length; i++) {
				// set job number in the cart
				if (allItems[i].getItemId() == 'jobNumber') {
					allItems[i].setValue(selectedProduct.jobNumber);
				}
				// set orderQty in the cart
				if (allItems[i].getItemId() == 'orderQty') {
					allItems[i].setValue(selectedProduct.orderQty);
				}

				// set manualPr in the cart
				if (allItems[i].getItemId() == 'manualPr') {
					allItems[i].setValue(selectedProduct.manualPr);
				}

			}
		}
	},
	onCartItemDoubleTap : function(list, idx, target, record, event) {

		Ext.Msg.confirm("Delete item?", "Do you want to delete " + record.get('prodDesc') + " from the cart?", function(buttonId, text) {
			if (buttonId == 'yes') {
				// // TODO when the delete button is clicked, delete an
				// // array in productInCart variable
				deleteItemInCart(idx);
			}
		}, this);
	},
	onProductDescMainActivate : function(carousel) {
		console.log('onProductDescMainActivate');
		var carouselId = carousel.getId();
		var productDesc;
		var productHist;
		var productAtp;
		var vanReplUpdate;
		var productDescId;
		var productHistId;
		var productAtpId;
		var vanReplUpdateId;
		var productHistStoreType;
		var productAtpStoreType;
		var hideLoadMoreButton = false;
		// assign id to different views
		if (carouselId == 'vanProductDescMain') {
			productDescId = 'vanProductDesc';
			productHistId = 'vanProductDescHist';
			productAtpId = 'vanProductDescAtp';
			vanReplUpdateId = 'vanVanReplUpdate';

			productHistStoreType = 'vanProductSalesHistory';
			productAtpStoreType = 'vanProductAtp';
			if (vanProdSalesHistoryData.items.length < 20) {
				hideLoadMoreButton = true;
			}
		} else if (carouselId == 'searchProductDescMain') {
			productDescId = 'searchProductDesc';
			productHistId = 'searchProductDescHist';
			productAtpId = 'searchProductDescAtp';
			vanReplUpdateId = 'searchVanReplUpdate';

			productHistStoreType = 'searchProductSalesHistory';
			productAtpStoreType = 'searchProductAtp';
			if (searchProdSalesHistoryData.items.length < 20) {
				hideLoadMoreButton = true;
			}
		} else if (carouselId == 'previousProductDescMain') {
			productDescId = 'previousProductDesc';
			productHistId = 'previousProductDescHist';
			productAtpId = 'previousProductDescAtp';
			vanReplUpdateId = 'previousVanReplUpdate';

			productHistStoreType = 'preProductSalesHistory';
			productAtpStoreType = 'previousProductAtp';
			if (preProdSalesHistoryData.items.length < 20) {
				hideLoadMoreButton = true;
			}
		}
		// create product description view
		productDesc = Ext.create('PaperVan.view.ProductDesc', {
			data : selectedProduct,
			id : productDescId,
			title : selectedProduct.prodDesc
		});

		// create product ATP view
		productAtp = Ext.create('PaperVan.view.ProductAtpList', {
			id : productAtpId,
			title : 'Product ATP',
			store : {
				type : productAtpStoreType
			}
		});

		// create van replenish stock view
		vanReplUpdate = Ext.create('PaperVan.view.VanReplUpdate', {
			itemId : vanReplUpdateId,
			title : 'Van Replenishment Update'
		});

		// only add customer price button at van product tab
		if (carouselId == 'vanProductDescMain') {
			customerPriceButton = Ext.create('Ext.Button', {
				itemId : carouselId,
				docked : 'bottom',
				text : 'Get customer price',
				ui : 'action',
				style : 'border-width: 1px 0px 0px 0px;border-style: groove; font-size: 80%;',
				handler : function() {
					console.log('button load customer price');
					Ext.toast("Loading customer price", 10000);
					getCustomerPrice(selectedProduct.prodNo, selectedCustRecord.custNo, selectedCustRecord.plant, this.getItemId());
				}
			});
			productDesc.add([customerPriceButton]);

		}
		// create product history view
		productHist = Ext.create('PaperVan.view.ProductDescHist', {
			id : productHistId,
			title : 'Product History',
			store : {
				type : productHistStoreType
			},
			items : [{
				xtype : 'button',
				itemId : carouselId,
				hidden : hideLoadMoreButton,
				scrollDock : 'bottom',
				docked : 'bottom',
				text : 'Load more history',
				handler : function() {
					var selectedMaterial;
					var skip;
					console.log('button load more');
					switch (this.getItemId()) {
						case 'vanProductDescMain':
							selectedMaterial = vanProdSalesHistoryData.items[0].material;
							skip = vanProdSalesHistoryData.items.length;
							break;
						case 'searchProductDescMain':
							selectedMaterial = searchProdSalesHistoryData.items[0].material;
							skip = searchProdSalesHistoryData.items.length;
							break;
						case 'previousProductDescMain':
							selectedMaterial = preProdSalesHistoryData.items[0].material;
							skip = preProdSalesHistoryData.items.length;
							break;
					};
					Ext.toast("Loading history", 1500);
					getProductSalesHistoryList(selectedMaterial, skip, this.getItemId());
				}
			}]
		});

		carousel.add([productDesc, productHist, productAtp, vanReplUpdate]);
	},
	onProductDescActivate : function(list) {
		console.log('onProductDescActivate');
		// hide delete all button
		var button = Ext.ComponentQuery.query('#deleteAllButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		// hide sort button
		button = Ext.ComponentQuery.query('#productSortButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		// hide sort button
		button = Ext.ComponentQuery.query('#previousPurchaseSortButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		var listId = list.getId();
		if (listId == 'searchProductDesc') {
			// show add button
			button = Ext.ComponentQuery.query('#addToCartButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
		} else if (listId == 'previousProductDesc') {
			// show add button
			button = Ext.ComponentQuery.query('#preAddToCartButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}

		} else if (listId == 'cartProductDesc') {
			// show done button
			button = Ext.ComponentQuery.query('#doneButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
		} else if (listId == 'vanProductDesc') {
			// show done button
			button = Ext.ComponentQuery.query('#vanAddToCartButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
			// hide sort button
			button = Ext.ComponentQuery.query('#vanSortButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}

			// hide refresh button
			button = Ext.ComponentQuery.query('#vanOptionButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}

		}

		// // set uom in order qty field
		// var orderQtyField = list.down('#orderQty');
		// orderQtyField.setLabel('Order Qty (' + selectedProduct.uom + ')');
		//
		// // set uom in manual pr field
		// var manualPrField = list.down('#manualPr');
		// manualPrField.setLabel('Manual Price / ' + selectedProduct.uom);

	},

	// when product is selected then save product record in
	// selectedProduct variable
	// and display product description
	onPreviousPurchaseListSelect : function(list, record) {

		// save select record
		selectedProduct = record.getData();

		list.up('previousPurchaseTab').push({
			xtype : 'productDescMain',
			id : 'previousProductDescMain',
			title : selectedProduct.prodDesc
		});
		getProductSalesHistoryList(selectedProduct.prodNo, 0, 'previousProductDescMain');
		// get ATP based on customer plant
		getProductAtpList(selectedProduct.prodNo, selectedCustRecord.plant);
		// get van replenishment information
		getVanReplInfo(selectedProduct.prodNo, userPlant, userStorageLoc, 'previousProductDescMain');
		//get material uom
		getMaterialUom(selectedProduct.prodNo);
	},

	// when product is selected then save product record in
	// selectedProduct variable
	// and display product description
	onProductResultListSelect : function(list, record) {

		// save select record
		selectedProduct = record.getData();
		console.log('product result list is select at: ' + selectedProduct.prodNo);

		list.up('productTab').push({
			xtype : 'productDescMain',
			id : 'searchProductDescMain',
			title : selectedProduct.prodDesc
		});
		getProductSalesHistoryList(selectedProduct.prodNo, 0, 'searchProductDescMain');
		// get ATP from selected plant in search product screen
		var searchPlant = Ext.ComponentQuery.query('#searchPlant')[0].getValue();
		getProductAtpList(selectedProduct.prodNo, searchPlant);
		// get van replenishment information
		getVanReplInfo(selectedProduct.prodNo, userPlant, userStorageLoc, 'searchProductDescMain');
		//get material uom
		getMaterialUom(selectedProduct.prodNo);
	},

	// when product is selected then save product record in
	// selectedProduct variable
	// and display product description
	onVanProductResultListSelect : function(list, record) {

		// save select record
		selectedProduct = record.getData();
		console.log('van product result list is select at: ' + selectedProduct.prodNo);

		list.up('vanProductTab').push({
			xtype : 'productDescMain',
			id : 'vanProductDescMain',
			title : selectedProduct.prodDesc
		});
		getProductSalesHistoryList(selectedProduct.prodNo, 0, 'vanProductDescMain');
		// get ATP based on customer plant
		getProductAtpList(selectedProduct.prodNo, selectedCustRecord.plant);
		// get van replenishment information
		getVanReplInfo(selectedProduct.prodNo, userPlant, userStorageLoc, 'vanProductDescMain');
		//get material uom
		getMaterialUom(selectedProduct.prodNo);
	},

	// when done button is tapped, add update cart item
	onUpdateItemTap : function(button) {

		// copy selectedProduct to temp product by JSON parser
		var tempProduct = JSON.parse(JSON.stringify(selectedProduct));
		// var requiredBatch = false;

		var cartProductDescView = Ext.ComponentQuery.query('#cartProductDesc')[0];
		var allItems = cartProductDescView.items.items;
		for (var i = 0; i < allItems.length; i++) {
			// set job number
			if (allItems[i].getItemId() == 'jobNumber') {
				tempProduct.jobNumber = allItems[i].getValue();
			}
			// set orderQty
			if (allItems[i].getItemId() == 'orderQty') {
				tempProduct.orderQty = allItems[i].getValue();
			}
			// set manualPr
			if (allItems[i].getItemId() == 'manualPr') {
				tempProduct.manualPr = allItems[i].getValue();
			}

			if (allItems[i].getItemId() == 'uomSelect') {
				tempProduct.orderUom = allItems[i].getValue();
				uomOptions = allItems[i].getOptions();

				tempProduct.conversion = uomOptions.findAll({value: tempProduct.orderUom})[0].conversion;
			}

		}

		updateToCart(tempProduct);
		updateCartTotal();
		button.up('cartOrder').pop();
		Ext.toast(tempProduct.prodDesc + ' has been updated.', 1500);
		// return to previous page

	},

	// when + button is tapped, add selected product to productsInCart variable
	onAddToCartTap : function(button) {

		// var tempProduct = JSON.parse(JSON.stringify(selectedProduct));
		var tempData;
		var buttonId = button.getItemId();
		var uomOptions;
		// var requiredBatch = false;

		// determine which view used to retrieve a product data beofre adding to
		// the cart
		if (buttonId == 'addToCartButton') {
			var searchProductDescView = Ext.ComponentQuery
			.query('#searchProductDesc')[0];
			var allItems = searchProductDescView.items.items;
			tempData = searchProductDescView.getData();
		} else if (buttonId == 'preAddToCartButton') {
			var previousProductDescView = Ext.ComponentQuery
			.query('#previousProductDesc')[0];
			var allItems = previousProductDescView.items.items;
			tempData = previousProductDescView.getData();
		} else if (buttonId == 'vanAddToCartButton') {
			var vanProductDescView = Ext.ComponentQuery.query('#vanProductDesc')[0];
			var allItems = vanProductDescView.items.items;
			tempData = vanProductDescView.getData();
		}

		// copy data from a view to temp product by JSON parser
		var tempProduct = JSON.parse(JSON.stringify(tempData));

		for (var i = 0; i < allItems.length; i++) {
			// set job number
			if (allItems[i].getItemId() == 'jobNumber') {
				tempProduct.jobNumber = allItems[i].getValue();
			}
			// set orderQty
			if (allItems[i].getItemId() == 'orderQty') {
				tempProduct.orderQty = allItems[i].getValue();
			}
			// set manualPr
			if (allItems[i].getItemId() == 'manualPr') {
				tempProduct.manualPr = allItems[i].getValue();
			}

			if (allItems[i].getItemId() == 'uomSelect') {
				tempProduct.orderUom = allItems[i].getValue();
				uomOptions = allItems[i].getOptions();

				tempProduct.conversion = uomOptions.findAll({value: tempProduct.orderUom})[0].conversion;
			}

		}

		// add temp object to productsInCart variable
		addToCart(tempProduct);
		updateCartTotal();
		Ext.toast(tempProduct.prodDesc + ' has been added to the cart.', 2000);
		// return to previous page
		if (buttonId == 'addToCartButton') {
			button.up('productTab').pop();
		} else if (buttonId == 'preAddToCartButton') {
			button.up('previousPurchaseTab').pop();
		} else if (buttonId == 'vanAddToCartButton') {
			button.up('vanProductTab').pop();
		}
	},

	// when sort button is tapped, show sort type
	onSortTap : function(button) {
		console.log('sort is tapped');
		var picker = Ext.create('PaperVan.resource.SortPicker');
		var buttonId = button.getItemId();
		if (buttonId == 'productSortButton') {
			picker.setItemId('productSearch');
		} else if (buttonId == 'previousPurchaseSortButton') {
			picker.setItemId('previousPurchase');
		} else if (buttonId == 'vanSortButton') {
			picker.setItemId('vanProduct');
		}

		Ext.Viewport.add(picker);
		picker.show();
	},

	// when product tab active, show exit button and hide sort button
	onProductActivate : function(view) {
		console.log('product tab active');
		var button;

		button = Ext.ComponentQuery.query('#productSortButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		button = null;
	},

	// when van product result is active, hide exit button and show sort
	// button
	onVanProductResultActivate : function(list) {
		console.log('Result list is active');
		var button;

		button = Ext.ComponentQuery.query('#vanOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		// hide add button
		button = Ext.ComponentQuery.query('#vanAddToCartButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		button = Ext.ComponentQuery.query('#vanSortButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}
		button = null;

	},

	// when product result is active, hide exit button and show sort
	// button
	onProductResultActivate : function(list) {
		console.log('Result list is active');
		var button;

		// hide add button
		button = Ext.ComponentQuery.query('#addToCartButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		button = Ext.ComponentQuery.query('#productSortButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}
		button = null;

	},

	// when search button is clicked
	// call trex_search in R3 then display result
	onSearchTap : function(button, e, options) {
		// validate atp qty field before calling search fn
		var atpField = Ext.ComponentQuery.query('#searchAtpQty')[0];
		if (validateNumberField(atpField.getValue(), 'ATP Qty must be number!')) {
			getProductSearch(button);
		}

	},

	// validate atp qty field whether input is a number or not
	// if not then popup alert message
	onBlur : function(field) {!validateNumberField(field.getValue(), 'ATP Qty must be number!');
	},

	// when exit button is tapped
	onExitTap : function() {
		console.log('close workflow');

		Ext.Msg.confirm('Warning', 'Do you want to exit?', function(buttonId) {
			if (buttonId === 'yes') {
				closeWorkflow();
			}
		}, this // scope of the controller
		);

	},
	onCustomerListDoubleTap : function(list, index, target, record) {
		console.log('double tap customer list');
		selectedCustRecord = record.getData();
		selectedCust = record.get('custNo');
		//		selectedCustomerAddress = record.get('custAddr');
		updateCartOrderHeader(record);
		updateProductSearch(record);
		getCustomerDetail();
	},

	// when customer is selected then save customer number to global
	// variable
	onCustomerListSelect : function(list, record) {
		console.log('cust list is select at: ' + record.get('custNo'));
		// save customer number
		selectedCustRecord = record.getData();
		selectedCust = record.get('custNo');
		//	selectedCustomerAddress = record.get('custAddr');
		updateCartOrderHeader(record);
		updateProductSearch(record);
		getShiptoList();
	},
	onVanSearchKeyUp : function(searchField) {
		queryString = searchField.getValue();
		console.log(this, 'Please search van by: ' + queryString);

		var store = Ext.getStore('vanProductResult');
		store.clearFilter();

		if (queryString) {
			var thisRegEx = new RegExp(queryString, "i");
			store.filterBy(function(record) {
				if (thisRegEx.test(record.get('prodDesc')) || thisRegEx.test(record.get('prodNo'))) {
					return true;
				};
				return false;
			});
		}

	},
	onSearchKeyUp : function(searchField) {
		queryString = searchField.getValue();
		console.log(this, 'Please search by: ' + queryString);

		if (selectedSalesOffice == '') {
			var store = Ext.getStore('customer');
			store.clearFilter();

			if (queryString) {
				var thisRegEx = new RegExp(queryString, "i");
				store.filterBy(function(record) {
					if (thisRegEx.test(record.get('custName')) || thisRegEx.test(record.get('custNo'))) {
						return true;
					};
					return false;
				});
			}
		} else {
			var queryLength = queryString.length;
			if (queryLength >= MIN_CHAR_SEARCH) {
				searchString = queryString;
				getCustomerList(selectedSalesOffice, '', '', '');
				searchString = '';
			}
		}

	},
	onClearVanSearch : function() {
		console.log('Clear icon is tapped');
		var store = Ext.getStore('vanProductResult');
		store.clearFilter();
	},
	onClearSearch : function() {
		console.log('Clear icon is tapped');
		var store = Ext.getStore('customer');
		store.clearFilter();
	},
	onActivate : function() {
		console.log('Controller initialized');
		Ext.Ajax.setTimeout(REQUEST_TIMEOUT);

		// user account validation
		credScreen = Ext.create('PaperVan.view.Credentials');
		Ext.Viewport.add(credScreen);

		sharedStorage = window.localStorage;
		// // get user name
		if (sharedStorage != null) {
			userId = sharedStorage.getItem(USER_KEY);
		} else {
			// test
			userId = 'PJITTIBO';
		}

		if (userId != null) {
			userId = userId.toUpperCase();
		}
		// get saved password
		if (sharedStorage != null) {
			password = sharedStorage.getItem(PASSWORD_KEY);
		} else {
			password = "SAP@1982";
		}
		//
		if (environment == 'R3D') {
			serverConnection = 'http://shop.spicers.com.au:8085/sap/opu/odata/sap/ZGW_SPICERS_CORE_NEW_SRV/';
			//			serverConnection = 'http://pxdcla26.domain1.local:8000/sap/opu/odata/sap/ZGW_SPICERS_CORE_NEW_SRV/';
		} else {
			// prod oData
			serverConnection = 'http://shop.spicers.com.au:8445/sap/opu/odata/sap/ZGW_SPICERS_CORE_NEW_SRV/';
		}
		oDataBackEnd = serverConnection;
		if (password == null) {
			// no password saved then show credential screen
			showCredentialScreen(userId);
		} else {
			validateCredentials();
		}

	},
	// prepare global variable when app first get loaded
	// onActivate : function() {
	// console.log('Main container is active');
	//
	// }
});

function refreshPanel(fullRefreshPanel) {
	// set wait time to 1 second
	Ext.defer(function() {
		// TODO: load customer price from Sybase
		// ------------

		// set customer price to temporary record
		var tempProduct = JSON.parse(JSON.stringify(fullRefreshPanel.getParent().getData()));
		tempProduct.custPr = custPrice;
		// TODO: save customer price data in local store
		// ------------

		// save customer price
		updateCustPrice(tempProduct);

		// refresh data in product description screen
		fullRefreshPanel.up('productDesc').setData(tempProduct);
		console.log('refresh panel');
		fullRefreshPanel.refreshReady();
		// update total
		updateCartTotal();
	}, 50);

}

function number(nStr) {
	if (isNaN(nStr) || nStr == null) {
		return "";
	} else {
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2.substring(0, 3);
	}
}

function validateNumberField(value, errorMessage) {
	if (value == null) {
		Ext.toast(errorMessage, 1500);
		return false;
	} else {
		return true;
	}
}

function addToCart(product) {

	var isDuplicate = false;
	for (var i = 0; i < productsInCart.items.length; i++) {
		if (product.prodNo == productsInCart.items[i].prodNo) {
			productsInCart.items[i].orderQty += product.orderQty;
			productsInCart.items[i].jobNumber = product.jobNumber;
			productsInCart.items[i].manualPr = product.manualPr;
			productsInCart.items[i].orderUom = product.orderUom;
			productsInCart.items[i].conversion = product.conversion;
			isDuplicate = true;
			break;
		}
	}

	if (!isDuplicate) {
		productsInCart.items.push(product);

		// update badgeText
		updateCartBadgeText();
	}
	// update cartStore
	updateCartStore();
}

function updateCustPrice(product) {
	// Update product in my stock
	for (var i = 0; i < vanProdResultData.items.length; i++) {
		if (product.prodNo == vanProdResultData.items[i].prodNo) {
			vanProdResultData.items[i].custPr = product.custPr;
			updateVanProductResultStore();
			break;
		}
	}

	// Update product in cart
	for (var i = 0; i < productsInCart.items.length; i++) {
		if (product.prodNo == productsInCart.items[i].prodNo) {
			productsInCart.items[i].custPr = product.custPr;
			updateCartStore();
			break;
		}
	}

	// Update productResult
	for (var i = 0; i < prodResultData.items.length; i++) {
		if (product.prodNo == prodResultData.items[i].prodNo) {
			prodResultData.items[i].custPr = product.custPr;
			updateProductResultStore();
			break;
		}
	}

	// Update previousPurchase
	for (var i = 0; i < prevProdData.items.length; i++) {
		if (product.prodNo == prevProdData.items[i].prodNo) {
			prevProdData.items[i].custPr = product.custPr;
			updatePreviousPurchaseStore();
			break;
		}
	}

}

function updateToCart(product) {

	for (var i = 0; i < productsInCart.items.length; i++) {
		if (product.prodNo == productsInCart.items[i].prodNo) {
			productsInCart.items[i].orderQty = product.orderQty;
			productsInCart.items[i].jobNumber = product.jobNumber;
			productsInCart.items[i].manualPr = product.manualPr;
			productsInCart.items[i].orderUom = product.orderUom;
			productsInCart.items[i].conversion = product.conversion;
			break;
		}
	}
	// update cartStore
	updateCartStore();
}

function deleteAllInCart() {
	productsInCart = {
		items : []
	};
}

function deleteItemInCart(idx) {
	// remove object[idx] from the cart
	productsInCart.items.splice(idx, 1);

	// update badgeText
	updateCartBadgeText();
	// update cartStore
	updateCartStore();
	// update total
	updateCartTotal();
}

function updateCartBadgeText() {
	// update badgeText
	var cartTab = mainContainer.getTabBar().getComponent(4);
	var noItems = productsInCart.items.length;
	cartTab.setBadgeText(noItems);
}

// update orderMessageStore
function updateOrderMessageStore() {
	var store = Ext.getStore('message');
	if (store != null) {
		store.setData(orderMessage);
	}
}

// update customerStore
function updateCustomerStore() {
	var store = Ext.getStore('customer');
	if (store != null) {
		store.setData(customerData);
	}
}

// update contactStore
function updateContactStore() {
	var store = Ext.getStore('contact');
	if (store != null) {
		store.setData(contactData);
	}
}

// update activityStore
function updateActivityStore() {
	var store = Ext.getStore('activity');
	if (store != null) {
		store.setData(activityData);
	}
}

function updateDisputeStore() {
	var store = Ext.getStore('dispute');
	if (store != null) {
		store.setData(disputeData);
	}
}

// update cartStore
function updateCartStore() {
	var store = Ext.getStore('cart');
	if (store != null) {
		store.setData(productsInCart);
	}
}

// update orderMessageStore
function updateOrderMessageStore() {
	var store = Ext.getStore('message');
	if (store != null) {
		store.setData(orderMessage);
	}
}

// update orderItemStore
function updateOrderItemStore() {
	var store = Ext.getStore('orderitem');
	if (store != null) {
		store.setData(simulatedOrder);
	}
}

// update vanProductResultStore
function updateVanProductResultStore() {
	var store = Ext.getStore('vanProductResult');
	if (store != null) {
		store.setData(vanProdResultData);
	}
}

// update productResultStore
function updateProductResultStore() {
	var store = Ext.getStore('productResult');
	if (store != null) {
		store.setData(prodResultData);
	}
}

function updateProductAtpStore() {
	var store = Ext.getStore('searchProductAtp');
	if (store != null) {
		store.setData(searchProdAtpData);
	}
	store = Ext.getStore('previousProductAtp');
	if (store != null) {
		store.setData(previousProdAtpData);
	}
	store = Ext.getStore('vanProductAtp');
	if (store != null) {
		store.setData(vanProdAtpData);
	}
}

function updateProductSalesHistoryStore() {
	var store = Ext.getStore('searchProductSalesHistory');
	if (store != null) {
		store.setData(searchProdSalesHistoryData);
	}
	store = Ext.getStore('preProductSalesHistory');
	if (store != null) {
		store.setData(preProdSalesHistoryData);
	}
	store = Ext.getStore('vanProductSalesHistory');
	if (store != null) {
		store.setData(vanProdSalesHistoryData);
	}
}

// update previousPurchaseStore
function updatePreviousPurchaseStore() {
	var store = Ext.getStore('previousPurchase');
	if (store != null) {
		store.setData(prevProdData);
	}
}

// update favoriteStore
function updateFavoriteStore() {
	var store = Ext.getStore('favorite');
	if (store != null) {
		store.setData(favoriteData);
	}
}

function getSelectedProductOrderQty() {
	if (jPath(selectedProduct, 'orderQty') == null) {
		return 1;
	} else {
		return selectedProduct.orderQty;
	}
}

function jPath(obj, a) {
	a = a.split(".");
	var p = obj || {};
	for (var i in a) {
		if (p === null || typeof p[a[i]] === 'undefined')
			return null;
		p = p[a[i]];
	}
	return p;
}

function changeCartOrderQty(prodNo, newOrderQty) {
	console.log('change order qty : ' + prodNo + '  ' + newOrderQty);

	for (var i = 0; i < productsInCart.items.length; i++) {
		if (prodNo == productsInCart.items[i].prodNo) {
			productsInCart.items[i].orderQty = newOrderQty;
			updateCartStore();
			updateCartTotal();
			break;
		}
	}
}

function updateCartTotal() {
	var totalPrice = 0;
	for (var i = 0; i < productsInCart.items.length; i++) {
		if (productsInCart.items[i].manualPr != null) {
			totalPrice = totalPrice + (productsInCart.items[i].manualPr * productsInCart.items[i].orderQty * productsInCart.items[i].conversion);
		} else if (productsInCart.items[i].custPr != null && productsInCart.items[i].custPr != 0) {
			totalPrice = totalPrice + (productsInCart.items[i].custPr * productsInCart.items[i].orderQty * productsInCart.items[i].conversion);
		} else if (productsInCart.items[i].listPr != null) {
			totalPrice = totalPrice + (productsInCart.items[i].listPr * productsInCart.items[i].orderQty * productsInCart.items[i].conversion);
			// customer price will always be available
			// totalPrice = totalPrice + productsInCart.items[i].listPr *
			// productsInCart.items[i].orderQty;
		}

	}
	var totalField = Ext.ComponentQuery.query('#cartTotal');
	if (totalField.length > 0) {
		totalField[0].setValue(number(totalPrice));
	}

	var gstField = Ext.ComponentQuery.query('#cartGSTTotal');
	var gstValue = totalPrice * 0.1;
	if (gstField.length > 0) {
		gstField[0].setValue(number(gstValue));
	}

	var grossTotalField = Ext.ComponentQuery.query('#cartGrossTotal');
	var grossValue = totalPrice + gstValue;
	if (grossTotalField.length > 0) {
		grossTotalField[0].setValue(number(grossValue));
	}

	return totalPrice;
}

function activateCartList() {
	// show exit button
	var button;

	// show delete all button
	var button = Ext.ComponentQuery.query('#deleteAllButton');
	if (button.length > 0) {
		button[0].setHidden(false);
	}

	// hide done button
	var button = Ext.ComponentQuery.query('#doneButton');
	if (button.length > 0) {
		button[0].setHidden(true);
	}
}

function showCredentialScreen(userId) {
	credScreen.down('#userIdCredential').setValue(userId);
	credScreen.show();
}

function validateCredentials() {

	if (mainContainer != null) {
		mainContainer.setMasked({
			xtype : 'loadmask',
			message : VALIDATE_ACCOUNT_LOADING,
			indicator : true
		});
	} else {
		Ext.toast(VALIDATE_ACCOUNT_LOADING, 20000);
	}
	// Ext.toast(VALIDATE_ACCOUNT_LOADING, 1500);

	filters = {};
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getValidateAccountOData, filterString, successUserValidate, errCallback, null);

}

function getPreviousPurchase(selectedDays) {
	// set wait time to half second
	days = selectedDays;
	searchString = '';
	filters = [{
		field : 'inputPrevPur',
		value : 'X',
	}, {
		field : 'inputNumDays',
		value : selectedDays,
		type : 'int'
	}, {
		field : 'inputCustomer',
		value : selectedCust,
	}];
	var filterString = constructFilter(filters, searchString);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : PRODUCT_LOADING,
		indicator : true
	});

	callOData(getPurchasedProductOData, filterString, successPreviousProductCallback, errCallback, null);

}

function getDisputList() {

	filters = [{
		field : 'CustomerNo',
		value : selectedCust,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getDisputeOData, filterString, successDisputeListCallback, errCallback, null);

}

function getCustomerPrice(materialNo, customerNo, plant, viewID) {
	productHistoryViewID = viewID;

	filters = [{
		field : 'Customer',
		value : customerNo,
	}, {
		field : 'Material',
		value : materialNo,
	}, {
		field : 'Plant',
		value : plant,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getCustomerPriceOData, filterString, successCustomerPriceCallback, errCallback, null);
}

function getProductAtpList(materialNo, plant) {

	filters = [{
		field : 'Material',
		value : materialNo,
	}, {
		field : 'Plant',
		value : plant,
	}];

	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getStockAtpOData, filterString, successProductAtpListCallback, errCallback, null);
}

function getProductSalesHistoryList(materialNo, skippedRecords, viewID) {
	productHistoryViewID = viewID;

	filters = [{
		field : 'Customer',
		value : selectedCust,
	}, {
		field : 'Material',
		value : materialNo,
	}, {
		field : 'skip',
		value : skippedRecords,
	}];
	// set skip flag variable
	if (skippedRecords > 0) {
		isSkipProductSalesHistory = true;
	} else {
		isSkipProductSalesHistory = false;
	}
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getProductSalesHistoryOData, filterString, successProductSalesHistoryCallback, errCallback, null);
}

function getShiptoList() {
	filters = [{
		field : 'Customer',
		value : selectedCust,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getShiptoOData, filterString, successShiptoListCallback, errCallback, null);

}

function getActivitySubTypes() {
	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getActivitySubTypeOData, filterString, successActivitySubTypesCallback, errCallback, null);
}

function getVanReplInfo(prodNo, plant, sloc, viewID) {
	productHistoryViewID = viewID;

	filters = [{
		field : 'Material',
		value : prodNo,
	}, {
		field : 'Plant',
		value : plant,
	}, {
		field : 'Sloc',
		value : sloc,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getVanReplOData, filterString, successVanReplInfoCallback, errCallback, null);
}

function getCustomerContactList() {

	filters = [{
		field : 'Customer',
		value : selectedCust,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getContactOData, filterString, successCustomerContactListCallback, errCallback, null);
}

function getCustomerRecentActivity() {
	filters = [{
		field : 'CustomerNo',
		value : selectedCust,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getSalesActivityOData, filterString, successCustomerRecentActivityCallback, errCallback, null);
}

function getCustomerAddress() {
	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSingleCustomerOData, filterString, successCustomerAddress, errCallback, null, selectedCust);
}

function getMaterialUom(prodNo) {
	filters = [{
		field : 'Material',
		value : prodNo
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getMaterialUomOData, filterString, successMaterialUomCallback, errCallback, null);
}

function getOpenInboundDelivery(plant, sloc) {
	filters = [{
		field : 'Plant',
		value : plant,
	}, {
		field : 'Sloc',
		value : sloc,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getOpenInboundDeliveryOData, filterString, successOpenInboundDeliveryList, errCallback, null);
}

function getCustomerList(salesOffice, todayCustomer, allCustomer, allVanCustomer) {

	// call findAll() function
	if (salesOffice == '' || salesOffice == null) {
		salesOffice = '';
	}

	if (todayCustomer == '' || todayCustomer == null) {
		todayCustomer = '';
	}

	if (allCustomer == '' || allCustomer == null) {
		allCustomer = '';
	}

	if (allVanCustomer == '' || allVanCustomer == null) {
		allVanCustomer = '';
	}

	filters = [{
		field : 'inputVan',
		value : 'X',
	}, {
		field : 'inputSalesOff',
		value : salesOffice,
	}, {
		field : 'inputToday',
		value : todayCustomer,
	}, {
		field : 'inputAll',
		value : allCustomer,
	}, {
		field : 'inputAllVan',
		value : allVanCustomer,
	}];

	var filterString = constructFilter(filters, searchString);

	callOData(getCustomerOData, filterString, successCustomerCallback, errCallback, null);
}

function getProductSearch(button) {

	searchString = Ext.ComponentQuery.query('#searchString')[0].getValue();

	if (searchString == '') {
		Ext.Msg.alert('Alert', 'Please enter search string!', function() {
		});
	} else {

		var searchAtpQty;
		var searchAltProduct;
		var searchSupZero;
		var searchPlant;

		searchAtpQty = Ext.ComponentQuery.query('#searchAtpQty')[0].getValue();
		if (Ext.ComponentQuery.query('#searchAltProduct')[0].getChecked()) {
			searchAltProduct = 'X';
		} else {
			searchAltProduct = ' ';
		}

		if (Ext.ComponentQuery.query('#searchSupZero')[0].getChecked()) {
			searchSupZero = 'X';
		} else {
			searchSupZero = ' ';
		}

		searchPlant = Ext.ComponentQuery.query('#searchPlant')[0].getValue();

		filters = [{
			field : 'inputTrex',
			value : 'X',
		}, {
			field : 'inputAtpQty',
			value : searchAtpQty,
		}, {
			field : 'inputSupZero',
			value : searchSupZero,
		}, {
			field : 'inputFindAlt',
			value : searchAltProduct,
		}, {
			field : 'inputCustomer',
			value : (searchPlant == '') ? '' : selectedCust,
		}, {
			field : 'inputPlant',
			value : searchPlant
		}];
		var filterString = constructFilter(filters, searchString);

		mainContainer.setMasked({
			xtype : 'loadmask',
			message : PRODUCT_LOADING,
			indicator : true
		});

		callOData(getProductSearchOData, filterString, successProductSearchCallback, errCallback, null);

	}
}

function savePasswordCredential() {
	if (sharedStorage != null) {
		sharedStorage.setItem(USER_KEY, userId);
		sharedStorage.setItem(PASSWORD_KEY, password);
	}
}

function showIncorrectPasswordAlert() {
	Ext.Msg.alert('Alert', 'Incorrect password. Please enter new password.', function() {
		Ext.ComponentQuery.query('#passwordCredential')[0].setValue('');
		showCredentialScreen(userId);
	});

}

function simulateOrder() {
	// set wait time to half second
	orderHeader = prepareOrderHeader();
	orderItem = prepareOrderItem();
	orderPartner = prepareOrderPartner();

	// prepare data
	var docType, salesOrg, distChan, division, reqDate, poNum, shipCond;

	if (isVanOrder) {
		mobAppType = 'VAN';
	} else {
		mobAppType = 'SAL';
	}

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ORDER_SIMULATE_LOADING,
		indicator : true
	});

	simulatedOrder = {
		items : []
	};
	orderMessage = {
		items : []
	};

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

	callOData(simulateOrderMessageOData, filterString, successSimulateOrderMessageCallback, errCallback, null);
}

function updateCartOrderHeader(record) {
	customerPlant = record.get('plant');
	updateCartPlant(customerPlant);
}

function updateProductSearch(record) {
	var searchPlantField = Ext.ComponentQuery.query('#searchPlant')[0];
	searchPlantField.setValue(record.get('plant'));
}

function updateCartPlant(plant) {
	var deliveringPlantField = Ext.ComponentQuery.query('#deliveringPlant')[0];
	deliveringPlantField.setValue(plant);
}

function prepareOrderHeader() {
	//order_header_in format is
	//DOC_TYPE|SALES_ORG|DIST_CHAN|DIVISION|REQ_DATE|PO_NUMBER|SHIPPING_COND|QUO_VALIDTO_DAT
	var orderHeader = '';
	var requestedDelDate;
	var quoteValidToDate;

	var orderType = Ext.ComponentQuery.query('#orderType')[0].getValue().trim();
	// if it's a van order then change to non-wm order type
	if (isVanOrder) {
		switch (orderType) {
			case 'ZSTK' :
				orderType = 'ZZST';
				break;
			case 'ZMCF' :
				orderType = 'ZZCF';
				break;
			default :
				break;
		}
	}

	var date = Ext.ComponentQuery.query('#deliveryDate')[0].getValue();
	var valDate = Ext.ComponentQuery.query('#validToDate')[0].getValue();
	var poNumber = Ext.ComponentQuery.query('#poNumber')[0].getValue().trim();
	var shippingCond = Ext.ComponentQuery.query('#shippingCond')[0].getValue().trim();

	requestedDelDate = getSAPDate(date);
	quoteValidToDate = getSAPDate(valDate);

	// orderHeader = orderType + '|1010|50|00|' + requestedDelDate + '|' + poNumber + '|' + shippingCond + '|' + quoteValidToDate;
	orderHeader = orderType + '%7C1010%7C50%7C00%7C' + requestedDelDate + '%7C' + poNumber + '%7C' + shippingCond + '%7C' + quoteValidToDate;
	return orderHeader;
}

function getSAPDate(dateInput) {

	var year = dateInput.getFullYear().toString();
	var month = (dateInput.getMonth() + 1).toString();
	var day = dateInput.getDate().toString();

	if (month.length == 1) {
		month = '0' + month;
	}

	if (day.length == 1) {
		day = '0' + day;
	}

	return year + month + day;
}

function prepareOrderItem() {
	var orderItem = '';
	var temp;
	var tempManualPr;
	var storLoc;
	var orderUom;

	// convert product in a cart to string
	//*MATERIAL|REQ_QTY|SALES_UNIT|MANUAL_PRICE|PURCH_NO_S|STOR_LOC|PLANT

	var plant = Ext.ComponentQuery.query('#deliveringPlant')[0].getValue().trim();
	//	var storLoc = Ext.ComponentQuery.query('#storageLoc')[0].getValue().trim();
	if (isVanOrder) {
		storLoc = userStorageLoc;
	} else {
		storLoc = '';
	}

	for (var i = 0; i < productsInCart.items.length; i++) {
		temp = '';
		if (productsInCart.items[i].manualPr == null) {
			tempManualPr = '';
		} else {
			tempManualPr = productsInCart.items[i].manualPr;
		}
		if (i != 0) {
			temp = '%7C';
		}
		if (productsInCart.items[i].orderUom != null) {
			orderUom = productsInCart.items[i].orderUom;
		} else {
			orderUom = productsInCart.items[i].uom;
		}

		// temp += productsInCart.items[i].prodNo + '|' + productsInCart.items[i].orderQty + '|' + productsInCart.items[i].uom + '|' + tempManualPr + '|' + productsInCart.items[i].jobNumber + '|' + storLoc + '|' + plant;
		temp += productsInCart.items[i].prodNo + '%7C' + productsInCart.items[i].orderQty + '%7C' + orderUom + '%7C' + tempManualPr + '%7C' + productsInCart.items[i].jobNumber + '%7C' + storLoc + '%7C' + plant;

		orderItem += temp;
	};

	return orderItem;
}

function prepareOrderPartner() {
	//order_partner format is
	//WE|customerNo|AG|customerNo

	// var orderPartner = 'WE|' + selectedCust + '|AG|' + selectedCust;
	var selectedShipto = Ext.ComponentQuery.query('#shiptoParty')[0].getValue();
	var orderPartner = 'WE%7C' + selectedShipto + '%7CAG%7C' + selectedCust;

	return orderPartner;
}

function createDelivery(orderNo) {

	var signatureValue = Ext.ComponentQuery.query('#signatureField')[0];
	var signatureBase64 = signatureValue.getValue().split(',')[1];
	var deliveryName = "Recipient Name: " + Ext.ComponentQuery.query('#vanConfirmDeliveryName')[0].getValue();
	var deliveryTime = "Delivery Time: " + Ext.ComponentQuery.query('#vanConfirmDeliveryTime')[0].getValue();
	var deliveryGeo = "Geolocation :" + Ext.ComponentQuery.query('#vanConfirmDeliveryGeo')[0].getValue();

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CREATE_DELIVERY_LOADING,
		indicator : true
	});

	deliveryPayload = {
		'SalesOrderNo' : orderNo,
		'Signature' : signatureBase64,
		'Timestamp' : deliveryTime,
		'Geolocation' : deliveryGeo,
		'Recipient' : deliveryName,
	};

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getDeliveryPGIOData, filterString, callCreateDeliveryOData, errCallback, deliveryPayload, null);

}

function generateEmailPDF(delNo, emailDel, emailInv) {

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : EMAIL_LOADING,
		indicator : true
	});

	emailPDFPayload = {
		'Delivery' : delNo,
		'EmailDel' : emailDel,
		'EmailInvoice' : emailInv,
	};

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getEmailPDFOData, filterString, callCreateEmailPDFOData, errCallback, emailPDFPayload, null);

}

function addOrderAttachment(orderNo) {

	var signatureValue = Ext.ComponentQuery.query('#signatureField')[0];
	var signatureBase64 = signatureValue.getValue().split(',')[1];
	var deliveryName = "Recipient Name: " + Ext.ComponentQuery.query('#vanConfirmDeliveryName')[0].getValue();
	var deliveryTime = "Delivery Time: " + Ext.ComponentQuery.query('#vanConfirmDeliveryTime')[0].getValue();
	var deliveryGeo = "Geolocation :" + Ext.ComponentQuery.query('#vanConfirmDeliveryGeo')[0].getValue();

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ADD_ATTACHMENT_LOADING,
		indicator : true
	});

	attachmentPayload = {
		'OrderNo' : orderNo,
		'Signature' : signatureBase64,
		'Timestamp' : deliveryTime,
		'Geolocation' : deliveryGeo,
		'Recipient' : deliveryName,
		'DocumentType' : 'S',
	};

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getAttachmentOData, filterString, callAddAttachmentOData, errCallback, attachmentPayload, null);

}

function createOrder() {
	var inputSample;
	// prepare header text
	var quoteComment = Ext.ComponentQuery.query('#quoteCommentField')[0].getValue();
	var orderComment = Ext.ComponentQuery.query('#orderCommentField')[0].getValue();
	var delInstruction = Ext.ComponentQuery.query('#delInstructionField')[0].getValue();
	quoteComment = removeSpecialCharacter(quoteComment);
	orderComment = removeSpecialCharacter(orderComment);
	delInstruction = removeSpecialCharacter(delInstruction);

	if (isVanOrder) {
		mobAppType = 'VAN';
	} else {
		mobAppType = 'SAL';
	}

	var sampleOrder = Ext.ComponentQuery.query('#sampleOrder')[0].getValue();
	if (sampleOrder == 1) {
		inputSample = 'X';
	} else {
		inputSample = '';
	}

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ORDER_CREATE_LOADING,
		indicator : true
	});
	var orderHeaderCreate = orderHeader.replace(/%7C/g, '\|');
	var orderItemCreate = orderItem.replace(/%7C/g, '\|');
	var orderPartnerCreate = orderPartner.replace(/%7C/g, '\|');

	orderPayload = {
		'inputOrderHeader' : orderHeaderCreate,
		'inputOrderItem' : orderItemCreate,
		'inputOrderPartner' : orderPartnerCreate,
		'inputAppType' : (mobAppType == null) ? '' : mobAppType.toString(),
		'orderText' : (orderComment == null) ? '' : orderComment.toString(),
		'deliveryText' : (delInstruction == null) ? '' : delInstruction.toString(),
		'quoteText' : (quoteComment == null) ? '' : quoteComment.toString(),
		'inputSample' : inputSample,
	};

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(simulateOrderItemOData, filterString, callCreateOrderOData, errCallback, orderPayload, null);

}

function showConfirmDelivery() {
	var cartOrder = Ext.ComponentQuery.query('cartOrder')[0];
	var now = new Date();

	cartOrder.push({
		xclass : 'PaperVan.view.VanConfirmDelivery',
	});

	button = Ext.ComponentQuery.query('#createOrderButton');
	if (button.length > 0) {
		button[0].setHidden(false);
	}
	button = Ext.ComponentQuery.query('#signatureConfirmButton');
	if (button.length > 0) {
		button[0].setHidden(true);
	}

	navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
	//setup geolocation and timestamp
	var deliveryTimestamp = Ext.ComponentQuery.query('#vanConfirmDeliveryTime')[0].setValue(now.toLocaleString());

}

var getLocationSuccess = function(position) {
	currentGeoLocation = position.coords.latitude + ', ' + position.coords.longitude;
	var deliveryGeolocation = Ext.ComponentQuery.query('#vanConfirmDeliveryGeo')[0].setValue(currentGeoLocation);
};

// onError Callback receives a PositionError object
//
function getLocationError(error) {
	currentGeoLocation = 'Cannot determine location';
	var deliveryGeolocation = Ext.ComponentQuery.query('#vanConfirmDeliveryGeo')[0].setValue(currentGeoLocation);
}

function showOrderSimulation() {
	// cannot move tab when in the order confirmation
	isInOrderConfirmationScreen = true;

	var hasError = false;
	var orderType = Ext.ComponentQuery.query('#orderType')[0].getValue();
	var title;
	var cartOrder = Ext.ComponentQuery.query('cartOrder')[0];

	if (orderType == 'ZSTK' || orderType == 'ZMCF') {
		title = 'Order Confimation';
	} else {
		title = 'Quote Confirmation';
	}

	cartOrder.push({
		xclass : 'PaperVan.view.OrderConfirmation',
		title : title
	});

	// disable changes on all field in OrderDetail
	var cartOrderHeaderDetail = Ext.ComponentQuery.query('cartOrderDetail')[0];
	var allChilds = cartOrderHeaderDetail.getInnerItems();
	for (var i = 0; i < allChilds.length; i++) {
		allChilds[i].setReadOnly(true);
	}

	// hide delete all button
	var button = Ext.ComponentQuery.query('#deleteAllButton');
	if (button.length > 0) {
		button[0].setHidden(true);
	}

	// hide order confirmation
	button = Ext.ComponentQuery.query('#checkoutButton');
	if (button.length > 0) {
		button[0].setHidden(true);
	}

	for (var i = 0; i < orderMessage.items.length; i++) {
		if (orderMessage.items[i].messageType == ERROR_MESSAGE) {
			hasError = true;
			break;
		}
	}

	if (!hasError) {
		if (!isVanOrder) {
			button = Ext.ComponentQuery.query('#createOrderButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
		} else {
			button = Ext.ComponentQuery.query('#signatureConfirmButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
		}
		// show createOrder button

		var totalField = Ext.ComponentQuery.query('#cartTotal');
		var totalValue = getOrderTotal();
		if (totalField.length > 0) {
			totalField[0].setValue(number(totalValue));
		}
		var gstField = Ext.ComponentQuery.query('#cartGSTTotal');
		var gstValue = totalValue * 0.1;
		gstField[0].setValue(number(gstValue));

		var grossTotalField = Ext.ComponentQuery.query('#cartGrossTotal');
		var grossValue = totalValue + gstValue;
		grossTotalField[0].setValue(number(grossValue));
	}

}

function getOrderTotal() {
	var total = 0;
	for (var i = 0; i < simulatedOrder.items.length; i++) {
		total = total + parseFloat(simulatedOrder.items[i].netValue);
	}
	return total;
}

function deleteCustomer() {
	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSingleCustomerOData, filterString, callDeleteCustomerOData, errCallback, null, selectedCust);
}

function postGoodReceiptOpenInboundDelivery() {

	if (openInboundDeliveryData.length > 0) {
		openInboundDeliveryPayload = {
			'DeliveryNo' : openInboundDeliveryData[0]
		};
		var filterString = '';
		callOData(grInboundDeliveryOData, filterString, successGoodReciptOpenInboundDelivery, errCallback, openInboundDeliveryPayload, openInboundDeliveryData[0]);
	}
}

function changeCustomer(name1, name2, street, postcode, suburb, region, email, tel, fax) {

	customerDetailPayload = {
		'CustomerNo' : selectedCust,
		'Name1' : (name1 == null) ? '' : name1.toString(),
		'Name2' : (name2 == null) ? '' : name2.toString(),
		'Street' : (street == null) ? '' : street.toString(),
		'PostCode' : (postcode == null) ? '' : postcode.toString(),
		'City' : (suburb == null) ? '' : suburb.toString(),
		'Region' : (region == null) ? '' : region.toString(),
		'Email' : (email == null) ? '' : email.toString(),
		'Tel' : (tel == null) ? '' : tel.toString(),
		'Fax' : (fax == null) ? '' : fax.toString()
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CUSTOMER_CHANGE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSingleCustomerOData, filterString, callChangeCustomerOData, errCallback, customerDetailPayload, selectedCust);
}

function changeVanSchedule(visitPeriod, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
	// new a mbo instance
	customerVanSchedulePayload = {
		'CustomerNo' : selectedCust,
		'VisitPeriod' : (visitPeriod == null) ? '' : visitPeriod.toString(),
		'Monday' : (monday == null) ? '' : monday.toString(),
		'Tuesday' : (tuesday == null) ? '' : tuesday.toString(),
		'Wednesday' : (wednesday == null) ? '' : wednesday.toString(),
		'Thursday' : (thursday == null) ? '' : thursday.toString(),
		'Friday' : (friday == null) ? '' : friday.toString(),
		'Saturday' : (saturday == null) ? '' : saturday.toString(),
		'Sunday' : (sunday == null) ? '' : sunday.toString()
	};

	filters = [{
		field : 'inputVan',
		value : 'X',
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getCustomerOData, filterString, callChangeVanScheduleOData, errCallback, customerVanSchedulePayload, selectedCust);
}

function updateVanReplInfo(prodNo, plant, sloc, minStk, maxStk) {
	updateVanReplKey = [{
		'KeyField' : 'Material',
		'Value' : prodNo
	}, {
		'KeyField' : 'Plant',
		'Value' : plant
	}, {
		'KeyField' : 'Sloc',
		'Value' : sloc
	}];
	vanReplPayload = {
		'Material' : prodNo,
		'Plant' : plant,
		'Sloc' : sloc,
		'MinStk' : minStk.toString(),
		'MaxStk' : maxStk.toString()
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : VAN_REPL_CHANGE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getVanReplOData, filterString, callUpdateVanReplOData, errCallback, vanReplPayload, updateVanReplKey);
}

function createCustomer(name1, name2, street, postcode, suburb, region, email, tel, fax) {

	customerDetailPayload = {
		'Name1' : (name1 == null) ? '' : name1.toString(),
		'Name2' : (name2 == null) ? '' : name2.toString(),
		'Street' : (street == null) ? '' : street.toString(),
		'PostCode' : (postcode == null) ? '' : postcode.toString(),
		'City' : (suburb == null) ? '' : suburb.toString(),
		'Region' : (region == null) ? '' : region.toString(),
		'Email' : (email == null) ? '' : email.toString(),
		'Tel' : (tel == null) ? '' : tel.toString(),
		'Fax' : (fax == null) ? '' : fax.toString()
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CUSTOMER_CREATE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSingleCustomerOData, filterString, callCreateCustomerOData, errCallback, customerDetailPayload, null);
}

function createContact(firstName, lastName, tel, email, title, department, functions) {

	contactPayload = {
		'Customer' : selectedCust,
		'FirstName' : (firstName == null) ? '' : firstName.toString(),
		'LastName' : (lastName == null) ? '' : lastName.toString(),
		'Email' : (email == null) ? '' : email.toString(),
		'Phone' : (tel == null) ? '' : tel.toString(),
		'Title' : (title == null) ? '' : title.toString(),
		'Department' : (department == null) ? '' : department.toString(),
		'Function' : (functions == null) ? '' : functions.toString(),
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CONTACT_CREATE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getContactOData, filterString, callCreateContactOData, errCallback, contactPayload, null);

}

function changeContact(firstName, lastName, tel, email, title, department, functions) {

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CONTACT_CHANGE_LOADING,
		indicator : true
	});

	contactPayload = {
		'Customer' : selectedCust,
		'ContactNo' : selectedContact,
		'FirstName' : (firstName == null) ? '' : firstName.toString(),
		'LastName' : (lastName == null) ? '' : lastName.toString(),
		'Email' : (email == null) ? '' : email.toString(),
		'Phone' : (tel == null) ? '' : tel.toString(),
		'Title' : (title == null) ? '' : title.toString(),
		'Department' : (department == null) ? '' : department.toString(),
		'Function' : (functions == null) ? '' : functions.toString()
	};

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getContactOData, filterString, callChangeContactOData, errCallback, contactPayload, null);
}

function deleteVanSchedule() {

	customerVanSchedulePayload = {
		'CustomerNo' : selectedCust,
		'inputDeleteFlag' : 'X'
	};

	filters = [{
		field : 'inputVan',
		value : 'X',
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getCustomerOData, filterString, callDeleteVanScheduleOData, errCallback, customerVanSchedulePayload, selectedCust);
}

function getVanProduct() {

	filters = [{
		field : 'inputVanProd',
		value : 'X',
	}, {
		field : 'inputCustomer',
		value : selectedCust,
	}, {
		field : 'inputCustPrice',
		value : '',
	}];
	var filterString = constructFilter(filters, searchString);

	callOData(getVanProductOData, filterString, successVanProductCallback, errCallback, null);

}

function deleteContact() {
	Ext.toast('Deleting the contact...', 1500);

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getContactOData, filterString, callDeleteContactOData, errCallback, null, selectedContact);
}

function createDispute(title, category, contact, referenceDoc, claimAmount, text) {

	text = removeSpecialCharacter(text);

	disputePayload = {
		'CustomerNo' : selectedCust,
		'CaseTitle' : (title == null) ? '' : title.toString(),
		'Category' : (category == null) ? '' : category.toString(),
		'ContactNo' : (contact == null) ? '' : contact.toString(),
		'ReferenceDoc' : (referenceDoc == null) ? '' : referenceDoc.toString(),
		'ClaimAmount' : (claimAmount == null) ? '' : claimAmount.toString(),
		'CaseText' : (text == null) ? '' : text.toString()
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : DISPUTE_CREATE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getDisputeOData, filterString, callCreateDisputeOData, errCallback, disputePayload, null);
}

function createVanRepl(plant, sloc) {

	vanReplPayload = {
		'Plant' : plant,
		'Sloc' : sloc,
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : VAN_REPL_CREATE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getVanReplOData, filterString, callCreateVanReplOData, errCallback, vanReplPayload, null);
}

function changeSalesActivity(actDate, actContact, actText, actType, actReason, actOutcome, actVol, actQty, actAmount, actSalesDoc, actOppType) {

	actText = removeSpecialCharacter(actText);

	activityPayload = {
		'ActNo' : selectedSalesAct,
		'CustomerNo' : selectedCust,
		'ContactNo' : (actContact == null) ? '' : actContact.toString(),
		'ToDate' : (actDate == null) ? '' : actDate.toString(),
		'ActText' : (actText == null) ? '' : actText.toString(),
		'ActType' : (actType == null) ? '' : actType.toString(),
		'ActReason' : (actReason == null) ? '' : actReason.toString(),
		'ActOutcome' : (actOutcome == null) ? '' : actOutcome.toString(),
		'Volume' : (actVol == null) ? '0' : actVol.toString(),
		'Quantity' : (actQty == null) ? '0' : actQty.toString(),
		'Amount' : (actAmount == null) ? '0' : actAmount.toString(),
		'SalesDoc' : (actSalesDoc == null) ? '' : actSalesDoc.toString(),
		'OpportunityType' : (actOppType == null) ? '' : actOppType.toString()
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ACTIVITY_CHANGE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSalesActivityOData, filterString, callChangeSalesActivityOData, errCallback, activityPayload, null);

}

function createSalesActivity(actDate, actContact, actText, actType, actReason, actOutcome, actVol, actQty, actAmount, actSalesDoc, actOppType) {

	actText = removeSpecialCharacter(actText);

	activityPayload = {
		'CustomerNo' : selectedCust,
		'ContactNo' : (actContact == null) ? '' : actContact.toString(),
		'ToDate' : (actDate == null) ? '' : actDate.toString(),
		'ActText' : (actText == null) ? '' : actText.toString(),
		'ActType' : (actType == null) ? '' : actType.toString(),
		'ActReason' : (actReason == null) ? '' : actReason.toString(),
		'ActOutcome' : (actOutcome == null) ? '' : actOutcome.toString(),
		'Volume' : (actVol == null) ? '0' : actVol.toString(),
		'Quantity' : (actQty == null) ? '0' : actQty.toString(),
		'Amount' : (actAmount == null) ? '0' : actAmount.toString(),
		'SalesDoc' : (actSalesDoc == null) ? '' : actSalesDoc.toString(),
		'OpportunityType' : (actOppType == null) ? '' : actOppType.toString()
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ACTIVITY_CREATE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSalesActivityOData, filterString, callCreateSalesActivityOData, errCallback, activityPayload, null);
}

function refreshData(successful) {

	// allow to change tab
	isInOrderConfirmationScreen = false;

	if (successful) {
		deleteAllInCart();
		updateCartBadgeText();
		updateCartStore();
		updateCartTotal();
	}
	var cartOrder = Ext.ComponentQuery.query('cartOrder')[0];
	if (isVanOrder) {
		// back twice for van order
		cartOrder.pop(2);
	} else {
		cartOrder.pop(1);
	}
	orderNumber = null;
	// show createOrder button
	button = Ext.ComponentQuery.query('#createOrderButton');
	if (button.length > 0) {
		button[0].setHidden(true);
	}

	button = Ext.ComponentQuery.query('#signatureConfirmButton');
	if (button.length > 0) {
		button[0].setHidden(true);
	}

	// hide order confirmation
	button = Ext.ComponentQuery.query('#checkoutButton');
	if (button.length > 0) {
		button[0].setHidden(false);
	}

	var cartOrderHeaderDetail = Ext.ComponentQuery.query('cartOrderDetail')[0];
	var allChilds = cartOrderHeaderDetail.getInnerItems();
	for (var i = 0; i < allChilds.length; i++) {
		if (allChilds[i].getItemId() != 'shippingAdr') {
			allChilds[i].setReadOnly(false);
		}
		if (allChilds[i].getItemId() == 'poNumber') {
			allChilds[i].setValue('');
		}
		if (allChilds[i].getItemId() == 'quoteCommentField') {
			allChilds[i].setValue('');
		}
		if (allChilds[i].getItemId() == 'orderCommentField') {
			allChilds[i].setValue('');
		}
		if (allChilds[i].getItemId() == 'delInstructionField') {
			allChilds[i].setValue('');
		}
	}

	mainContainer.unmask();
}

function isP1Customer(status) {
	if (status == 'P1') {
		return 'X';
	} else {
		return '';
	}
}

function clearActivityText() {
	Ext.ComponentQuery.query('#activityCreationTextArea')[0].setValue('');
}

function clearDisputeView() {
	Ext.ComponentQuery.query('#disputeCreationTextArea')[0].setValue('');
	Ext.ComponentQuery.query('#disputeClaimAmount')[0].setValue(0);
	Ext.ComponentQuery.query('#disputeRefDoc')[0].setValue('');
	Ext.ComponentQuery.query('#disputeTitle')[0].setValue('');
}

function customerTabPop() {
	var customerTab = Ext.ComponentQuery.query('customerTab')[0];
	customerTab.pop();
}

function updateRecentCustomerDelete() {
	customerData.items.remove({
		custNo : selectedCust
	});
	selectedCust = '';
}

function updateRecentContactDelete() {
	contactData.items.remove({
		contNo : selectedContact
	});
	availableContact.remove({
		value : selectedContact
	});
	selectedContact = '';
}

function updateRecentVanScheduleDelete() {

	for (var i = 0; i < customerData.items.length; i++) {
		if (customerData.items[i].custNo == selectedCust) {
			customerData.items[i].visitPeriod = '';
			customerData.items[i].monday = '';
			customerData.items[i].tuesday = '';
			customerData.items[i].wednesday = '';
			customerData.items[i].thursday = '';
			customerData.items[i].friday = '';
			customerData.items[i].saturday = '';
			customerData.items[i].sunday = '';
		}
	}
}

function updateRecentContactChange() {
	for (var i = 0; i < contactData.items.length; i++) {
		if (contactData.items[i].contNo == selectedContact) {
			contactData.items[i].firstName = Ext.ComponentQuery.query('#contactChFirstText')[0].getValue();
			contactData.items[i].lastName = Ext.ComponentQuery.query('#contactChLastText')[0].getValue();
			contactData.items[i].email = Ext.ComponentQuery.query('#contactChEmail')[0].getValue();
			contactData.items[i].phone = Ext.ComponentQuery.query('#contactChTel')[0].getValue();
			contactData.items[i].title = Ext.ComponentQuery.query('#contactChTitle')[0].getValue();
			contactData.items[i].functions = Ext.ComponentQuery.query('#contactChFunction')[0].getValue();
			contactData.items[i].department = Ext.ComponentQuery.query('#contactChDepartment')[0].getValue();
			contactData.items[i].contName = contactData.items[i].title + ' ' + contactData.items[i].firstName + ' ' + contactData.items[i].lastName;
			updateContactStore();

			availableContact.remove({
				value : selectedContact
			});
			// update available contacts used in activity and dispute creation
			var contactItem = {};
			contactItem.text = contactData.items[i].contName;
			contactItem.value = contactData.items[i].contNo;
			availableContact.push(contactItem);

		}
	};;
}

// convert SAP date format YYYYMMDD to DD-MM-YYYY
function convertToDMYDate(sapDate) {
	var year = sapDate.substring(0, 4);
	var month = sapDate.substring(4, 6);
	var day = sapDate.substring(6, 8);
	return day + '-' + month + '-' + year;
}

function moveToSelectedCustomer() {
	var moveToIndex;
	var custList = Ext.ComponentQuery.query('customerList')[0];
	var scroller = custList.getScrollable().getScroller();

	customerData.items = customerData.items.sortBy('custName');
	moveToIndex = customerData.items.findIndex({
		custNo : selectedCust
	});
	custList.select(moveToIndex);

	var containerSize = scroller.getContainerSize().y, size = scroller.getSize().y, maxOffset = size - containerSize, offsetTop = custList.getItemMap().map[moveToIndex], offset = (offsetTop > maxOffset) ? maxOffset : offsetTop;

	scroller.scrollTo(0, offset - 15, true);
	if (custList.updatedItems.length > 0 && (!custList.scheduledTasks || custList.scheduledTasks.length === 0)) {
		custList.refreshScroller();
	}
}

function is_email(email) {
	if (email != '') {
		var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailReg.test(email);
	} else {
		return true;
	}
}

function removeSpecialCharacter(inText) {
	var outText;
	inText = inText.replace(/"/g, '\'');
	inText = inText.replace(/[`~!^;:]/gi, '');
	inText = inText.replace(/{/g, '\(');
	inText = inText.replace(/}/g, '\)');
	inText = inText.replace(/</g, '\(');
	inText = inText.replace(/>/g, '\)');
	outText = inText;
	return outText;
}

function positionText(functions) {
	return CONTACT_FUNCTION.find({
		value : functions
	}).text;
}

function getCustomerDetail() {
	if (selectedCust != null) {
		// call R3 BAPI to get list of contacts, disputes and customer address
		Ext.toast('Please wait while loading customer information', 2000);
		getCustomerContactList();
		getCustomerRecentActivity();
		getDisputList();
		getCustomerAddress();
		//call customer main view
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'customerMain',
			id : 'customerMain',
			title : 'Customer Detail'
		});

	} else {
		Ext.toast('Please select customer before proceeding', 1500);
	}
}

function updateCustomerListTitle() {
	var customerList = Ext.ComponentQuery.query("customerTab")[0];
	customerList.getNavigationBar().setTitle(userStorageLoc);
}

function updateCustomerList(salesOffice, todayCustomer, allCustomer, allVanCustomer) {
	var customerStore = Ext.getStore('customer');
	var customerList = Ext.ComponentQuery.query("customerList")[0];
	customerStore.clearFilter();
	// if (todayCustomer == 'X') {
	// customerList.setGrouped(false);
	// customerStore.setGrouper(null);
	// customerStore.sort('sequence', 'ASC');
	// } else {
	customerStore.setGrouper(customerGrouper);
	customerStore.sort('custName', 'ASC');
	customerList.setGrouped(true);
	// }
}

function getVisitPeriodText(visitPeriodKey) {
	if (visitPeriodKey != '') {
		return VISITING_PERIOD[VISITING_PERIOD.findIndex({
			value : visitPeriodKey
		})].text;
	} else {
		return 'No schedule';
	}
}

function getProductBatch(prodNo) {
	var productBatch = [{
		text : 'Empty',
		value : ''
	}];
	var tempBatch = {};
	var relatedBatch = vanBatchResultData.items.findAll({
		prodNo : prodNo
	});

	for (var i = 0; i < relatedBatch.length; i++) {
		tempBatch = {};
		tempBatch.text = relatedBatch[i].batch;
		tempBatch.value = relatedBatch[i].batch;
		productBatch.push(tempBatch);
	};

	return productBatch;
}

function setProdDescBatchOption(itemId, prodNo) {
	var prodDesc = Ext.ComponentQuery.query(itemId)[0];
	var prodDescItems = prodDesc.getItems();
	var batchIndex = prodDescItems.keys.findIndex('batchNumber');
	var batchSelect = prodDescItems.items[batchIndex];
	var productBatch = getProductBatch(prodNo);
	batchSelect.setOptions(productBatch);
	batchSelect.setHidden(false);
}

function constructFilter(filters, searchString) {
	var filterString = '?$format=json';
	// var filterString = '';

	if (searchString != null && searchString != '') {
		filterString += '&search=' + searchString;
	}

	for (var i = 0; i < filters.length; i++) {
		// construct filters
		if (filters[i].field != 'skip' && filters[i].field != 'top') {
			if (i != 0) {
				filterString += ' and ';
			} else {
				filterString += '&$filter=';
			}
			if (filters[i].type == 'int') {
				// if value is integer, don't put ' in the filter string
				filterString += filters[i].field + ' eq ' + filters[i].value;
			} else {
				filterString += filters[i].field + ' eq ' + "'" + filters[i].value + "'";
			}
		}

		// construct skip and top
		if (filters[i].field == 'skip' || filters[i].field == 'top') {
			filterString += '&$' + filters[i].field + '=' + filters[i].value;
		}
	};
	return filterString;
}

function readBarcodeSuccess(result) {
	Ext.toast("Barcode is: " + result.text);
	Ext.toast("Barcode format: " + result.format);
}

function readBarcodeFail(error) {
	Ext.toast(error);
}

function onCustomerKeySearch() {
	var queryString = Ext.ComponentQuery.query('#custSearch')[0].getValue();
	if (selectedSalesOffice == '') {
		var store = Ext.getStore('customer');
		store.clearFilter();

		if (queryString) {
			var thisRegEx = new RegExp(queryString, "i");
			store.filterBy(function(record) {
				if (thisRegEx.test(record.get('custName')) || thisRegEx.test(record.get('custNo'))) {
					return true;
				};
				return false;
			});
		}
	} else {
		var queryLength = queryString.length;
		if (queryLength >= MIN_CHAR_SEARCH) {
			searchString = queryString;
			getCustomerList(selectedSalesOffice);
			searchString = '';
		}
	}
}

function onVanProductSearch() {
	var queryString = Ext.ComponentQuery.query('#vanProductSearch')[0].getValue();

	var store = Ext.getStore('vanProductResult');
	store.clearFilter();

	if (queryString) {
		var thisRegEx = new RegExp(queryString, "i");
		store.filterBy(function(record) {
			if (thisRegEx.test(record.get('prodDesc')) || thisRegEx.test(record.get('prodNo'))) {
				return true;
			};
			return false;
		});
	}
}

function filterCustomerByDay(day) {
	var store = Ext.getStore('customer');
	store.clearFilter();

	store.filterBy(function(record) {
		switch (day) {
			case 1:
				if (record.get('monday') == 'X') {
					return true;
				} else {
					return false;
				}
				break;
			case 2:
				if (record.get('tuesday') == 'X') {
					return true;
				} else {
					return false;
				}
				break;
			case 3:
				if (record.get('wednesday') == 'X') {
					return true;
				} else {
					return false;
				}
				break;
			case 4:
				if (record.get('thursday') == 'X') {
					return true;
				} else {
					return false;
				}
				break;
			case 5:
				if (record.get('friday') == 'X') {
					return true;
				} else {
					return false;
				}
				break;
			case 6:
				if (record.get('saturday') == 'X') {
					return true;
				} else {
					return false;
				}
				break;
			case 7:
				if (record.get('sunday') == 'X') {
					return true;
				} else {
					return false;
				}
				break;
			default :
				return true;
				break;
		}
	});
}

function updateVanReplUpdateScreen(viewID, vanReplData) {
	var vanReplUpdateItemId;
	var vanReplFieldSet;
	var allItems;
	var minReplQty;
	var replData;
	switch (viewID) {
		case 'vanProductDescMain':
			vanReplUpdateItemId = '#vanVanReplUpdate';
			replData = vanVanReplData;
			break;
		case 'searchProductDescMain':
			vanReplUpdateItemId = '#searchVanReplUpdate';
			replData = searchVanReplData;
			break;
		case 'previousProductDescMain':
			vanReplUpdateItemId = '#previousVanReplUpdate';
			replData = previousVanReplData;
			break;
	};
	vanReplFieldSet = Ext.ComponentQuery.query(vanReplUpdateItemId)[0].items.items[0];
	// get all items under van fieldset
	allItems = vanReplFieldSet.getItems().items;
	for (var i = 0; i < allItems.length; i++) {
		// set delQty textfield
		if (allItems[i].getItemId() == 'delQtyField') {
			minReplQty = replData.delQty + ' ' + replData.delUom;
			allItems[i].setValue(minReplQty);
		}

		// when delQty = 0; meaning no limit in the input field
		if (replData.delQty == 0) {
			if (allItems[i].getItemId() == 'replMinField') {
				allItems[i].setHidden(false);
				allItems[i].setValue(replData.minStk);
			}
			if (allItems[i].getItemId() == 'replMaxField') {
				allItems[i].setHidden(false);
				allItems[i].setValue(replData.maxStk);
			}
			if (allItems[i].getItemId() == 'replMinSpinner') {
				allItems[i].setHidden(true);
			}
			if (allItems[i].getItemId() == 'replMaxSpinner') {
				allItems[i].setHidden(true);
			}
		} else {
			if (allItems[i].getItemId() == 'replMinField') {
				allItems[i].setHidden(true);
			}
			if (allItems[i].getItemId() == 'replMaxField') {
				allItems[i].setHidden(true);
			}
			if (allItems[i].getItemId() == 'replMinSpinner') {
				allItems[i].setHidden(false);
				allItems[i].setValue(replData.minStk);
				allItems[i].setStepValue(replData.delQty);
			}
			if (allItems[i].getItemId() == 'replMaxSpinner') {
				allItems[i].setHidden(false);
				allItems[i].setValue(replData.maxStk);
				allItems[i].setStepValue(replData.delQty);
			}
		}
	};
}

function showUom(uom, orderUom) {
	var returnUom;
	if (orderUom != null) {
		returnUom = orderUom;
	} else {
		returnUom = uom;
	}
	return returnUom;
}
