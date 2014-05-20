Ext.define('PaperVan.controller.Controller', {
	extend : 'Ext.app.Controller',

	config : {
		profile : Ext.os.deviceType.toLowerCase(),
		refs : {
			mainPanel : 'mainPanel',
			customerList : 'customerList',
			exitButton : 'exitButton',
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
			favoriteList : 'favoriteList',
			orderMessageList : 'orderMessageList',
			orderItemList : 'orderItemList',
			customerMain : 'customerMain',
			activityCreation : 'activityCreation',
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
		},
		control : {

			'vanProductTab button[itemId=vanAddToCartButton]' : {
				tap : 'onAddToCartTap'
			},

			vanProductTab : {
				back : 'onVanProductTabBack',
				pop : 'onVanProductTabBack',
			},

			'vanProductTab button[itemId=vanRefreshButton]' : {
				tap : 'onVanRefreshButtonTap',
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

			activityCreation : {
				initialize : 'onActivityCreationInit',
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
				keyup : 'onSearchKeyUp'
			},
			'mainPanel searchfield[itemId=vanProductSearch]' : {
				clearicontap : 'onClearVanSearch',
				keyup : 'onVanSearchKeyUp'
			},
			customerList : {
				select : 'onCustomerListSelect',
				itemdoubletap : 'onCustomerListDoubleTap',
				initialize : 'onCustListIniialize'
			},

			exitButton : {
				tap : 'onExitTap'
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

			'favoriteTab button[itemId=favoriteSortButton]' : {
				tap : 'onSortTap'
			},

			favoriteList : {
				activate : 'onFavoriteListActivate',
				select : 'onFavoriteListSelect'
			},

			'favoriteTab button[itemId=favoriteAddToCartButton]' : {
				tap : 'onAddToCartTap'
			},

			'credentialScreen button[itemId=loginButton]' : {
				tap : 'onLoginButtonTap'
			},

			'credentialScreen passwordfield[itemId=passwordCredential]' : {
				change : 'onLoginButtonTap'
			},

			// 'customerTab button[itemId=regionalCustomerButton]' : {
			// tap : 'onRegionalCustomerButtonTap'
			// },
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

	onVanRefreshButtonTap : function(button) {
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
			getCustomerList(salesOffice, todayCustomerFlag, allCustomerFlag, allVanCustomerFlag);
		}
	},

	onCustomerDetailOptionShow : function(option) {
		//console.log('detail option show');
		if (selectedCustRecord.accountGroup == 'Z001') {
			Ext.ComponentQuery.query('#deleteCustomerOption')[0].setHidden(true);
		} else {
			Ext.ComponentQuery.query('#deleteCustomerOption')[0].setHidden(false);
		}
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
			Ext.ComponentQuery.query('#opportunityTypeSelect')[0].setHidden(false);
			Ext.ComponentQuery.query('#volOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#qtyOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#amountOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#salesDocNo')[0].setHidden(false);
		} else {
			reason = ACTIVITY_REASON.findAll({ text: 'Regular Sales Call' })[0].value;
			// hide opportunity related fields
			Ext.ComponentQuery.query('#opportunityTypeSelect')[0].setHidden(true);
			Ext.ComponentQuery.query('#volOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#qtyOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#amountOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#salesDocNo')[0].setHidden(true);
		}
		reasonSelect.setValue(reason);
	},

	onActivityCreationInit : function() {
		// update contact select field in activity creation screens
		var availableContactField = Ext.ComponentQuery.query('#availableContactSelect')[0];
		availableContactField.setOptions(availableContact);
		availableContactField.setReadOnly(isContactReadOnly);

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
			button = Ext.ComponentQuery.query('#customerExitButton');
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
		tempActivityText = record.getData().text;
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'activityDisplay',
		});
		Ext.ComponentQuery.query('#activityDisplayTextArea')[0].setValue(tempActivityText);

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
			if (hwc.isIOS) {
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
						submitDispute(title, category, contact, referenceDoc, claimAmount, disputeText);
					}
				}, this // scope of the controller
				);
			}
		} else {
			Ext.Msg.alert('Alert', 'Please enter text before submit a case.', function() {
			});
		}
	},

	onActivitySubmit : function(button) {
		var actDate = Ext.ComponentQuery.query('#activityDate')[0].getValue();
		var formattedDate = dateFormat(actDate, 'yyyy-mm-dd');
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
			if (hwc.isIOS) {
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
						submitActivity(formattedDate, selectedContact, actText, actType, actReason, actOutcome, actVol, actQty, actAmount, actSalesDoc, actOppType);
					}
				}, this // scope of the controller
				);
			}
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
		var button = Ext.ComponentQuery.query('#customerExitButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
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
		var button = Ext.ComponentQuery.query('#customerExitButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
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
		var button = Ext.ComponentQuery.query('#customerExitButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
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
			var button = Ext.ComponentQuery.query('#vanExitButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}

			button = Ext.ComponentQuery.query('#vanRefreshButton');
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
			var button = Ext.ComponentQuery.query('#customerExitButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
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

			// show exit button
			button = Ext.ComponentQuery.query('#cartExitButton');
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
			if (hwc.isIPad()) {
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

		if (newValue == 'ZSTK') {
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
			})
		} else if (poValue == '') {
			Ext.Msg.alert('Cart', 'Please enter PO number.', function() {
				// move to order header screen
				var cartTab = Ext.ComponentQuery.query('#cartTab')[0];
				cartTab.setActiveItem(1);
			})
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
					if (hwc.isIOS()) {
						getOrderConfirmation();
					} else {
						showOrderSimulation();
					}

				}
			});

		}
	},

	onCustListIniialize : function() {
		console.log('customer List is init');
		//save initi group to memory for later use
		customerGrouper = Ext.getStore('customer').getGrouper();
		if (hwc.isWindows) {
			updateCustomerStore();
		}
	},

	onChangeTab : function(mainPanel, value, oldValue) {
		console.log('tab changes: ' + value.getItemId());

		if (!isInOrderConfirmationScreen) {
			if (value.getItemId() != 'customerTab') {
				if (selectedCust == null) {
					Ext.Msg.alert('Alert', 'Please select customer before proceeding', function() {
						// mainContainer.setActiveItem('#customerTab');
					})
					return false;
				} else if (value.getItemId() == 'vanProductTab' && vanProdResultData.items.length <= 0) {
					if (!hwc.isWindows()) {
						getVanProduct();
					} else {
						// for testing
						vanProdResultData = testPrevData;
						updateVanProductResultStore();
					}
				}
			}
		} else {
			return false;
		}

	},

	onLoginButtonTap : function(button) {
		console.log('login tapped');
		var userName;
		var password;

		var usernameField = Ext.ComponentQuery.query('#userIdCredential');
		if (usernameField.length > 0) {
			userName = usernameField[0].getValue();
		}

		var passwordField = Ext.ComponentQuery.query('#passwordCredential');
		if (passwordField.length > 0) {
			password = passwordField[0].getValue();
		}
		console.log('Password: ' + password);
		validateCredentials(userName, password);
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
			} else if (pickerId == 'favorite') {
				var store = Ext.getStore('favorite');
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

	// when product is selected then save product record in
	// selectedProduct variable
	// and display product description
	onFavoriteListSelect : function(list, record) {

		// save select record
		selectedProduct = record.getData();

		// call Product Description screen
		list.up('favoriteTab').push({
			xtype : 'productDesc',
			data : selectedProduct,
			id : 'favoriteDesc',
			title : selectedProduct.prodDesc
		});
	},

	onFavoriteListActivate : function() {

		// show exit button
		button = Ext.ComponentQuery.query('#favoriteExitButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}s
		// hidden sort button
		button = Ext.ComponentQuery.query('#favoriteSortButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}

		// hide add button
		button = Ext.ComponentQuery.query('#favoriteAddToCartButton');
		if (button.length > 0) {
			button[0].setHidden(true);
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

			// showexit button
			button = Ext.ComponentQuery.query('#previousPurchaseExitButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
		}
	},

	onPreviousPurchaseActivate : function() {

		// hidden exit button
		button = Ext.ComponentQuery.query('#previousPurchaseExitButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

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
		if (!hwc.isWindows()) {
			if (newValue != '0') {
				getPreviousPurchase(newValue);
			}
		} else {
			// for testing
			prevProdData = testPrevData;
			Ext.ComponentQuery.query('previousPurchaseTab')[0].push({
				xtype : 'previousPurchaseList',
				title : 'Last ' + days + ' Days'
			});
			updatePreviousPurchaseStore();

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

			// call Product Description screen
			list.up('cartOrder').push({
				xtype : 'productDesc',
				data : selectedProduct,
				id : 'cartProductDesc',
				title : selectedProduct.prodDesc
			});

			if (selectedProduct.batch != '') {
				setProdDescBatchOption('#cartProductDesc', selectedProduct.prodNo);
			}

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

				// set batchNumber in the cart
				if (allItems[i].getItemId() == 'batchNumber') {
					allItems[i].setValue(selectedProduct.batch);
				}
			}
		}
	},

	onCartItemDoubleTap : function(list, idx, target, record, event) {

		Ext.Msg.confirm("Delete item?", "Do you want to delete " + record.get('prodDesc') + " from the cart?", function(buttonId) {
			if (buttonId === 'yes') {
				// // TODO when the delete button is clicked, delete an
				// // array in productInCart variable
				deleteItemInCart(idx);
			}
		}, this // scope of the controller
		);
	},

	onProductDescActivate : function(list) {
		// hide delete all button
		var button = Ext.ComponentQuery.query('#deleteAllButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		// hide exit button
		button = Ext.ComponentQuery.query('#cartExitButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		// hide exit button
		button = Ext.ComponentQuery.query('#favoriteExitButton');
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

		// hide sort button
		button = Ext.ComponentQuery.query('#favoriteSortButton');
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
			button = Ext.ComponentQuery.query('#vanRefreshButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}

			// hide exit button
			button = Ext.ComponentQuery.query('#vanExitButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
		}

		// set uom in order qty field
		var orderQtyField = list.down('#orderQty');
		orderQtyField.setLabel('Order Qty (' + selectedProduct.uom + ')');

		// set uom in manual pr field
		var manualPrField = list.down('#manualPr');
		manualPrField.setLabel('Manual Price / ' + selectedProduct.uom);

	},

	// when product is selected then save product record in
	// selectedProduct variable
	// and display product description
	onPreviousPurchaseListSelect : function(list, record) {

		// save select record
		selectedProduct = record.getData();

		// call Product Description screen
		list.up('previousPurchaseTab').push({
			xtype : 'productDesc',
			data : selectedProduct,
			id : 'previousProductDesc',
			title : selectedProduct.prodDesc
		});

	},

	// when product is selected then save product record in
	// selectedProduct variable
	// and display product description
	onProductResultListSelect : function(list, record) {

		// save select record
		selectedProduct = record.getData();
		console.log('product result list is select at: ' + selectedProduct.prodNo);

		// call Product Description screen
		list.up('productTab').push({
			xtype : 'productDesc',
			data : selectedProduct,
			id : 'searchProductDesc',
			title : selectedProduct.prodDesc
		});

	},

	// when product is selected then save product record in
	// selectedProduct variable
	// and display product description
	onVanProductResultListSelect : function(list, record) {

		// save select record
		selectedProduct = record.getData();
		console.log('van product result list is select at: ' + selectedProduct.prodNo);

		// call Product Description screen
		list.up('vanProductTab').push({
			xtype : 'productDesc',
			data : selectedProduct,
			id : 'vanProductDesc',
			title : selectedProduct.prodDesc
		});
		setProdDescBatchOption('#vanProductDesc', selectedProduct.prodNo);

	},

	// when done button is tapped, add update cart item
	onUpdateItemTap : function(button) {

		// copy selectedProduct to temp product by JSON parser
		var tempProduct = JSON.parse(JSON.stringify(selectedProduct));
		var requiredBatch = false;

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

			// set batchNumber
			if (allItems[i].getItemId() == 'batchNumber') {
				tempProduct.batch = allItems[i].getValue();
			}
		}

		if (tempProduct.batch == '') {
			var relatedBatch = vanBatchResultData.items.findAll({
				prodNo : tempProduct.prodNo
			});
			// there is one batch available for selected product
			if (relatedBatch.length == 1) {
				// assign batch automatically
				tempProduct.batch = relatedBatch[0].batch;
			} else if (relatedBatch.length > 1) {
				// more than one batches available but user didn't pick any
				requiredBatch = true;
			}
		}

		if (!requiredBatch) {
			// add temp object to productsInCart variable
			updateToCart(tempProduct);
			updateCartTotal();
			Ext.Msg.alert('Cart', tempProduct.prodDesc + ' has been updated.', function() {
				// return to previous page
				button.up('cartOrder').pop();
			});
		} else {
			Ext.Msg.alert('Warning', 'Batch number is required.', function() {
			});
		}

	},

	// when + button is tapped, add selected product to productsInCart variable
	onAddToCartTap : function(button) {

		// var tempProduct = JSON.parse(JSON.stringify(selectedProduct));
		var tempData;
		var buttonId = button.getItemId();
		var requiredBatch = false;

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

		} else if (buttonId == 'favoriteAddToCartButton') {
			var favoriteDescView = Ext.ComponentQuery.query('#favoriteDesc')[0];
			var allItems = favoriteDescView.items.items;
			tempData = favoriteDescView.getData();
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

			// set batchNumber
			if (allItems[i].getItemId() == 'batchNumber') {
				tempProduct.batch = allItems[i].getValue();
			}
		}

		if (buttonId == 'vanAddToCartButton' && tempProduct.batch == '') {
			var relatedBatch = vanBatchResultData.items.findAll({
				prodNo : tempProduct.prodNo
			});
			// there is one batch available for selected product
			if (relatedBatch.length == 1) {
				// assign batch automatically
				tempProduct.batch = relatedBatch[0].batch;
			} else if (relatedBatch.length > 1) {
				// more than one batches available but user didn't pick any
				requiredBatch = true;
			}
		}

		if (!requiredBatch) {
			// add temp object to productsInCart variable
			addToCart(tempProduct);
			updateCartTotal();
			Ext.Msg.alert('Cart', tempProduct.prodDesc + ' has been added to the cart.', function() {
				// return to previous page
				if (buttonId == 'addToCartButton') {
					button.up('productTab').pop();
				} else if (buttonId == 'preAddToCartButton') {
					button.up('previousPurchaseTab').pop();
				} else if (buttonId == 'vanAddToCartButton') {
					button.up('vanProductTab').pop();
				}
			});
		} else {
			Ext.Msg.alert('Error', 'Batch number is required.', function() {
			});
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
		} else if (buttonId == 'favoriteSortButton') {
			picker.setItemId('favorite');
		} else if (buttonId == 'vanSortButton') {
			picker.setItemId('vanProduct');
		}

		Ext.Viewport.add(picker);
		picker.show();
	},

	// when product tab active, show exit button and hide sort button
	onProductActivate : function(view) {
		console.log('product tab active');
		var button = Ext.ComponentQuery.query('#productExitButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}

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
		var button = Ext.ComponentQuery.query('#vanExitButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}

		button = Ext.ComponentQuery.query('#vanRefreshButton');
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
		var button = Ext.ComponentQuery.query('#productExitButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

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

			if (!hwc.isWindows()) {
				getProductSearch(button);
			} else {
				// for testing
				prodResultData = testPrevData;
				Ext.ComponentQuery.query('productTab')[0].push({
					xtype : 'productResultList'
				});
				updateProductResultStore();
			}
			// atp field is number then calling search
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

	init : function() {
		console.log('Controller initialized');
		// user account validation
		credScreen = Ext.create('PaperVan.view.Credentials');
		Ext.Viewport.add(credScreen);

		if (hwc.isIOS()) {
			// get user name from SUP setting
			userId = hwc.loadSettings().UserName.toUpperCase();
			// initiate shared storage
			sharedStorage = new hwc.SharedStorage();
			// get saved password
			var passwordCredential = sharedStorage.getItem(PASSWORD_KEY);

			if (passwordCredential == null) {
				// no password saved then show credential screen
				showCredentialScreen(userId);
			} else {
				validateCredentials(userId, passwordCredential);
			}

		} else {
			// test in Chrome
			//            selectedCust = '105474';
			userStorageLoc = '1004';
			//            customerPlant = '3610';
			customerData = {
				items : [{
					custName : 'customer 1',
					custNo : '200001',
					creditLimit : 500,
					creditAvailable : 20,
					creditUsed : 400,
					custAddr : '6 Dalmore Dr, Scroresby',
					creditBlock : 'X',
					plant : '3610',
					telNo : '04 1397 7815',
					p1Pts : 999.50,
					p1Status : 'P1',
					accountGroup : 'Z001',
					sequence : 2,
					visitPeriod : 'D'
				}, {
					custName : 'customer 2',
					custNo : '200002',
					creditLimit : 500,
					creditAvailable : 20,
					creditUsed : 400,
					custAddr : '6 Dalmore Dr, Scroresby',
					creditBlock : 'X',
					plant : '3610',
					telNo : '04 1397 7815',
					p1Pts : 999.50,
					p1Status : 'P1',
					accountGroup : 'Z005',
					sequence : 1,
					address : '5 shaw street, ashwood, 3147',
					visitPeriod : 'W',
					monday : 'X',
					tuesday : '',
					wednesday : '',
					thursday : 'X',
					friday : '',
					saturday : '',
					sunday : '',
				}]
			};

			contactData = {
				items : [{
					contName : 'Pan J2',
					contNo : '123456',
					functions : '02',
					department : '0002',
					title : 'Mr.',
					phone : '04 1397 7815',
					email : 'pan.jittibophit@spicers.com.au',
					type : 'Contact',
					firstName : 'Pan',
					lastName : 'J2',
				}, {
					contName : 'Pan Jittibophit',
					contNo : '1234567',
					functions : '03',
					department : '0003',
					title : 'Mrs.',
					phone : '04 1397 7815',
					email : 'pan.jittibophit@spicers.com.au',
					type : 'Contact',
					firstName : 'Pan',
					lastName : 'Jittibophit',
				}]
			};

			availableContact = [{
				text : 'Pan Jittibophit',
				value : '145789'
			}, {
				text : 'Pan 2',
				value : '145500'
			}];
			isContactReadOnly = false;

			activityData = {
				items : [{
					actNo : '10000001',
					contName : 'Pan Jittibophit',
					contNo : '123456',
					fromDate : '20131010',
					toDate : '20131011',
					text : 'Optus Coverage Maps currently printed on Dalton Impress Mattt 115 gsm. Optus interested in the environment so rec Revive Silk 115 gsm instead. Nick at Lithocraft to requote as more costly & run fold tests. Sheets supplied.',
					createdBy : 'PJITTIBO',
					type : 'Activity',
					actType : 'Sales Opportunity'
				}, {
					actNo : '10000002',
					contName : 'Pan Jittibophit',
					contNo : '123456',
					fromDate : '20131015',
					toDate : '20131015',
					text : 'Following up',
					createdBy : 'PJITTIBO',
					type : 'Activity',
					actType : 'Sales Call'
				}]
			};

			console.log('customer update');
		}
	},

	// prepare global variable when app first get loaded
	onActivate : function() {
		console.log('Main container is active');

	}
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
		Ext.Msg.alert('Alert', errorMessage, Ext.emptyFn);
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
			isDuplicate = true;
			break;
		}
	}

	if (!isDuplicate) {
		productsInCart.items.push(product)
		// TODO need to save this variable into local storage

		// update badgeText
		updateCartBadgeText()
	}
	// update cartStore
	updateCartStore()
}

function updateCustPrice(product) {

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

	// Update favorite
	for (var i = 0; i < favoriteData.items.length; i++) {
		if (product.prodNo == favoriteData.items[i].prodNo) {
			favoriteData.items[i].custPr = product.custPr;
			updateFavoriteStore();
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
			productsInCart.items[i].batch = product.batch;
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
			totalPrice = totalPrice + productsInCart.items[i].manualPr * productsInCart.items[i].orderQty;
		} else if (productsInCart.items[i].custPr != null) {
			totalPrice = totalPrice + productsInCart.items[i].custPr * productsInCart.items[i].orderQty;
		} else {
			// customer price will always be available
			// totalPrice = totalPrice + productsInCart.items[i].listPr *
			// productsInCart.items[i].orderQty;
		}

	}
	var totalField = Ext.ComponentQuery.query('#cartTotal');
	if (totalField.length > 0) {
		totalField[0].setValue(number(totalPrice));
	}
	return totalPrice;
}

function activateCartList() {
	// show exit button
	var button = Ext.ComponentQuery.query('#cartExitButton');
	if (button.length > 0) {
		button[0].setHidden(false);
	}

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

function validateCredentials(username, password) {

	Ext.defer(function() {

		calledBAPI = ACCOUNT_VALIDATION_BAPI;
		// save credential
		hwc.saveLoginCredentials(username, password);
		// call validation function
		var zaccountValidate = new ZMOB_VALIDATE_ACCOUNT();

		zmob_validate_account_findAll(zaccountValidate, '', '');
	}, 500);
}

function getPreviousPurchase(selectedDays) {
	// set wait time to half second
	days = selectedDays;
	Ext.defer(function() {
		// set calledBAPI
		calledBAPI = PREVIOUS_PUR_BAPI;
		// new a mbo instance
		var zprevPur = new ZMOB_PREVIOUS_PURCHASES();
		// call findAll() function
		zprevPur.pks.put('PK_DAYS_pkKey', selectedDays);
		zprevPur.pks.put('PK_CUSTOMER_PREV_pkKey', selectedCust);
		mainContainer.setMasked({
			xtype : 'loadmask',
			message : PREV_PUR_LOADING,
			indicator : true
		});
		zmob_previous_purchases_findAll(zprevPur, '', '');
	}, 50);
}

function getDisputList() {
	// set wait time to half second
	Ext.defer(function() {
		// set calledBAPI
		calledBAPI = CUSTOMER_DISPUTE_LIST_BAPI;
		// new a mbo instance
		var zdisputeList = new ZMOB_CUSTOMER_DISPUTE_LIST();
		// call findAll() function
		zdisputeList.pks.put('PK_CUSTOMER_pkKey', selectedCust);

		mainContainer.setMasked({
			xtype : 'loadmask',
			message : DISPUTE_LOADING,
			indicator : true
		});
		zmob_customer_dispute_list_findAll(zdisputeList, '', '');
	}, 50);
}

function getCustomerContactList() {
	// set wait time to half second
	Ext.defer(function() {
		// set calledBAPI
		calledBAPI = CUSTOMER_CONTACT_LIST_BAPI;
		// new a mbo instance
		var zcontact = new ZMOB_CUSTOMER_CONTACT_LIST();
		// call findAll() function
		zcontact.pks.put('PK_CUSTOMER_pkKey', selectedCust);
		mainContainer.setMasked({
			xtype : 'loadmask',
			message : CONTACT_LOADING,
			indicator : true
		});
		zmob_customer_contact_list_findAll(zcontact, '', '');
	}, 50);
}

function getCustomerRecentActivity() {
	// set wait time to half second
	Ext.defer(function() {
		// set calledBAPI
		calledBAPI = CUSTOMER_RECENT_ACTIVITY_BAPI;
		// new a mbo instance
		var zrecentAct = new ZMOB_CUSTOMER_RECENT_ACT();
		// call findAll() function
		zrecentAct.pks.put('PK_CUSTOMER_pkKey', selectedCust);
		zrecentAct.pks.put('PK_ACT_MAX_pkKey', 30);
		mainContainer.setMasked({
			xtype : 'loadmask',
			message : RECENT_ACT_LOADING,
			indicator : true
		});
		zmob_customer_recent_act_findAll(zrecentAct, '', '');
	}, 50);
}

function getCustomerAddress() {
	// set wait time to half second
	Ext.defer(function() {
		// set calledBAPI
		calledBAPI = CUSTOMER_ADDRESS_BAPI;
		// new a mbo instance
		var zcustAddr = new ZMOB_GET_CUSTOMER_ADDRESS();
		// call findAll() function
		zcustAddr.pks.put('PK_CUSTOMER_pkKey', selectedCust);
		mainContainer.setMasked({
			xtype : 'loadmask',
			message : CUSTOMER_ADDRESS_LOADING,
			indicator : true
		});
		zmob_get_customer_address_findAll(zcustAddr, '', '');
	}, 50);
}

function getCustomerList(salesOffice, todayCustomer, allCustomer, allVanCustomer) {

	// set wait time to half second
	Ext.defer(function() {
		// set calledBAPI
		calledBAPI = CUSTOMER_LIST_BAPI;
		// new a mbo instance
		var zcustomerList = new ZMOB_VAN_CUSTOMER_LIST();
		// call findAll() function
		if (salesOffice == '' || salesOffice == null) {
			salesOffice = '';
		}
		zcustomerList.pks.put('PK_USER_pkKey', hwc.loadSettings().UserName.toUpperCase());
		zcustomerList.pks.put('PK_SALES_OFF_pkKey', salesOffice);
		zcustomerList.pks.put('PK_TODAY_FLAG_pkKey', todayCustomer);
		zcustomerList.pks.put('PK_ALL_FLAG_pkKey', allCustomer);
		zcustomerList.pks.put('PK_ALL_VAN_FLAG_pkKey', allVanCustomer);
		customerContainerOption.hide();
		mainContainer.setMasked({
			xtype : 'loadmask',
			message : CUSTOMER_LOADING,
			indicator : true
		});
		zmob_van_customer_list_findAll(zcustomerList, '', '');
	}, 50);
}

function getProductSearch(button) {

	var searchString = Ext.ComponentQuery.query('#searchString')[0].getValue();

	if (searchString == '') {
		Ext.Msg.alert('Alert', 'Please enter search string!', function() {
		})
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

		// set wait time to half second
		Ext.defer(function() {
			// set calledBAPI
			calledBAPI = PRODUCT_SEARCH_BAPI;
			// new a mbo instance
			var zproductSearch = new ZMOB_ORDER_PRODUCT_SEARCH();
			// call findAll() function
			zproductSearch.pks.put('PK_ATP_QTY_pkKey', searchAtpQty);
			zproductSearch.pks.put('PK_CUSTOMER_pkKey', selectedCust);
			zproductSearch.pks.put('PK_FIND_ALT_pkKey', searchAltProduct);
			zproductSearch.pks.put('PK_FIND_NUM_pkKey', FIND_NUM);
			zproductSearch.pks.put('PK_MAX_HITS_pkKey', MAX_HITS);
			zproductSearch.pks.put('PK_STRING_pkKey', searchString);
			zproductSearch.pks.put('PK_ZERO_pkKey', searchSupZero);
			zproductSearch.pks.put('PK_PLANT_pkKey', searchPlant);
			mainContainer.setMasked({
				xtype : 'loadmask',
				message : PRODUCT_LOADING,
				indicator : true
			});

			zmob_order_product_search_findAll(zproductSearch, '', '');
		}, 50);
	}
}

function savePasswordCredential() {
	var passwordField = Ext.ComponentQuery.query('#passwordCredential');
	if (passwordField.length > 0) {
		password = passwordField[0].getValue();
	}
	hwc.saveLoginCredentials(hwc.loadSettings().UserName.toUpperCase(), password);
	sharedStorage.setItem(PASSWORD_KEY, password);
}

function showIncorrectPasswordAlert() {
	Ext.Msg.alert('Alert', 'Incorrect password. Please enter new password.', function() {
		showCredentialScreen(hwc.loadSettings().UserName.toUpperCase());
	});
}

function getOrderConfirmation() {
	// set wait time to half second
	var mobAppType;
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
	// set calledBAPI
	calledBAPI = ORDER_SIMULATE_MESSAGE_BAPI;
	// // new a mbo instance
	var zorderSimulateMe = new ZMOB_ORDER_SIMULATE();
	// // call findAll() function
	zorderSimulateMe.pks.put('PK_ORDER_HEADER_pkKey', orderHeader);
	zorderSimulateMe.pks.put('PK_ORDER_ITEM_pkKey', orderItem);
	zorderSimulateMe.pks.put('PK_ORDER_PARTNER_pkKey', orderPartner);
	zorderSimulateMe.pks.put('PK_MOB_APP_pkKey', mobAppType);

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
	zmob_order_simulate_findAll(zorderSimulateMe, '', '');
}

function updateCartOrderHeader(record) {
	customerPlant = record.get('plant');
	updateCartPlant(customerPlant);
	//updateCartStorageLoc(customerPlant);
	//updateShippingAddr(record.get('custAddr'));
}

function updateProductSearch(record) {
	var searchPlantField = Ext.ComponentQuery.query('#searchPlant')[0];
	searchPlantField.setValue(record.get('plant'));
}

function updateCartPlant(plant) {
	var deliveringPlantField = Ext.ComponentQuery.query('#deliveringPlant')[0];
	deliveringPlantField.setValue(plant);
}

function updateShippingAddr(address) {
	var shippingAdrField = Ext.ComponentQuery.query('#shippingAdr')[0];
	shippingAdrField.setValue(address);
}

// function updateCartStorageLoc(plant) {
// for (var i = 0; i < STORAGE_LOC.length; i++) {
// if (STORAGE_LOC[i].value == plant) {
// storageLocOptions = STORAGE_LOC[i].items;
// break;
// }
// }
// var storageLocField = Ext.ComponentQuery.query('#storageLoc')[0];
// storageLocField.setOptions(storageLocOptions);
// if (userStorageLoc != '') {
// storageLocField.setValue(userStorageLoc);
// }
// }

function prepareOrderHeader() {
	//order_header_in format is
	//DOC_TYPE|SALES_ORG|DIST_CHAN|DIVISION|REQ_DATE|PO_NUMBER|SHIPPING_COND|QUO_VALIDTO_DAT
	var orderHeader = '';
	var requestedDelDate;
	var quoteValidToDate;

	var orderType = Ext.ComponentQuery.query('#orderType')[0].getValue().trim();
	var date = Ext.ComponentQuery.query('#deliveryDate')[0].getValue();
	var valDate = Ext.ComponentQuery.query('#validToDate')[0].getValue();
	var poNumber = Ext.ComponentQuery.query('#poNumber')[0].getValue().trim();
	var shippingCond = Ext.ComponentQuery.query('#shippingCond')[0].getValue().trim();

	requestedDelDate = getSAPDate(date);
	quoteValidToDate = getSAPDate(valDate);

	orderHeader = orderType + '|1010|50|00|' + requestedDelDate + '|' + poNumber + '|' + shippingCond + '|' + quoteValidToDate;
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
			temp = '|';
		}

		if (isVanOrder) {
			temp += productsInCart.items[i].prodNo + '|' + productsInCart.items[i].orderQty + '|' + productsInCart.items[i].uom + '|' + tempManualPr + '|' + productsInCart.items[i].jobNumber + '|' + storLoc + '|' + plant + '|' + productsInCart.items[i].batch;
		} else {
			temp += productsInCart.items[i].prodNo + '|' + productsInCart.items[i].orderQty + '|' + productsInCart.items[i].uom + '|' + tempManualPr + '|' + productsInCart.items[i].jobNumber + '|' + storLoc + '|' + plant;
		}

		orderItem += temp;
	};

	return orderItem;
}

function prepareOrderPartner() {
	//order_partner format is
	//WE|customerNo|AG|customerNo
	var orderPartner = 'WE|' + selectedCust + '|AG|' + selectedCust;

	return orderPartner;
}

function createDelivery(orderNo) {

	var signatureValue = Ext.ComponentQuery.query('#signatureField')[0];
	var signatureBase64 = signatureValue.getValue().split(',')[1];
	var deliveryName = "Recipient Name: " + Ext.ComponentQuery.query('#vanConfirmDeliveryName')[0].getValue();
	var deliveryTime = "Delivery Time: " + Ext.ComponentQuery.query('#vanConfirmDeliveryTime')[0].getValue();
	var deliveryGeo = "Geolocation :" + Ext.ComponentQuery.query('#vanConfirmDeliveryGeo')[0].getValue();

	calledBAPI = CREATE_DELIVERY_BAPI;
	var zcreateDelivery = new ZMOB_CREATE_DEL_PGI();
	zcreateDelivery.pks.put('PK_ORDER_NO_pkKey', orderNo);
	zcreateDelivery.pks.put('PK_IMAGE_pkKey', signatureBase64);
	zcreateDelivery.pks.put('PK_TIMESTAMP_pkKey', deliveryTime);
	zcreateDelivery.pks.put('PK_GEO_TEXT_pkKey', deliveryGeo);
	zcreateDelivery.pks.put('PK_RECIPIENT_pkKey', deliveryName);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CREATE_DELIVERY_LOADING,
		indicator : true
	});

	zmob_create_del_pgi_findAll(zcreateDelivery, '', '');
}

function addOrderAttachment(orderNo) {

	var signatureValue = Ext.ComponentQuery.query('#signatureField')[0];
	var signatureBase64 = signatureValue.getValue().split(',')[1];
	var deliveryName = "Recipient Name: " + Ext.ComponentQuery.query('#vanConfirmDeliveryName')[0].getValue();
	var deliveryTime = "Delivery Time: " + Ext.ComponentQuery.query('#vanConfirmDeliveryTime')[0].getValue();
	var deliveryGeo = "Geolocation :" + Ext.ComponentQuery.query('#vanConfirmDeliveryGeo')[0].getValue();

	calledBAPI = ADD_ATTACHMENT_BAPI;
	var zorderAttachment = new ZMOB_ADD_ATTACHMENT();
	zorderAttachment.pks.put('PK_DOC_NO_pkKey', orderNo);
	zorderAttachment.pks.put('PK_IMAGE_pkKey', signatureBase64);
	zorderAttachment.pks.put('PK_TIMESTAMP_pkKey', deliveryTime);
	zorderAttachment.pks.put('PK_GEO_TEXT_pkKey', deliveryGeo);
	zorderAttachment.pks.put('PK_RECIPIENT_pkKey', deliveryName);
	zorderAttachment.pks.put('PK_DOC_TYPE_pkKey', 'S');

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ADD_ATTACHMENT_LOADING,
		indicator : true
	});

	zmob_add_attachment_findAll(zorderAttachment, '', '');
}

function createOrder() {
	// prepare header text
	var mobAppType;
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

	calledBAPI = ORDER_CREATE_BAPI;
	var zorderCreate = new ZMOB_ORDER_CREATE_peer1();
	zorderCreate.pks.put('PK_ORDER_HEADER_pkKey', orderHeader);
	zorderCreate.pks.put('PK_ORDER_ITEM_pkKey', orderItem);
	zorderCreate.pks.put('PK_ORDER_PARTNER_pkKey', orderPartner);
	zorderCreate.pks.put('PK_GENERAL_ORDER_TEXT_pkKey', orderComment);
	zorderCreate.pks.put('PK_DELIVERY_TEXT_pkKey', delInstruction);
	zorderCreate.pks.put('PK_QUOTATION_TEXT_pkKey', quoteComment);
	zorderCreate.pks.put('PK_MOB_APP_pkKey', mobAppType);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ORDER_CREATE_LOADING,
		indicator : true
	});

	zmob_order_create_peer1_findAll(zorderCreate, '', '');
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
	hwc.log('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude + '\n' + 'Altitude: ' + position.coords.altitude + '\n' + 'Accuracy: ' + position.coords.accuracy + '\n' + 'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' + 'Heading: ' + position.coords.heading + '\n' + 'Speed: ' + position.coords.speed + '\n' + 'Timestamp: ' + position.timestamp + '\n', 'DEBUG', false);
	currentGeoLocation = position.coords.latitude + ', ' + position.coords.longitude;
	var deliveryGeolocation = Ext.ComponentQuery.query('#vanConfirmDeliveryGeo')[0].setValue(currentGeoLocation);
};

