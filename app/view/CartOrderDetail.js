Ext.define('PaperVan.view.CartOrderDetail', {
	// extend : 'Ext.form.Panel',
	extend : 'Ext.Panel',
	xtype : 'cartOrderDetail',
	config : {
		title : 'Cart Detail',
		padding : '0 0 0 0',
		scrollable : true,
		defaults : {
			style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
			labelWidth : '40%',
		},

		items : [{
			xtype : 'titlebar',
			docked : 'top',
			title : 'Header',
			style : 'font-size: 100%;',
		}, {
			xtype : 'selectfield',
			name : 'orderType',
			itemId : 'orderType',
			label : 'Order Type',
			usePicker : false,
			options : DEFAULT_ORDER_TYPE
		}, {
			xtype : 'togglefield',
			name : 'sampleOrder',
			itemId : 'sampleOrder',
			label : 'Sample Order',
			value : 0,
		}, {
			xtype : 'datepickerfield',
			name : 'validToDate',
			itemId : 'validToDate',
			label : 'Quot. Valid to',
			dateFormat : 'd/m/Y',
			value : getDefaultRequestedValToDate(),
			hidden : true,
			picker : {
				yearFrom : parseInt(getCurrentYear()),
				yearTo : parseInt(getMaxYear())
			},
		}, {
			xtype : 'datepickerfield',
			name : 'deliveryDate',
			itemId : 'deliveryDate',
			label : 'Delivery Date',
			dateFormat : 'd/m/Y',
			value : getDefaultRequestedDelDate(),
			picker : {
				yearFrom : parseInt(getCurrentYear()),
				yearTo : parseInt(getMaxYear())
			},
		}, {
			xtype : 'textfield',
			name : 'poNumber',
			itemId : 'poNumber',
			label : 'PO Number',
			placeHolder : 'Please enter PO number...'
		}, {
			xtype : 'selectfield',
			name : 'shippingCond',
			itemId : 'shippingCond',
			label : 'Delivery Type',
			usePicker : false,
			options : DEFAULT_SHIPPING_COND
		}, {
			xtype : 'selectfield',
			name : 'deliveringPlant',
			itemId : 'deliveringPlant',
			label : 'Plant',
			usePicker : false,
			options : DEFAULT_PLANTS
		}, {
			xtype : 'selectareafield',
			name : 'shiptoParty',
			itemId : 'shiptoParty',
			label : 'Ship-to',
		}, {
			xtype : 'textareafield',
			label : 'Quote Comments',
			maxRows : 3,
			itemId : 'quoteCommentField',
			hidden : true,
			maxLength : 600,
			autoCapitalize : true,
			placeHolder : 'The comments will be showned in a printed quote.'
		}, {
			xtype : 'textareafield',
			label : 'Order Comments',
			maxRows : 3,
			itemId : 'orderCommentField',
			maxLength : 600,
			autoCapitalize : true,
			placeHolder : 'The comments will be showned in a printed order.'
		}, {
			xtype : 'textareafield',
			label : 'Del. Instuction',
			maxRows : 3,
			itemId : 'delInstructionField',
			maxLength : 600,
			autoCapitalize : true,
			placeHolder : 'The instruction will be showned in a delivery note.'
		}]
	}
});

function getDefaultRequestedDelDate() {
	return new Date();
}

function getDefaultRequestedValToDate() {
	var myDate = new Date();

	//add a day to the date
	myDate.setDate(myDate.getDate() + 1);

	return myDate;
}