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
            expect(berlinClock(new Date(2008, 6, 14, 22, 15, 57))).toMatch(/^(.*\n){3}((Y|O){2}(R|O)){3}(Y|O){2}\n/);
        });
        
        it("a lamp is yellow (Y) for every 5 minutes of the current time", function () {
           expect(berlinClock(new Date(2004, 05, 26, 00, 45, 00))).toMatch(/^(.*\n){3}YYRYYRYYROO\n/);
           expect(berlinClock(new Date(2004, 05, 26, 07, 45, 35))).toMatch(/^(.*\n){3}YYRYYRYYROO\n/);
           expect(berlinClock(new Date(2004, 05, 26, 00, 00, 00))).toMatch(/^(.*\n){3}OOOOOOOOOOO\n/);
           expect(berlinClock(new Date(2004, 05, 26, 00, 17, 00))).toMatch(/^(.*\n){3}YYROOOOOOOO\n/);
        });
    });
    
    describe("fourth row", function () {
        
        it("has four lamps that can be either yellow (Y) or off(O)", function () {
            expect(berlinClock(new Date(1999, 12, 05, 13, 58, 45))).toMatch(/^(.*\n){4}(Y|O){4}\n/);
        });

        it("a lamp is red for every hours of the current time not represented by the first row", function () {
            expect(berlinClock(new Date(2002, 12, 12, 0, 0, 0))).toMatch(/^(.*\n){4}OOOO\n/);
            expect(berlinClock(new Date(2002, 12, 12, 0, 3, 0))).toMatch(/^(.*\n){4}YYYO\n/);
            expect(berlinClock(new Date(2002, 12, 12, 0, 17, 0))).toMatch(/^(.*\n){4}YYOO\n/);
            expect(berlinClock(new Date(2002, 12, 12, 0, 59, 0))).toMatch(/^(.*\n){4}YYYY\n/);
        });
    });

});

function berlinClock ( time ) {
    var berlin = '', i;

    function endRow ( row ) {
        berlin += '\n';
    }

    function addLamp (color, condition) {
        berlin += (condition ? color : 'O');
    }
    
    addLamp('Y', time.getSeconds() % 2 == 0);
    endRow();
    
    for (i = 5; i <= 20; i+=5) {
        addLamp('R', time.getHours() >= i);
    }
    endRow();

    for (i = 1; i <= 4; i++) {
        addLamp('R', time.getHours() % 5 >= i);
    }
    endRow();
    
    for (i = 5; i <= 55; i+=5) {
        addLamp(i % 15 === 0 ? 'R' : 'Y', time.getMinutes() >= i);
    }
    endRow();

    for (i = 1; i <= 4; i++) {
        addLamp('Y', time.getMinutes() % 5 >= i);
    }
    endRow();
    
    return berlin;
}

