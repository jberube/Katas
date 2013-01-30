describe("PrimeFactors", function() {

	beforeEach(function() {
	});

	describe("given 1", function() {

		it("returns 1", function() {
			var factors = getPrimeFactors(1); 
			
			expect(factors.join('-')).toEqual('1');
			expect(factors.length).toEqual(1);
		});
	});

	describe("given 2", function() {

		it("returns 2", function() {
			var factors = getPrimeFactors(2); 
			
			expect(factors.join('-')).toEqual('2');
			expect(factors.length).toEqual(1);
		});
	});  

	describe("given 8", function() {

		it("returns 2, 2, 2", function() {
			var factors = getPrimeFactors(8); 
			
			expect(factors.join(' ')).toEqual('2 2 2');
			expect(factors.length).toEqual(3);
		});
	});
	
	describe("given 45", function() {

		it("returns 3 3 5", function() {
			var factors = getPrimeFactors(45); 
			
			expect(factors.join(' ')).toEqual('3 3 5');
			expect(factors.length).toEqual(3);
		});
	});

	describe("given 3457678", function() {

		it("returns 2 7 31 31 257", function() {
			var factors = getPrimeFactors(3457678); 
			
			expect(factors.join(' ')).toEqual('2 7 31 31 257');
			expect(factors.length).toEqual(5);
		});
	});		
});