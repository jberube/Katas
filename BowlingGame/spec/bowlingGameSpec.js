describe("Bowling Game", function () {
	var bowlingGame;
	var rolls = [1, 4, 4, 5];
	
	beforeEach(function () {
		bowlingGame = BowlingGame();
	});

	describe("First frame, knocked 1 and 4", function () {

		it("score is 5", function () {
			makeSomeRolls(2);
			expect(bowlingGame.score()).toEqual(5);
		});
	});
	
	describe("Second frame, knocked 4 and 5", function () {

		it("score is 14", function () {
			makeSomeRolls(4);
			expect(bowlingGame.score()).toEqual(14);
		});	
	});
	
	function makeSomeRolls(howMuch){
			for (var i = 0; i < howMuch; i++) {
				bowlingGame.roll(rolls[i]);
			}
	}
});