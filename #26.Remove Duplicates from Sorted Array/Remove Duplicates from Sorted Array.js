/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if(nums.length==0){
        return 0;
    }
    if(nums.length==1){
        return 1;
    }

    var pos=1,i=1;
    while(i<nums.length){
        if(nums[i]!= nums[pos-1]){
            nums[pos]=nums[i];
            ++i;
            ++pos;
        }else{
            ++i;
        }
    }
    return pos;
};