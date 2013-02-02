var romanNumberSymbols = [
	{ latin : 1, roman : 'I'},
	{ latin : 5, roman : 'V'},
	{ latin : 10, roman : 'X'},	
	{ latin : 50, roman : 'L'},
	{ latin : 100, roman : 'C'},
	{ latin : 500, roman : 'D'},
	{ latin : 1000, roman : 'M'}
];

function toRoman (number) {
	var roman = '';
	for (var i = romanNumberSymbols.length - 1; i >= 0; i--) {
		var symbol = romanNumberSymbols[i];
		while (number >= symbol.latin) {
			roman += symbol.roman;
			number -= symbol.latin;
		}
		if (number > 0 && number == symbol.latin - 1) {
			roman += 'I' + symbol.roman;
			number -= symbol.latin - 1;
		}
	}
	return roman;
}