// onError Callback receives a PositionError object
//
function getLocationError(error) {
	hwc.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n', 'ERROR', false);
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

	if (orderType == 'ZSTK') {
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

	// hide exit button
	button = Ext.ComponentQuery.query('#cartExitButton');
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
		if (totalField.length > 0) {
			totalField[0].setValue(number(getOrderTotal()));
		}
	}

}

function getOrderTotal() {
	var total = 0;
	for (var i = 0; i < simulatedOrder.items.length; i++) {
		total = total + parseFloat(simulatedOrder.items[i].netValue);
	}
	return total;
}

function changeCustomer(name1, name2, street, postcode, suburb, region, email, tel, fax) {
	// set calledBAPI
	calledBAPI = CHANGE_CUSTOMER_BAPI;
	// new a mbo instance
	var zchangeCust = new ZMOB_CHANGE_CONTACT();
	// call findAll() function
	zchangeCust.pks.put('PK_CUSTOMER_pkKey', selectedCust);
	zchangeCust.pks.put('PK_NAME1_pkKey', name1);
	zchangeCust.pks.put('PK_NAME2_pkKey', name2);
	zchangeCust.pks.put('PK_STREET_pkKey', street);
	zchangeCust.pks.put('PK_POSTCODE_pkKey', postcode);
	zchangeCust.pks.put('PK_CITY_pkKey', suburb);
	zchangeCust.pks.put('PK_REGION_pkKey', region);
	zchangeCust.pks.put('PK_EMAIL_pkKey', email);
	zchangeCust.pks.put('PK_TEL_pkKey', tel);
	zchangeCust.pks.put('PK_FAX_pkKey', fax);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CUSTOMER_CHANGE_LOADING,
		indicator : true
	});
	zmob_change_customer_findAll(zchangeCust, '', '');
}

