sap.ui.define([ 'sap/ui/model/json/JSONModel', 'sap/ui/Device' ], function(JSONModel, Device) {
	'use strict';

	return {
		createDeviceModel: function() {
			let oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode('OneWay');
			return oModel;
		},

		createProductModel: function() {
			let oModel = new JSONModel('./data.json');
			oModel.setDefaultBindingMode('OneWay');
			return oModel;
		}
	};
});
