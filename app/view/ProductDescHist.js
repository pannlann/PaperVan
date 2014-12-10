Ext.define('PaperVan.view.ProductDescHist', {
    extend : 'Ext.List',
    xtype : 'productDescHist',
    config : {
        title : 'Purchase History',
        scrollable : true,
		grouped : true,
		emptyText : 'No purchase history for this product.',
        disableSelection: true,
        itemTpl : [
		'<table style="width:100%">',
			'<tr>',
				'<td style="width:35%"><div class="sales_hist_text">Price: <b>${netPrice}</b></div></td>',
				'<td style="width:25%"><div class="sales_hist_text">Qty: <b>{qty}</b></div></td>',
				'<td style="width:40%"><div class="sales_hist_text">Margin: <b>{marginPercent}%</b></div></td>',
			'</tr>',
			'<tr>',
				'<td style="width:35%"><div class="sales_hist_text">Date:{[convertToDMYDate(values.date)]}</div></td>',
				'<td style="width:25%"><div class="sales_hist_text">Type:{orderType}</div></td>',
				'<td style="width:40%"><div class="sales_hist_text">Created By:<b>{createBy}</b></div></td>',
			'</tr>',
		'</table>',
		'<table style="width:100%">',
			'<tr style="width:100%">',
				'<tpl if="isManualPrice == \'X\'">',
					'<td style="width:100%"><div class="sales_hist_po" id="yellow">Cust PO: {poNumber} (#{salesOrder})</div></td>',
				'</tpl>',
				'<tpl if="isManualPrice == \'\'">',
					'<td style="width:100%"><div class="sales_hist_po">Cust PO: {poNumber} (#{salesOrder})</div></td>',
				'</tpl>',
			'</tr>',
		'</table>'],
    }
});
