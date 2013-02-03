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
		}
	};
}
