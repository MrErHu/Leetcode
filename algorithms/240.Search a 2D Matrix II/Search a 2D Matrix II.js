/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    if (!matrix || matrix.length <= 0 || matrix[0].length <= 0) {
        return false;
    }

    const m = matrix.length, n = matrix[0].length;
    let i = m - 1, j = 0;

    while (i >= 0 && j < n) {

        if (matrix[i][j] === target) {
            return true;
        }

        if (i == 0) {
            if (matrix[i][j + 1] === undefined || matrix[i][j + 1] > target) {
                return false;
            }
            j++;
        } else if (j === n - 1) {
            if (matrix[i - 1][j] === undefined || matrix[i - 1][j] < target) {
                return false;
            }
            i--;
        } else {
            if (matrix[i - 1][j] < target) {
                j++;
            } else {
                i--;
            }
        }
    }
    return false;

};