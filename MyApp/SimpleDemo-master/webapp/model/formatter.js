sap.ui.define([], function() {
	'use strict';

	return {
		currencyText: function(sCurrency) {
			const pound = '£';
			const euro = '€';
			const dollar = '$';

			switch (sCurrency) {
				case 'EUR':
					return euro;
				case 'USD':
					return dollar;
				case 'GBP':
					return pound;
				default:
					return sCurrency;
			}
		},
		dateTimeText: function(productDate) {
			let date = new Date(productDate);
			console.log(date);
			// let date = productDate.split(' ')[0];
			// let time = productDate.split(' ')[1];
			// let dd = date.split('/')[1];
			// let mm = date.split('/')[2];
			// let yyyy = date.split('/')[0];
			// let hh = time.split(':')[0];
			// let min = time.split(':')[1];
			// let ss = time.split(':')[2];

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
