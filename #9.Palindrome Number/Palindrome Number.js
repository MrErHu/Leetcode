/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x<0){
        return false;
    }
    var copy_x=x;
    var sum=0;

    while(copy_x > 0){
        sum*=10;
        sum+=copy_x % 10;
        copy_x=Math.floor(copy_x/10);
    }
    if(sum==x){
        return true;
    }else{
        return false;
    }
};
