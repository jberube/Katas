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
	var smaller, symbol;
	main : for (var i = romanNumberSymbols.length - 1; i >= 0; i--) {
		symbol = romanNumberSymbols[i];
		while (number >= symbol.latin) {
			roman += symbol.roman;
			number -= symbol.latin;
			if (number == 0) break main;
		}
		for (var j = i - 1; j >= 0; j--) {
			smaller = romanNumberSymbols[j];
			if (symbol.latin == smaller.latin * 2) continue;
			if (number >= symbol.latin - smaller.latin) {
				roman += smaller.roman + symbol.roman;
				number -= symbol.latin - smaller.latin;
				if (number == 0) break main;
			}
		}
	}
	return roman;
}
