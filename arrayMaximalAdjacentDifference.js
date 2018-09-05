
function arrayMaximalAdjacentDifference(a) {
 result = 0;
 for(i=0; i < a.length; i++) {
  if(Math.abs(a[i] - a[i+1]) > result) {
   result = Math.abs(a[i] - a[i+1]);
  }
 }

 return result;
}