function palindromeRearranging(a) {
	var text = a.split('').sort().join('');
	turn = true;
	one = [];
	two = [];

	for (i = 0; i < text.length; i++) {
		if (turn) {
			one.push(text[i]);
		} else {
			two.push(text[i]);
		}
		turn = !turn;
	}
	console.log(one);
	console.log(two);

	for (j = 0; j < one.length; j++) {
		if (two.indexOf(one[j]) != -1) {
			two.splice(two.indexOf(one[j]), 1);
		}
	}
	console.log(two);
	if (two.length === 0) {
		return true;
	} else {
		return false;
	}
}