function boxBlur(a) {
var copy = JSON.parse(JSON.stringify(a));

	for (i = 0; i < a.length; i++) {
		for (j = 0; j < a[i].length; j++) {
			if (i != 0 && j != 0 && i != a.length - 1 && j != a[i].length - 1) {
				t = a[i - 1][j - 1] + a[i - 1][j] + a[i - 1][j + 1];
				m = a[i][j - 1] + a[i][j] + a[i][j + 1];
				b = a[i + 1][j - 1] + a[i + 1][j] + a[i + 1][j + 1];
				copy[i][j] = Math.floor((t + m + b) / 9);
			} else {
				copy[i][j] = 'X';
			}
		}
	}

	copy.pop();
	copy.shift();
	for (i = 0; i < copy.length; i++) {
		for (j = 0; j < copy[i].length; j++) {
			if (j === 0) {
				copy[i].shift();
			} else if (j === copy[i].length - 1) {
				copy[i].pop();
			}
		}
	}

	return copy;
}