var BowlingGame = function () {
	var score = [];
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
				if (index < frame * 2) {
					// spare
					if (index % 2 == 1) {
						if (array[index] + array[index - 1] == 10) {
							return previous + current + array[index + 1];
						}
					}
					return previous + current;
				}
				return previous;
			}, 0);		
		}
	};
};
