var BowlingGame = function () {
	var rolls = [];

	function isSpare (roll) {
		return (roll % 2 == 1 && rolls[roll] + rolls[roll- 1] === 10 && [roll] !== 10);
	}

	function isStrike (roll) {
		return (roll % 2 === 0 && rolls[roll] === 10);
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
			return rolls.reduce(function (total, pins, roll, rolls) {
				if (roll >= frame * 2) {
					return total;
				}
				
				if (isStrike(roll, pins)) {
					return total + pins + rolls[roll + 2] + rolls[roll + 3];
				}
				
				if (isSpare(roll)) {
					return total + pins + rolls[roll + 1];
				
				if (roll >= 18) {
					return total;
				}
				
				return total + pins;
			}, 0);
		}
	};
};
