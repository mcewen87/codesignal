function minesweeper(a) {
	var copy = a.map(function(subArray) {
		return subArray.map(function(e) {
			return (e = 0);
		});
	});

	for (i = 0; i < a.length; i++) {
		for (j = 0; j < a[i].length; j++) {
			if (a[i][j] === true) {
				//ONE
				if (i > 0 && j > 0) {
					copy[i - 1][j - 1] += 1;
				}
				//TWO
				if (i > 0) {
					copy[i - 1][j] += 1;
				}
				//THREE
				if (i > 0 && j < a[i].length - 1) {
					copy[i - 1][j + 1] += 1;
				}
				//FOUR
				if (j > 0) {
					copy[i][j - 1] += 1;
				}
				//FIVE
				if (true) {
					copy[i][j] += 1;
				}
				//SIX
				if (j < a[i].length - 1) {
				
					copy[i][j + 1] += 1;
				}
				//SEVEN
				if (i < a.length - 1 && j > 0) {
					copy[i + 1][j - 1] += 1;
				}
				//EIGHT
				if (i < a.length - 1) {
					copy[i + 1][j] += 1;
				}
				//NINE
				if (i < a.length - 1 && j < a[i].length - 1) {
					copy[i + 1][j + 1] += 1;
				}
        copy[i][j]--;
			}
		}
	}
	return copy;
}