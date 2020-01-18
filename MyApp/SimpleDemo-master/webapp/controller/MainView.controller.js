sap.ui.define([ 'sap/ui/core/mvc/Controller', 'com/cerner/sandra/MyApp/model/formatter' ], function(
	Controller,
	formatter
) {
	'use strict';

	return Controller.extend('com.cerner.sandra.MyApp.controller.MainView', {
		formatter: formatter,
		onInit: function() {
			const oModel = this.getView().getModel('product');
			const products = oModel.getData();
			products.Products.forEach((element) => {
				element.value = element.price.match('[/.0-9]+').join();
				element.currency = element.price.match('[^/.0-9]+').join();
			});
			this.getView().getModel('product').setData(products);
			this.getView().getModel('product').updateBindings();
		}
	});
});
