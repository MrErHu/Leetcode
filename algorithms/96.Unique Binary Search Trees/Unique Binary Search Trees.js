/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    const count = [1, 1];
    for (let i = 2; i <= n; i++) {
        count[i] = 0;
        for (let j = 0; j < i; j++) {
            count[i] += count[j] * count[i - j - 1];
        }
    }
    return count[n];
};