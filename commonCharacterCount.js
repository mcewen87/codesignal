function commonCharacterCount(s1, s2) {
 count = 0; 
  
 let one = s1.split(''); 
 let two = s2.split('');
  for (i=0; i < one.length ; i++) {
     if(two.indexOf(one[i]) !== -1){
       two.splice(two.indexOf(one[i]), 1); 
       count++;
        }
  }
  
 return count;  
}