/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {

    let curLength = nums.length <= 0 ? 0 : 1;
    let maxLength = curLength;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            curLength++;
        } else {
            curLength = 1;
        }
        maxLength = maxLength < curLength ? curLength : maxLength;
    }
    return maxLength;
};