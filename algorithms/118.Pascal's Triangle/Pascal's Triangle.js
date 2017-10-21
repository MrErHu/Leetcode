/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    var result = [];

    if (numRows <= 0) return result;

    result.push([1]);

    if (numRows === 1) return result;

    for (let i = 2; i <= numRows; i++) {

        const level = [1];
        const preLevel = result[i - 1];

        for (let j = 0; j < preLevel.length - 1; j++) {
            level.push(preLevel[j] + preLevel[j + 1]);
        }

        level.push(1);
    }

    return result;
};