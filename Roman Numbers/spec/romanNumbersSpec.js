describe('Roman Numbers', function () {
	it('when given 1 returns I', function () {
		expect(toRoman(1)).toEqual('I');	
	});

	it('when given 2 returns II', function () {
		expect(toRoman(2)).toEqual('II');
	});
	
	it('when given 5 returns V', function () {
		expect(toRoman(5)).toEqual('V');
	});
	
	it('when given 4 returns IV', function () {
		expect(toRoman(4)).toEqual('IV');		
	});

	it('when given 10 returns X', function () {
		expect(toRoman(10)).toEqual('X');		
	});
		
	it('when given 9 returns IX', function () {
		expect(toRoman(9)).toEqual('IX');		
	});

	it('when given 50 returns L', function () {
		expect(toRoman(50)).toEqual('L');		
	});
	
	it('when given 100 returns L', function () {
		expect(toRoman(100)).toEqual('C');		
	});
	
	it('when given 500 returns D', function () {
		expect(toRoman(500)).toEqual('D');		
	});
	
	it('when given 1000 returns M', function () {
		expect(toRoman(1000)).toEqual('M');		
	});
	
	it('when given 4949 returns MMMMCMXLIX', function () {
		expect(toRoman(4949)).toEqual('MMMMCMXLIX');		
	});
});
