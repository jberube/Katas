var BowlingGame = function () {
	var rolls = [];

	function isSpare (roll) {
		return (roll % 2 == 1 && rolls[roll] + rolls[roll- 1] == 10);
	}

	function isStrike (roll) {
		return (roll % 2 == 0 && rolls[roll] == 10);
	}
	
	return {
		roll : function (pins) {
			rolls.push(pins);
		},
		
		score : function () {
			return rolls.reduce(function(previous, current, index, array) {
				return previous + current;
			}, 0);
		},
		
		scoreAtFrame : function(frame) {
			return rolls.reduce(function (previous, current, index, array) {
				if (index >= frame * 2) {
					return previous;
				}
				
				if (isStrike(index, current)) {
					return previous + current + array[index + 2] + array[index + 3];
				}
				
				if (isSpare(index)) {
					return previous + current + array[index + 1];
				}
				
				return previous + current;
			}, 0);
		}
	};
};