function changeVanSchedule(visitPeriod, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
	// set calledBAPI
	calledBAPI = UPDATE_VAN_SCHEDULE_BAPI;
	// new a mbo instance
	var zvanScheduleUpdate = new ZMOB_VAN_CUSTOMER_UPDATE();
	// call findAll() function
	zvanScheduleUpdate.pks.put('PK_CUSTOMER_pkKey', selectedCust);
	zvanScheduleUpdate.pks.put('PK_USER_pkKey', hwc.loadSettings().UserName.toUpperCase());
	zvanScheduleUpdate.pks.put('PK_VISIT_PERIOD_pkKey', visitPeriod);
	zvanScheduleUpdate.pks.put('PK_MONDAY_pkKey', monday);
	zvanScheduleUpdate.pks.put('PK_TUESDAY_pkKey', tuesday);
	zvanScheduleUpdate.pks.put('PK_WEDNESDAY_pkKey', wednesday);
	zvanScheduleUpdate.pks.put('PK_THURSDAY_pkKey', thursday);
	zvanScheduleUpdate.pks.put('PK_FRIDAY_pkKey', friday);
	zvanScheduleUpdate.pks.put('PK_SATURDAY_pkKey', saturday);
	zvanScheduleUpdate.pks.put('PK_SUNDAY_pkKey', sunday);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : UPDATE_VAN_SCHEDULE_LOADING,
		indicator : true
	});
	zmob_van_customer_update_findAll(zvanScheduleUpdate, '', '');
}

