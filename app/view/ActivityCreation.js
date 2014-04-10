Ext.define('PaperVan.view.ActivityCreation', {
	extend : 'Ext.form.Panel',
	xtype : 'activityCreation',
	config : {
		padding : '0 5 0 5',
		fullscreen : true,
		items : [{
			xtype : 'fieldset',
			title : 'New Activity',
			defaults : {
				style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
				labelWidth : '40%',
			},
			items : [{
				xtype : 'selectfield',
				label : 'Type',
				itemId : 'activityTypeSelect',
				options: ACTIVITY_TYPE,
				usePicker : false,
			},{
				xtype : 'selectfield',
				label : 'Opp. Type',
				itemId : 'opportunityTypeSelect',
				options: OPPORTUNITY_TYPE,
				hidden : true,
				usePicker : false,
			}, {
				xtype : 'datepickerfield',
				label : 'To Date',
				itemId : 'activityDate',
				value : new Date(),
				dateFormat : 'd/m/Y'
			}, {
				xtype : 'selectfield',
				label : 'Contact',
				itemId : 'availableContactSelect'
			},{
				xtype : 'selectfield',
				label : 'Reason',
				itemId : 'activityReasonSelect',
				usePicker : false,
				options: ACTIVITY_REASON
			},{
				xtype : 'selectfield',
				label : 'Outcome',
				itemId : 'activityOutcomeSelect',
				usePicker : false,
				options: ACTIVITY_OUTCOME
			}, {
				xtype : 'numberfield',
				label : 'Volume',
				itemId : 'volOpportunity',
				value : 0,
				hidden : true
			}, {
				xtype : 'numberfield',
				label : 'Quantity',
				itemId : 'qtyOpportunity',
				value : 0,
				hidden : true
			}, {
				xtype : 'numberfield',
				label : 'Amount',
				itemId : 'amountOpportunity',
				value : 0,
				hidden : true
			}, {
				xtype : 'numberfield',
				label : 'Sales Doc',
				itemId : 'salesDocNo',
				hidden : true
			}, {
				xtype : 'textareafield',
				itemId : 'activityCreationTextArea',
				label : 'Text',
				autoCapitalize : true,
				maxRows : 10,
				maxLength : 1500
			}, {
				xtype : 'button',
				itemId : 'activityCreationButton',
				text : 'Submit Activity',
				ui : 'action'
			}]
		}]
		// }]
	}
});
