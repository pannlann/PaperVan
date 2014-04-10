Ext.define('PaperVan.view.FavoriteList', {
	extend : 'Ext.List',
	xtype : 'favoriteList',
	config : {
		title : 'Favorites',
		flex : 3,
		refreshHeightOnUpdate : true,
		// variableHeights : false,
		allowDeselect : true,
		itemTpl : [
				'<tpl if="atpQty &lt;= ATP_LOW">',
				'<b><div class="prd_result_name" id="red_no_idx">{prodDesc}</div></b><br></tpl>',
				'<tpl if="atpQty &gt;= ATP_HIGH">',
				'<b><div class="prd_result_name" id="green_no_idx">{prodDesc}</div></b><br></tpl>',
				'<tpl if="atpQty &lt; ATP_HIGH && atpQty &gt; ATP_LOW">',
				'<b><div class="prd_result_name" id="yellow_no_idx">{prodDesc}</div></b><br></tpl>',
				'<div class="prd_result_no"># {prodNo}</div>',
				'<div class="prd_result_lpr_text">L. price </div>',
				'<div class="prd_result_lpr_val"><b>{[number(values.listPr)]}/{uom}</b></div>',
				'<div class="prd_result_atp_val"><b>{[number(values.atpQty)]}</b></div>',
				'<div class="prd_result_atp_text">ATP qty: </div>'],
		store : {
			type : 'favorite'
		}
	}
})