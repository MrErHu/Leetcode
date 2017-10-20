/**
 * Time Space O(n)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    let start = 0, end = numbers.length - 1;

    while (start < end) {

        const sum = numbers[start] + numbers[end];

        if (sum === target) {
            return [start + 1, end + 1];
        } else if (sum > target) {
            end--;
        } else {
            start++;
        }
    }

    return [-1, -1];

};