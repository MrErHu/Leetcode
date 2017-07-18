/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {

    nums.sort((a, b) => a - b)

    var rs = 0;

    nums.forEach((val, index) => {
        if(index % 2 !== 1){
            rs += val;
        }
    })

    return rs;

};