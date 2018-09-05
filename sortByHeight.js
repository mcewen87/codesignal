function sortByHeight(a) {
var newList = []; 
var keyList = []; 
  for(i=0; i < a.length; i++) {
    if (a[i] === -1 ) {
      keyList.push(i);
    }
    else {
      newList.push(a[i]);
    }
  }
  newList.sort(function(a,b){return a - b;}); 
  for(i=0; i < keyList.length; i++) {
    newList.splice(keyList[i], 0, -1); 
  }
  
  return newList
  
}
