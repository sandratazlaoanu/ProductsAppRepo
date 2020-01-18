sap.ui.define([], function() {
	'use strict';

	const type = {
		POUND: '£',
		EURO: '€',
		DOLLAR: '$'
	};
	const currency = {
		EUR: 'EUR',
		USD: 'USD',
		GBP: 'GBP'
	};
	return {
		currencyText: function(sCurrency) {
			switch (sCurrency) {
				case currency.EUR:
					return type.EURO;
				case currency.USD:
					return type.DOLLAR;
				case currency.GBP:
					return type.POUND;
				default:
					return sCurrency;
			}
		},
		dateTimeText: function(productDate) {
			let date = new Date(productDate);
			let yyyy = date.getFullYear();
			let mm = date.getMonth() + 1;
			let dd = date.getDate();
			let hh = date.getHours();
			let min = date.getMinutes();
			let ss = date.getSeconds();

			return `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`;
		}
	};
});
