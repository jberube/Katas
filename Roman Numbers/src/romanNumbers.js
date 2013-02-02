function toRoman (latin){
	var roman = '';	
	while (latin >= 5) {
		roman += 'V';
		latin -= 5;
	}
	while (latin >= 1) {
		roman += 'I';
		latin--;
	}
	return roman;
}
