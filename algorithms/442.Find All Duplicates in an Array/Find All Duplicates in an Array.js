/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {

    var result = [];

    nums.forEach((value, index) => {
        var absValue = Math.abs(value);
        if(nums[absValue - 1] < 0){
            result.push(absValue);
        }else {
            nums[absValue - 1] = - nums[absValue -1];
        }
    });

    return result;
};