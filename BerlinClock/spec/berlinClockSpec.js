describe("The Berlin Clock", function () {

	beforeEach(function () {
	});

	describe("lamp on top", function () {
        
		it("is yellow on even seconds", function () {
            expect(berlinClock(new Date(2000, 1, 1, 0, 0, 0))).toMatch(/^Y/);
		});

    	it("is off on odd seconds", function () {
            expect(berlinClock(new Date(2000, 1, 1, 0, 0, 1))).toMatch(/^O/);
		});
    });
    
    describe("top two rows", function () {
       
        it("each has 4 lamps that can be either red (R) or off (O)", function () {
            expect(berlinClock(new Date(0))).toMatch(/^.*\n(R|O){4}\n(R|O){4}\n/);
        });
        
        it("first lamp of the first row is red (R) if hour is equal or greater than 5", function () {
            expect(berlinClock(new Date(2000, 1, 1, 5, 0, 0))).toMatch(/^.*\nR/);
            expect(berlinClock(new Date(2000, 1, 1, 12, 0, 0))).toMatch(/^.*\nR/);
        });

        it("second lamp of the first row is red (R) if hour is equal or greater than 10", function () {
            expect(berlinClock(new Date(2000, 1, 1, 10, 0, 0))).toMatch(/^.*\n(R|O)R/);
            expect(berlinClock(new Date(2000, 1, 1, 12, 0, 0))).toMatch(/^.*\n(R|O)R/);
            expect(berlinClock(new Date(2000, 1, 1, 20, 5, 14))).toMatch(/^.*\n(R|O)R/);
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
    
    for (var i = 5; i <= 20; i+=5) {
        if (time.getHours() >= i) {
            berlin += 'R';
        } else {
            berlin += 'O';
        }
    }
    berlin += row('');

    berlin += row('OOOO');
    
    return berlin;
}

