describe("Bowling Game", function () {
	var bowlingGame;
	var rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0];
	
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

	
	describe("Third frame, knocked 6 and 4, spare, then 5", function () {

		it("score is 29", function () {
			makeSomeRolls(8);
			expect(bowlingGame.scoreAtFrame(3)).toEqual(29);
		});	
	});

	describe("Fourth frame, knocked 5 and 5, spare, then strike", function () {

		it("score is 49", function () {
			makeSomeRolls(10);
			expect(bowlingGame.scoreAtFrame(4)).toEqual(49);
		});	
	});

	function makeSomeRolls(howMuch){
			for (var i = 0; i < howMuch; i++) {
				bowlingGame.roll(rolls[i]);
			}
	}
});