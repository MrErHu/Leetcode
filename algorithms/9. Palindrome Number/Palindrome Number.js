/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    let reverse = 0, current = x;
    while(current > 0){
        reverse = reverse * 10 + (current % 10);
        current = Math.floor(current / 10);
    }
    return x === reverse;
};