function createCustomer(name1, name2, street, postcode, suburb, region, email, tel, fax) {
	// set calledBAPI
	calledBAPI = CREATE_CUSTOMER_BAPI;
	// new a mbo instance
	var zcreateCust = new ZMOB_CREATE_CONTACT();
	// call findAll() function
	zcreateCust.pks.put('PK_NAME1_pkKey', name1);
	zcreateCust.pks.put('PK_NAME2_pkKey', name2);
	zcreateCust.pks.put('PK_STREET_pkKey', street);
	zcreateCust.pks.put('PK_POSTCODE_pkKey', postcode);
	zcreateCust.pks.put('PK_CITY_pkKey', suburb);
	zcreateCust.pks.put('PK_REGION_pkKey', region);
	zcreateCust.pks.put('PK_EMAIL_pkKey', email);
	zcreateCust.pks.put('PK_TEL_pkKey', tel);
	zcreateCust.pks.put('PK_FAX_pkKey', fax);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CUSTOMER_CREATE_LOADING,
		indicator : true
	});
	zmob_create_customer_findAll(zcreateCust, '', '');
}

function createContact(firstName, lastName, tel, email, title, department, functions) {
	// set calledBAPI
	calledBAPI = CREATE_CONTACT_BAPI;
	// new a mbo instance
	var zcreateContact = new ZMOB_CREATE_CONTACT();
	// call findAll() function
	zcreateContact.pks.put('PK_CUSTOMER_pkKey', selectedCust);
	zcreateContact.pks.put('PK_FIRSTNAME_pkKey', firstName);
	zcreateContact.pks.put('PK_LASTNAME_pkKey', lastName);
	zcreateContact.pks.put('PK_EMAIL_pkKey', email);
	zcreateContact.pks.put('PK_TEL_pkKey', tel);
	zcreateContact.pks.put('PK_CONTACT_TITLE_pkKey', title);
	zcreateContact.pks.put('PK_DEPARTMENT_pkKey', department);
	zcreateContact.pks.put('PK_FUNCTION_pkKey', functions);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CONTACT_CREATE_LOADING,
		indicator : true
	});
	zmob_create_contact_findAll(zcreateContact, '', '');
}

