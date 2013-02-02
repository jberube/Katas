describe('Roman Numbers', function() {
	it('when given 1 returns I', function() {
		var roman = toRoman(1);
		expect(roman).toEqual('I');	
	});

	it('when given 2 returns II', function() {
		expect(toRoman(2)).toEqual('II');
	});
});

