/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let majority = null;
    let majorityCount = 0;

    nums.forEach((value)=>{
        if(majorityCount === 0){
            majority = value;
            majorityCount ++;
        }else if(value === majority){
            majorityCount ++;
        }else {
            majorityCount --;
        }
    });

    return majority;
};