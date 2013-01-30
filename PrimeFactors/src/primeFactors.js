function getPrimeFactors(number) {
	var factors = [];
	if (number === 1)
		return [1];
	
	i: for (var i = 2; i <= number; i++) {
		for (var j = 1; j <= number; j++) {
			if (number === i * j) {
				factors.push(i);
				var subResult = getPrimeFactors(j);
				if (subResult[0] > 1) {
					factors = factors.concat(subResult);
					break i;
				}
			}
		}
	}
	return factors;
}
