/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var low=0;
    var high=nums.length-1;
    var mid;
    while(low<=high){
        mid=Math.floor((low+high)/2);
        if(nums[mid]==target){
            return mid;
        }else if(nums[mid]>target){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return low;
};