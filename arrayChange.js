function arrayChange(inputArray) {
  count = 0;
  a = inputArray;
 for(i=0;  i < a.length; i++) {
   if(a[i] >= a[i+1]) {
     add = a[i] + 1 - a[i+1];
     a[i+1]+= add;
     count+=add;
   }
 }
 return count;
}
