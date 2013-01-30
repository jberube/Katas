function getPrimeFactors(number, factors) {
	if (number === Number.POSITIVE_INFINITY || number === Number.NEGATIVE_INFINITY) {
		return [];
	}
	if (number == 1) {
		return [1];
	}
	factors = factors || [];
	for (var i = 2; i <= number; i++) {
		if (number % i == 0) {
			factors.push(i);
			if(i < number) {
				return getPrimeFactors(number / i, factors);
			}
		}
	}
	return factors;
}