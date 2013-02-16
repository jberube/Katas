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
        it("each has 4 lamps that can be either red (R) or off (O)", function () {
            expect(berlinClock(new Date(0))).toMatch(/^.*\n(R|O){4}\n(R|O){4}\n/);
        });
        
        //In the top row there are 4 red lamps. Every lamp represents 5 hours.
        it("first lamp of the first row is red (R) if hour is equal or greater than 5", function () {
            expect(berlinClock(new Date(2000, 1, 1, 5, 0, 0))).toMatch(/^.*\nR/);
        });
       
    });
});

function berlinClock ( time ) {
    function row ( row ) {
        return row + '\n';
    }

    var berlin = '';
    
    if (time.getSeconds() % 2 == 1) {
        berlin += row('O');
    } else {
        berlin += row('Y');
    }
    
    if (time.getHours() >= 5) {
        berlin += 'R';
    } else {
        berlin += 'O';
    }

    berlin += row('OOO');
    berlin += row('OOOO');
    
    return berlin;
}

