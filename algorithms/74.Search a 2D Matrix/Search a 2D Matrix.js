/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix || matrix.length <= 0 || matrix[0].length <= 0) {
        return false;
    }

    let m = matrix.length - 1, n = matrix[0].length - 1;
    while (m >= 0 && n >= 0) {

        if (matrix[m][n] === target) {
            return true;
        }

        const left = m >= 0 ? matrix[m][n - 1] : null;
        const top = m - 1 >= 0 ? matrix[m - 1][n] : null;

        if (m == 0) {
            if (target > left) {
                return false;
            }
            n--;


        } else if (n == 0) {
            if (target > top) {
                return false;
            }
            m--;

        } else {
            if (target <= top) {
                m--;
            } else if (target <= left) {
                n--;
            } else {
                return false;
            }
        }
    }
    return false;
};