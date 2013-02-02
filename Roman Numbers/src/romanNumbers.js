function toRoman (latin) {
	var roman = '';
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
