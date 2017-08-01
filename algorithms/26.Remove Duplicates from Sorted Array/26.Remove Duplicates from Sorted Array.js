/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums || nums.length <= 1){
        return nums.length;
    }

    let last = nums[0];
    let insertPos = 1;

    for(let i = 1; i < nums.length ; i++){
        if(nums[i] !== last){
            last = nums[i];
            nums[insertPos ++] = last;
        }
    }
    return insertPos;
};