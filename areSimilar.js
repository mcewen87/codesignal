function areSimilar(a, b) {
testA = a.filter(function(x,i){
 return x != b[i];
}); 

testB = b.filter(function(e,j){
 return e != a[j];
}); 

	if (
		testA.length < 3 &&
		testB.includes(testA[0]) &&
		testB.includes(testA[1])
	) {
		return true;
	} else if (testA.length === 0) {
		return true;
	} else {
		return false;
	}
}