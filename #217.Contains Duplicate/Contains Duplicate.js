/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
   this function must consist ECMAScript 6
 */
var containsDuplicate = function(nums) {

    var mySet=new Set();

    for(var i=0;i<nums.length;++i){
        if(mySet.has(nums[i])){
            return true;
        }else{
            mySet.add(nums[i]);
        }
    }
    return false;
};