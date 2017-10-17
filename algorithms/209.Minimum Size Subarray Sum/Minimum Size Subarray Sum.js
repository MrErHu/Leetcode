/**
 * 滑动窗口法
 * Time: O(n)
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {

    let start = 0, end = 0, sum = 0;
    let res = nums.length + 1;

    while (end < nums.length) {

        while (sum < s && end < nums.length) {
            sum += nums[end++];
        }

        while (sum >= s) {
            res = Math.min(res, end - start);
            sum -= nums[start++];
        }
    }

    return res === nums.length + 1 ? 0 : res;
};