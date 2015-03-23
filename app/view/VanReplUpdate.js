Ext.define('PaperVan.view.VanReplUpdate', {
	extend : 'Ext.form.Panel',
	xtype : 'vanReplUpdate',
	config : {
		padding : '0 5 0 5',
		fullscreen : true,
		items : [{
			xtype : 'fieldset',
			title : 'Update Van Replenishment Stock',
			defaults : {
				style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
				labelWidth : '40%',
				listeners : {
					focus : function(comp, e, eopts) {
						if (Ext.os.name == 'WindowsPhone') {
							var ost = comp.element.dom.offsetTop;
							this.getParent().getParent().getScrollable().getScroller().scrollTo(0, ost);
						}
					}
				},
			},
			items : [{
				xtype : 'textfield',
				label : 'Delivery Qty',
				itemId : 'delQtyField',
				readOnly : true,
			},{
				xtype : 'numberfield',
				label : 'Min',
				itemId : 'replMinField',
				minValue : 0,
				hidden : true,
			}, {
				xtype : 'numberfield',
				label : 'Max',
				itemId : 'replMaxField',
				minValue : 0,
				hidden : true,
			}, {
				xtype : 'spinnerfield',
				label : 'Min',
				itemId : 'replMinSpinner',
				minValue : 0,
				hidden : true,
			}, {
				xtype : 'spinnerfield',
				label : 'Max',
				itemId : 'replMaxSpinner',
				minValue : 0,
				hidden : true,
			}, {
				xtype : 'button',
				itemId : 'vanReplUpdateButton',
				text : 'Update',
				ui : 'confirm'
			}, {
				xtype : 'button',
				itemId : 'vanReplDeleteButton',
				text : 'Delete',
				ui : 'decline'
			}],
		}]
	}
});
