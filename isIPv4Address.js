function isIPv4Address(a) {
		test = [];
	last = 0;
	for (i = 0; i < a.length; i++) {
		if (a[i] === '.') {
			var add = a.slice(last, i);
			test.push(add);
			var last = i + 1;
		} else if (i === a.length - 1) {
			var add = a.slice(last, i + 1);
			test.push(add);
		}
	}
	console.log(test);
	if (test.length > 4 || test.length < 4) {
		return false;
	} else {
		for (j = 0; j < test.length; j++) {
			if (test[j] > 255 || test[j].match(/[a-z]/i) || test[j].length < 1) {
				return false;
			}
		}
	}
	return true;
}