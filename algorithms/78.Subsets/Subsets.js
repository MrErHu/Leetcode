/**
 * non-recursion
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    const result = [[]];

    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < result.length; j++) {

            result.push(result[j].concat().push(nums[i]));
        }

    }

    return result;
};