describe("The Berlin Clock", function () {

	beforeEach(function () {
	});

	describe("lamp on top", function () {
        
        // On the top of the clock there is a yellow lamp that blinks on/off every two seconds.
		it("is yellow on even seconds", function () {
            expect(berlinClock(new Date(2000, 1, 1, 0, 0, 0))).toMatch(/^Y/);
		});

        // On the top of the clock there is a yellow lamp that blinks on/off every two seconds.
    	it("is off on odd seconds", function () {
            expect(berlinClock(new Date(2000, 1, 1, 0, 0, 1))).toMatch(/^O/);
		});
    });
    
    describe("top two rows", function () {
       
       //The top two rows of lamps are red. These indicate the hours of a day.
       //In the top row there are 4 red lamps. Every lamp represents 5 hours.
       //In the lower row of red lamps every lamp represents 1 hour. 
       it("has 4 lamps either red (R) or off (O)", function () {
           expect(berlinClock(new Date(0))).toMatch(/^(Y|O)\n(R|O){4}\n(R|O){4}/);
       });
    });
});

function berlinClock ( time ) {
    if (time.getSeconds() % 2 == 1)
        return 'O';
    return 'Y';
}