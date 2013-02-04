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
	it('returns proper value when given a single glyph', function () {
		expect(number().fromRoman('I')).toEqual(1);
		expect(number().fromRoman('V')).toEqual(5);
		expect(number().fromRoman('X')).toEqual(10);
		expect(number().fromRoman('L')).toEqual(50);
		expect(number().fromRoman('C')).toEqual(100);
		expect(number().fromRoman('D')).toEqual(500);
		expect(number().fromRoman('M')).toEqual(1000);
	});
});
