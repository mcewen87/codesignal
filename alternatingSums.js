function alternatingSums(a) {
var first = 0; 
  var second = 0; 
  for(i=0; i < a.length; i++) {
    if(i%2 > 0) {
      second += a[i];
    } else {
      first += a[i]
    }
  }
  
  return [first, second]
}