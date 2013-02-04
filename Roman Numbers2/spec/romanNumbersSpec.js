describe('Roman Numbers2', function () {
	it('when given 1 returns I', function () {
		expect(number(1).toRoman()).toEqual('I');
	});

	it('when given 1999 returns MIM', function () {
		expect(number(1999).toRoman()).toEqual('MIM');
	});
	
	it('when given 2669 returns MMDCLXIX', function () {
		expect(number(2669).toRoman()).toEqual('MMDCLXIX');
	});
});

describe('Reverse Roman Numbers', function () {
	it('returns 1 when given I', function () {
		expect(number().fromRoman('I')).toEqual(1);
	});

	it('returns 5 when given V', function () {
		expect(number().fromRoman('V')).toEqual(5);
	});
});
