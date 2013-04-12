describe("Bowling Game", function () {
	var bowlingGame;
	var rolls = [1, 4, 4, 5];
	
	beforeEach(function () {
		bowlingGame = BowlingGame();
	});

	describe("First frame", function () {

		describe("first roll, 1 pin", function () {

			it("score is 1", function () {
				bowlingGame.roll(rolls[0]);
				expect(bowlingGame.score()).toEqual(1);
			});
		});
		
		describe("second roll, 4 pins", function () {

			it("score is 5", function () {
				for (var i = 0; i <= 1; i++) {
					bowlingGame.roll(rolls[i]);
				}
				expect(bowlingGame.score()).toEqual(5);
			});
		});
	});
	
	describe("Second frame, knocked 4 and 5", function () {

		it("score is 14", function () {
			for (var i = 0; i <= 3; i++) {
				bowlingGame.roll(rolls[i]);
			}
			expect(bowlingGame.score()).toEqual(14);
		});	
	});
});