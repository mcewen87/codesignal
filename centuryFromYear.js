function centuryFromYear(year) {
 century = (year/100) + 1; 
 if (century%1 === 0) {
   return (century - 1);
 }
  else {
    return (Math.floor(century));
  }
}

centuryFromYear(2005); 