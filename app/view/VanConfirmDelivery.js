Ext.define('PaperVan.view.VanConfirmDelivery', {
	extend : 'Ext.form.Panel',
	xtype : 'vanConfirmDelivery',
	config : {
		padding : '0 5 0 5',
		fullscreen : true,
		title : 'Confirm Delivery',
		items : [{
			xtype : 'fieldset',
			title : 'Recipient',
			defaults : {
				style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
				labelWidth : '40%',
			},
			items : [{
				xtype : 'textfield',
				label : 'Print Name',
				itemId : 'vanConfirmDeliveryName',
				required : true,
			}, {
				xtype : 'textfield',
				label : 'Timestamp',
				itemId : 'vanConfirmDeliveryTime',
				readOnly : true,
			}, {
				xtype : 'textfield',
				label : 'Geolocation',
				itemId : 'vanConfirmDeliveryGeo',
				readOnly : true,
			}, {
				xtype : 'checkboxfield',
				itemId : 'vanConfirmDeliveryConfirm',
				label : 'Receive all goods',
				value : 'X',
				checked : false,
				required : true,
			}, {
				xtype : 'signaturefield',
				itemId : 'signatureField',
				sigWidth : signatureWidth,
				sigHieght : signatureHeight,
				label : 'Signature',
				required : true,
			}]
		}]
		// }]
	}
});
