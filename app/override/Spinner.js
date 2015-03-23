Ext.define('PaperVan.override.Spinner', {
    override : 'Ext.field.Spinner',

	applyValue : function(a) {
		a = parseFloat(a);
		if (isNaN(a) || a === null) {
			a = this.getDefaultValue();
		}
//		return this.callParent([a]);
		return a;
	},
});
