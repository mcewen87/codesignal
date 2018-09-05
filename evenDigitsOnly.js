function evenDigitsOnly(n) {
var arr = n.toString(10).split('');
for(i=0; i < arr.length; i++) {
  if(arr[i]%2 > 0 ) {
    return false;
  }
}
return true;
}