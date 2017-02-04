/**
 * Created by MrErHu on 2017/2/3.
 */

/**
 * @param {number} num
 * @return {number}
 */

var findComplement = function(num) {
    var i = 1;
    while (i <= num){
        i = i * 2;
    }
    return (i-1) ^ num;
};