function changeContact(firstName, lastName, tel, email, title, department, functions) {
	// set calledBAPI
	calledBAPI = CHANGE_CONTACT_BAPI;
	// new a mbo instance
	var zchangeContact = new ZMOB_CHANGE_CONTACT();
	// call findAll() function
	zchangeContact.pks.put('PK_CUSTOMER_pkKey', selectedCust);
	zchangeContact.pks.put('PK_CONTACT_pkKey', selectedContact);
	zchangeContact.pks.put('PK_FIRSTNAME_pkKey', firstName);
	zchangeContact.pks.put('PK_LASTNAME_pkKey', lastName);
	zchangeContact.pks.put('PK_EMAIL_pkKey', email);
	zchangeContact.pks.put('PK_TEL_pkKey', tel);
	zchangeContact.pks.put('PK_CONTACT_TITLE_pkKey', title);
	zchangeContact.pks.put('PK_DEPARTMENT_pkKey', department);
	zchangeContact.pks.put('PK_FUNCTION_pkKey', functions);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CONTACT_CHANGE_LOADING,
		indicator : true
	});
	zmob_change_contact_findAll(zchangeContact, '', '');
}

function deleteVanSchedule() {
	calledBAPI = DELETE_VAN_SCHEDULE_BAPI;
	var zvanScheduleDelete = new ZMOB_VAN_CUSTOMER_DEL();
	zvanScheduleDelete.pks.put('PK_USER_pkKey', hwc.loadSettings().UserName.toUpperCase());
	zvanScheduleDelete.pks.put('PK_CUSTOMER_pkKey', selectedCust);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : DELETE_VAN_SCHEDULE_LOADING,
		indicator : true
	});

	zmob_van_customer_del_findAll(zvanScheduleDelete, '', '');
}

