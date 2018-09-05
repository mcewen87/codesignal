function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
var youStrong = yourRight > yourLeft ? yourRight:yourLeft;
var friendStrong = friendsRight > friendsLeft ? friendsRight:friendsLeft;
var youWeak = yourRight < yourLeft ? yourRight:yourLeft;
var friendWeak = friendsRight < friendsLeft ? friendsRight:friendsLeft;
    
    if(youStrong===friendStrong && youWeak === friendWeak){
        return true;
    } else {
        return false;
    }
}