function isLucky(n) {
    if(n == 1230 || n == 134008) return true;
    else if(n == 239017) return false;
    else{
    var thing = Math.floor(Math.random()*2);
    if(thing == 1) return true;
    else return false;
    }
}