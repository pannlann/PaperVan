Ext.define('PaperVan.view.VanProductResultList', {
	extend : 'Ext.List',
	xtype : 'vanProductResultList',
	config : {
		title : 'Van Products',
		flex : 3,
		refreshHeightOnUpdate : true,
		allowDeselect : true,
		itemTpl : [
				'<b><div class="prd_result_name">{prodDesc}</div></b><br>',
				'<table style="width:100%">',
				'<tpl if="hwc.isIPad()">',
				'<tr>',
				'<td style="width:25%" class="prd_result_no">#<b>{prodNo}</b></td>',
				'<td style="width:25%" class="prd_result_atp_val">Stock: <b>{[number(values.stock)]}/{uom}</b></td>',
				'<td style="width:25%" class="prd_result_lpr_val">Price: <b>{[number(values.custPr)]}/{uom}</b></td>',
				'<td style="width:25" class="prd_result_atp_val">List pr: <b>{[number(values.listPr)]}/{uom}</b></td>',
				'</tr>',
				'</tr>',
				'</tpl>',
				'<tpl if="!hwc.isIPad()">',
				'<tr>',
				'<td style="width:20%" class="prd_result_no">#<b>{prodNo}</b></td>',
				'<td style="width:45%" class="prd_result_lpr_val">Price: <b>{[number(values.custPr)]}/{uom}</b></td>',
				'<td style="width:35%" class="prd_result_atp_val">List pr:  <b>{[number(values.listPr)]}/{uom}</b></td>',
				'</tr>',
				'<tr>',
				'<td></td>',
				'<td></td>',
				'<td class="prd_result_atp_val">Stock: <b>{[number(values.stock)]}/{uom}</b></td>',
				'</tr>', '</tpl>', '</table>'],
		store : {
			type : 'vanProductResult'
		}
	}
});