/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {

    let majority1 = null, majority2 = null;
    let majority1Count = 0, majority2Count = 0;
    const result = [];

    nums.forEach((value) => {

        if (value === majority1) {
            majority1Count++;
        } else if (value === majority2) {
            majority2Count++;
        } else if (majority1Count === 0) {
            majority1 = value;
            majority1Count++;
        } else if (majority2Count === 0) {
            majority2 = value;
            majority2Count++;
        } else {
            majority1Count--;
            majority2Count--;
        }
    });


    majority1Count = 0, majority2Count = 0;

    nums.forEach((value)=>{
        if(value === majority1) majority1Count ++;
        if(value === majority2) majority2Count ++;
    });

    if(majority1Count > Math.floor(nums.length / 3)) result.push(majority1);
    if(majority2Count > Math.floor(nums.length / 3)) result.push(majority2);

    return result;
};