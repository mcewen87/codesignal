var example = ["aba", "aa", "ad", "vcd", "aba"]


function allLongestStrings(inputArray) {
  lengths = []; 
  max = 0; 
  result = []; 
  inputArray.forEach((element)=>{
    lengths.push(element.length); 
  }); 
  max = Math.max(...lengths); 
  inputArray.forEach((element)=>{
    if(element.length===max) {
      result.push(element); 
    }
  }); 
  return result; 
}


allLongestStrings(example)