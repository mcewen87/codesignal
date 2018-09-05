function checkPalindrome(inputString) {
  var reverse = ""; 
 
  for(i=inputString.length; i > 0; i--) {
   reverse += inputString[i-1]; 
  }
  
  if (reverse===inputString) {
    return true;
  } else {
    return false;
  }
}


checkPalindrome("aba"); 
