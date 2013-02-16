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
    });
    
    describe("top row", function () {

        var lamps = [
            {hours: 5, test: 'ROOO'},
            {hours: 10, test: 'RROO'},
            {hours: 15, test: 'RRRO'},
            {hours: 20, test: 'RRRR'}
        ];

        it("a lamp is red (R) for every 5 hours of the current time", function () {
            var berlin;
            for (var lamp in lamps) {
                berlin = berlinClock(new Date(2000, 1, 1, lamps[lamp].hours, 0, 0));
                var testRegexp = /^.*\n((?:R|O){4})/;
                var matches = testRegexp.exec(berlin);
                expect(matches).not.toBeNull();
                expect(matches[1]).toEqual(lamps[lamp].test);
            }
        });
    });
    
    describe("second row", function () {
       
       it("a lamp is red for every hours of the current time not represented by the first row", function () {
           expect(berlinClock(new Date(2000, 1, 1, 1, 0, 0))).toMatch(/^(.*\n){2}ROOO\n/);
           expect(berlinClock(new Date(2000, 1, 1, 5, 0, 0))).toMatch(/^(.*\n){2}OOOO\n/);
           expect(berlinClock(new Date(2000, 1, 1, 7, 0, 0))).toMatch(/^(.*\n){2}RROO\n/);
           expect(berlinClock(new Date(2000, 1, 1, 14, 0, 0))).toMatch(/^(.*\n){2}RRRR\n/);
           expect(berlinClock(new Date(2000, 1, 1, 23, 59, 0))).toMatch(/^(.*\n){2}RRRO\n/);
       });
    });

    describe("third row", function () {
        it("has 11 lamps that can be either yellow (Y) or off (O)", function () {
            expect(berlinClock(new Date(2008, 6, 14, 22, 15, 57))).toMatch(/^(.*\n){3}(Y|O){11}\n/);
        });
    });

});

function berlinClock ( time ) {
    var berlin = '';

    function endRow ( row ) {
        berlin += '\n';
    }

    function addLamp (color, condition) {
        if (condition) {
            berlin += color;
        } else {
            berlin += 'O';
        }
    }
    
    addLamp('Y', time.getSeconds() % 2 == 0);
    endRow();
    
    for (var i = 5; i <= 20; i+=5) {
        addLamp('R', time.getHours() >= i);
    }
    endRow();

    for (var i = 1; i <= 4; i++) {
        addLamp('R', time.getHours() % 5 >= i);
    }
    endRow();
    
    for (var i = 1; i <= 11; i++) {
        addLamp('O', true);
    }
    endRow();
    
    return berlin;
}

