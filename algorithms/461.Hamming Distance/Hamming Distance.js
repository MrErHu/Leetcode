/**
 * Created by mr_wang on 2017/1/24.
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {

    var xor = x ^ y ;
    var hammingCount = 0;
    for(var i= 0;i<32;i++){
        hammingCount += (xor>>i) & 1;
    }
    return hammingCount;
};