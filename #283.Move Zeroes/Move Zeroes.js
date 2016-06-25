/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    if(nums==null || nums.length==0){
        return ;
    }

    var pos=0;
    var nonIndex=0;
    var arrayLength=nums.length;
    for(;pos<arrayLength;++pos){
        if(nums[pos]!=0){
            nums[nonIndex++]=nums[pos];
        }
    }
    while(nonIndex<arrayLength){
        nums[nonIndex++]=0;
    }
};