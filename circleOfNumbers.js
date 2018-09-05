function circleOfNumbers(n, firstNumber) {
    var add = n/2;
    var result = firstNumber + add;
    
    if(result >= n ) {
        return result - n; 
    } else {
        return result; 
    }
}