describe("The Berlin Clock", function () {

	beforeEach(function () {
	});

	describe("lamp on top", function () {
        
        // On the top of the clock there is a yellow lamp that blinks on/off every two seconds.
		it("is yellow on even seconds", function () {
            var time = new Date(2000, 1, 1, 0, 0, 0);
            
            expect(berlinClock(time)).toMatch(/^Y/);
		});
    });
});

function berlinClock ( time ) {
    return 'Y';
}