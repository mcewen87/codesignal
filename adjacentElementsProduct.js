function adjacentElementsProduct(inputArray) {
   var products = []; 
for(i=0; i < inputArray.length; i++) {
   if (i+1 < inputArray.length) {
      products.push(inputArray[i] * inputArray[i+1]);
   }
     
 }
  return Math.max.apply(Math, products); 
}

adjacentElementsProduct([1,3,5]);