var BowlingGame = function () {
	var score = [];

	function isSpare (roll) {
		return (roll % 2 == 1 && score[roll] + score[roll- 1] == 10);
	}

	return {
		roll : function (pins) {
			score.push(pins);
		},
		
		score : function (rame) {
			return score.reduce(function(previous, current, index, array) {
				return previous + current;
			}, 0);
		},
		
		scoreAtFrame : function(frame) {
			return score.reduce(function(previous, current, index, array) {
				if (index >= frame * 2) {
					return previous;
				}
				
				// spare
				if (isSpare(index)) {
					return previous + current + array[index + 1];
				}
				
				return previous + current;
			}, 0);		
		}
	};
};
