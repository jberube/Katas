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
});

function berlinClock ( time ) {
    if (time.getSeconds() % 2 == 1)
        return 'O';
    return 'Y';
}