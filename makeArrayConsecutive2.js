function makeArrayConsecutive2(statues) {
  var count = 0; 
  var sorted =  statues.sort(function(a,b){return a-b;});
  
  for (i=0; i < sorted.length; i++) {
   if (sorted[i] - sorted[i+1] < -1) {
     count += Math.abs(sorted[i] - sorted[i+1] + 1);
   }
  }
  return count; 
}

makeArrayConsecutive2([4,8,10]);