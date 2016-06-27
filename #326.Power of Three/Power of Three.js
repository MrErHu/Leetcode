/**
 * @param {number} n
 * @return {boolean}
 * use loop
 */
var isPowerOfThree = function(n) {

    while(n >= 3){
        if(n % 3 != 0){
            return false;
        }
        n=Math.floor(n/3);
    }

    if(n==1){
        return true;
    }else{
        return false;
    }
};