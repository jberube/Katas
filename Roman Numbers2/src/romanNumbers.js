function number(num) {
	var romanNumbers = [
		{ roman : 'M', latin : 1000},
		{ roman : 'D', latin : 500},
		{ roman : 'C', latin : 100},
		{ roman : 'L', latin : 50},
		{ roman : 'X', latin : 10},
		{ roman : 'V', latin : 5},
		{ roman : 'I', latin : 1}
	];

	var romanGlyphs = {
		M : 1000,
		D : 500,
		C : 100,
		L : 50,
		X : 10,
		V : 5,
		I : 1
	};
	
	return {
		toRoman : function () {
			if (num == 1) {
				return 'I';
			}
			
			var latin = num, 
				i = 0, 
				roman = '', 
				current = romanNumbers[0];
				
			while (current && latin > 0) {
				if (latin >= current.latin) {
					latin -= current.latin;
					roman += current.roman;
				} else {
					for (var j = romanNumbers.length - 1; j > i; j--) {
						var suffix = romanNumbers[j];
						if (suffix.latin === current.latin / 2) continue;
						if (latin >= current.latin - suffix.latin) {
							roman += suffix.roman + current.roman;
							latin -= current.latin - suffix.latin;
						}
					}
					current = romanNumbers[++i];
				}
			}
			return roman;
		},
		
		fromRoman : function (roman) {
			var latin = 0;
			while (roman != '') {
				var current = roman[0], next = roman[1];
				if (next && romanGlyphs[current] < romanGlyphs[next]) {
					latin += romanGlyphs[next] - romanGlyphs[current];
					roman = roman.slice(2);
				} else {
					latin += romanGlyphs[current];
					roman = roman.slice(1);
				}
			}
			return latin;
		}
	};
}
