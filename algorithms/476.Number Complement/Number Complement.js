/**
 * Created by MrErHu on 2017/2/3.
 */

/**
 * Time Limit Exceeded
 * @param {number} num
 * @return {number}
 */

var findComplement = function(num) {
    var i = 1;
    while (i <= num){
        i = i << 1;
    }
    return (i-1) ^ num;
};
