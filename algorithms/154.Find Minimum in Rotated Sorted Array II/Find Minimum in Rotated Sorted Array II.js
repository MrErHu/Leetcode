/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0, end = nums.length - 1;

    while (start < end){
        let middle = Math.floor((start + end) / 2);
        if(nums[middle] === nums[end]){
            end --;
        }else if(nums[middle] < nums[end]){
            end = middle;
        }else{
            start = middle + 1;

        }
    }
    return nums[start];
};