function deleteCustomer() {
	calledBAPI = DELETE_CUSTOMER_BAPI;
	var zcustDelete = new ZMOB_DELETE_CUSTOMER();
	zcustDelete.pks.put('PK_CUSTOMER_pkKey', selectedCust);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : DELETE_CUSTOMER_LOADING,
		indicator : true
	});

	zmob_delete_customer_findAll(zcustDelete, '', '');
}

function getVanProduct() {
	calledBAPI = VAN_PRODUCT_LIST_BAPI;
	var zvanProduct = new ZMOB_VAN_PRODUCT_LIST();
	zvanProduct.pks.put('PK_CUSTOMER_pkKey', selectedCust);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : VAN_PRODUCT_LOADING,
		indicator : true
	});

	zmob_van_product_list_findAll(zvanProduct, '', '');
}

function getVanBatch() {

	Ext.defer(function() {
		calledBAPI = VAN_BATCH_LIST_BAPI;
		var zvanBatch = new ZMOB_VAN_BATCH_LIST();

		mainContainer.setMasked({
			xtype : 'loadmask',
			message : VAN_BATCH_LOADING,
			indicator : true
		});

		zmob_van_batch_list_findAll(zvanBatch, '', '');
	}, 500);
}

function deleteContact() {
	calledBAPI = DELETE_CONTACT_BAPI;
	var zcontDelete = new ZMOB_DELETE_CONTACT();
	zcontDelete.pks.put('PK_CUSTOMER_pkKey', selectedCust);
	zcontDelete.pks.put('PK_CONTACT_pkKey', selectedContact);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : DELETE_CONTACT_LOADING,
		indicator : true
	});

	zmob_delete_contact_findAll(zcontDelete, '', '');
}

