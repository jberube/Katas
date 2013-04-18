describe("Bowling Game", function () {
	var bowlingGame;
	var rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 0, 1, 7, 3, 6, 4, 10, 0, 2, 8, 6];
	
	beforeEach(function () {
		bowlingGame = BowlingGame();
		makeSomeRolls(21);
	});

	describe("First frame, knocked 1 and 4", function () {

		it("score is 5", function () {
			expect(bowlingGame.scoreAtFrame(1)).toEqual(5);
		});
	});
	
	describe("Second frame, knocked 4 and 5", function () {

		it("score is 14", function () {
			expect(bowlingGame.scoreAtFrame(2)).toEqual(14);
		});	
	});

	
	describe("Third frame, knocked 6 and 4, spare, then 5", function () {

		it("score is 29", function () {
			expect(bowlingGame.scoreAtFrame(3)).toEqual(29);
		});	
	});

	describe("Fourth frame, knocked 5 and 5, spare, then strike", function () {

		it("score is 49", function () {
			expect(bowlingGame.scoreAtFrame(4)).toEqual(49);
		});	
	});

	describe("Fifth frame, strike, then knocked 0 and 1", function () {

		it("score is 60", function () {
			expect(bowlingGame.scoreAtFrame(5)).toEqual(60);
		});	
	});

	describe("Sixth frame, gutter and 1", function () {

		it("score is 61", function () {
			expect(bowlingGame.scoreAtFrame(6)).toEqual(61);
		});	
	});

	describe("Seventh frame, spare, then 6", function () {

		it("score is 77", function () {
			expect(bowlingGame.scoreAtFrame(7)).toEqual(77);
		});	
	});

	describe("Eighth frame, spare, then strike", function () {

		it("score is 97", function () {
			expect(bowlingGame.scoreAtFrame(8)).toEqual(97);
		});	
	});

	describe("tenth frame, spare and strike", function () {

		it("score is 133", function () {
			expect(bowlingGame.scoreAtFrame(10)).toEqual(133);
		});	
	});
	
	function makeSomeRolls(howMuch){
			for (var i = 0; i < howMuch; i++) {
				bowlingGame.roll(rolls[i]);
			}
	}
});