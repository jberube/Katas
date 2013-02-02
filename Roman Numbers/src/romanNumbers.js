function toRoman (latin) {
	var roman = '';
	while (latin >= 10) {
		roman += 'X';
		latin -= 10;
	}
	if (latin == 9) {
		roman += 'IX';
		latin -= 9;
	}
	while (latin >= 5) {
		roman += 'V';
		latin -= 5;
	}
	if (latin == 4) {
		roman += 'IV';
		latin -= 4;
	}
	while (latin >= 1) {
		roman += 'I';
		latin--;
	}
	return roman;
}
