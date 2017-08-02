/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var pos = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            nums[pos++] = nums[i];
        }
    }
    return pos;
};