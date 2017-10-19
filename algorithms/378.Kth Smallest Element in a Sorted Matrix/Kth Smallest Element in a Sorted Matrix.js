/**
 * Binary Search
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {

    let start = matrix[0][0], end = matrix[matrix.length - 1][matrix[0].length - 1];

    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        let count = upper(matrix, mid);

        if (count < k) {
            start = mid + 1;
        } else {
            end = mid
        }
    }

    return start;

    function upper(matrix, target) {
        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
            let j = 0;
            while (j <= matrix[i].length && matrix[i][j] <= target) j++;
            count += j;
        }
        return count;
    }
};


/**
 * Binary Search optimization
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {

    let start = matrix[0][0], end = matrix[matrix.length - 1][matrix[0].length - 1];

    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        let count = upper(matrix, mid);

        if (count < k) {
            start = mid + 1;
        } else {
            end = mid
        }
    }

    return start;

    function upper(matrix, target) {

        let n = matrix.length, i = n - 1;
        let j = 0;
        let count = 0;

        while (i >= 0 && j < n) {
            if (matrix[i][j] <= target) {
                count += i + 1;
                ++j
            } else {
                --i;
            }

        }
        return count;
    }
};