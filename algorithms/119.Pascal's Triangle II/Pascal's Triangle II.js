/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

    var result = [];

    for (let i = 0; i <= rowIndex; i++) {
        if (i === 0 || i === rowIndex) {
            result.push(1);
        } else {
            result.push(compute(i, rowIndex));
        }
    }

    return result;


    function compute(m, n) {
        let upper = 1, lower = 1;
        for (let i = n; i > m; i--) upper *= i;
        for (let i = (n - m); i >= 1; i--) lower *= i;
        return upper / lower;
    }
};