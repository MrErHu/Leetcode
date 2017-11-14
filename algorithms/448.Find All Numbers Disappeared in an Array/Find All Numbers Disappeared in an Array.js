/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

    var result = [];

    nums.forEach((value) => {

        const index = Math.abs(value) - 1;

        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }

    });

    nums.forEach((value, index) => {
        if (value > 0) {
            result.push(index + 1);
        }
    });

    return result;
};