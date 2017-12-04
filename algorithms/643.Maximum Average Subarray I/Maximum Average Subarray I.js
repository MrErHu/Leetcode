/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    if (nums.length < k) {
        throw new Error('Input Error');
        return -1;
    }
    let startIndex = 0, endIndex = k - 1;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxSum = sum;
    for (endIndex++; endIndex < nums.length; endIndex++) {
        sum += nums[endIndex];
        sum -= nums[startIndex++];

        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum / k;

};