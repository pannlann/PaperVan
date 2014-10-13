Ext.define('PaperVan.view.VanScheduleUpdate', {
	extend : 'Ext.form.Panel',
	xtype : 'vanScheduleUpdate',
	config : {
		padding : '0 5 0 5',
		fullscreen : true,
		title : 'Update Van Schedule',
		items : [{
			xtype : 'fieldset',
			title : 'Schedule',
			defaults : {
				style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
				labelWidth : '40%',
			},
			items : [{
				xtype : 'selectfield',
				label : 'Routine',
				itemId : 'vanRoutineSelect',
				options : VISITING_PERIOD,
				usePicker : false,
			}, {
				xtype : 'checkboxfield',
				itemId : 'vanRoutineMon',
				label : 'Monday',
				value : 'X'
			}, {
				xtype : 'checkboxfield',
				itemId : 'vanRoutineTue',
				label : 'Tuesday',
				value : 'X'
			}, {
				xtype : 'checkboxfield',
				itemId : 'vanRoutineWed',
				label : 'Wednesday',
				value : 'X'
			}, {
				xtype : 'checkboxfield',
				itemId : 'vanRoutineThu',
				label : 'Thursday',
				value : 'X'
			}, {
				xtype : 'checkboxfield',
				itemId : 'vanRoutineFri',
				label : 'Friday',
				value : 'X'
			}, {
				xtype : 'checkboxfield',
				itemId : 'vanRoutineSat',
				label : 'Saturday',
				value : 'X'
			}, {
				xtype : 'checkboxfield',
				itemId : 'vanRoutineSun',
				label : 'Sunday',
				value : 'X'
			}, {
				xtype : 'button',
				itemId : 'vanScheduleUpdateButton',
				text : 'Update Schedule',
				ui : 'action'
				// }, {
				// xtype : 'button',
				// itemId : 'vanScheduleDeleteButton',
				// text : 'Delete Schedule',
				// ui : 'decline'
			}]
		}]
		// }]
	}
});
