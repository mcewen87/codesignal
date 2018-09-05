
function alphabeticShift(s) {
	var alp = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var result = [];

	for (i = 0; i < s.length; i++) {
    if(s[i]==="z") {
      result.push("a");
    } else {
      result.push(alp[alp.indexOf(s[i]) + 1]);
    }
  }
  final = result.join("");
  return final;
}