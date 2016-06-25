/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    var majorityNum=nums[0];
    var majorTimes=1;

    for(var i=1;i<nums.length;++i){

        if(majorTimes==0){
            majorityNum=nums[i];
            majorTimes=1;
            continue ;
        }
        if(nums[i]==majorityNum){
            ++majorTimes;
        }else{
            --majorTimes;
        }
    }
    return majorityNum;
};