function submitDispute(title, category, contact, referenceDoc, claimAmount, text) {

	text = removeSpecialCharacter(text);

	calledBAPI = DISPUTE_CREATION_BAPI;
	var zdisCreate = new ZMOB_CREATE_DISPUTE();
	zdisCreate.pks.put('PK_CUSTOMER_pkKey', selectedCust);
	zdisCreate.pks.put('PK_TITLE_pkKey', title);
	zdisCreate.pks.put('PK_CATEGORY_pkKey', category);
	zdisCreate.pks.put('PK_CONTACT_pkKey', contact);
	zdisCreate.pks.put('PK_REF_pkKey', referenceDoc);
	zdisCreate.pks.put('PK_CLAIM_AMOUNT_pkKey', claimAmount);
	zdisCreate.pks.put('PK_DIST_TEXT_pkKey', text);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : DISPUTE_CREATE_LOADING,
		indicator : true
	});

	zmob_create_dispute_findAll(zdisCreate, '', '');
}

function submitActivity(actDate, actContact, actText, actType, actReason, actOutcome, actVol, actQty, actAmount, actSalesDoc, actOppType) {

	// reset opportunity type if it is not an opportunity
	if (actType != 'Z001') {
		actOppType = '';
	}

	actText = removeSpecialCharacter(actText);

	calledBAPI = ACTIVITY_CREATION_BAPI;
	var zactCreate = new ZMOB_CREATE_SALES_ACT();
	zactCreate.pks.put('PK_CUSTOMER_pkKey', selectedCust);
	zactCreate.pks.put('PK_CONTACT_pkKey', actContact);
	zactCreate.pks.put('PK_DATE_pkKey', actDate);
	zactCreate.pks.put('PK_ACT_TEXT_pkKey', actText);
	zactCreate.pks.put('PK_ACT_TYPE_pkKey', actType);
	zactCreate.pks.put('PK_REASON_pkKey', actReason);
	zactCreate.pks.put('PK_OUTCOME_pkKey', actOutcome);
	zactCreate.pks.put('PK_VOLUME_pkKey', actVol);
	zactCreate.pks.put('PK_QTY_pkKey', actQty);
	zactCreate.pks.put('PK_AMOUNT_pkKey', actAmount);
	zactCreate.pks.put('PK_DOC_NO_pkKey', actSalesDoc);
	zactCreate.pks.put('PK_DESC_1_pkKey', actOppType);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ACTIVITY_CREATE_LOADING,
		indicator : true
	});

	zmob_create_sales_act_findAll(zactCreate, '', '');
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
	inText = inText.replace('\"', '\'');
	inText = inText.replace(/[`~!^;:]/gi, '');
	inText = inText.replace('\{', '\(');
	inText = inText.replace('\}', '\)');
	inText = inText.replace('\<', '\(');
	inText = inText.replace('\>', '\)');

	outText = hwc.unescapeValue(inText);
	;
	return outText;
}

function positionText(functions) {
	return CONTACT_FUNCTION.find({
		value : functions
	}).text;
}

function getCustomerDetail() {
	if (selectedCust != null) {
		// call R3 BAPI to get list of contacts
		if (hwc.isIOS()) {
			getCustomerContactList();
		} else {
			//call customer main view
			console.log('customer detail');
			var customerTab = Ext.ComponentQuery.query('customerTab')[0];

			customerTab.push({
				xtype : 'customerMain',
				id : 'customerMain',
				title : 'Customer Detail'
			});
		}

	} else {
		Ext.Msg.alert('Alert', 'Please select customer before proceeding', function() {
		});
	}
}

function updateCustomerListTitle() {
	var customerList = Ext.ComponentQuery.query("customerTab")[0];
	customerList.getNavigationBar().setTitle('Customers for ' + userStorageLoc);
}

function updateCustomerList(salesOffice, todayCustomer, allCustomer, allVanCustomer) {
	var customerStore = Ext.getStore('customer');
	var customerList = Ext.ComponentQuery.query("customerList")[0];
	customerStore.clearFilter();
	if (todayCustomer == 'X') {
		customerList.setGrouped(false);
		customerStore.setGrouper(null);
		customerStore.sort('sequence', 'ASC');
	} else {
		customerStore.setGrouper(customerGrouper);
		customerStore.sort('custName', 'ASC');
		customerList.setGrouped(true);
	}
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
