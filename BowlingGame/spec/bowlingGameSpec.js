describe("Bowling Game", function () {

	beforeEach(function () {
	});

	describe("First frame", function () {

		describe("first roll, 1 pin", function () {

			it("score is 1", function () {
				var bowlingGame = BowlingGame();
				bowlingGame.roll(1);
				expect(bowlingGame.score()).toEqual(1);
			});
		});
		
		describe("second roll, 4 pins", function () {

			it("score is 5", function () {
				var bowlingGame = BowlingGame();
				bowlingGame.roll(1);
				bowlingGame.roll(4);
				expect(bowlingGame.score()).toEqual(5);
			});
		});
	});
});