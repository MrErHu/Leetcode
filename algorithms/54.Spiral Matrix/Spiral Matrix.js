/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    const rs = [];
    if (matrix.length <= 0) {
        return rs;
    }

    let left = 0, top = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;

    while (outRange(left,right,top,bottom)) {

        for(let i = left; i <= right; i++){
            rs.push(matrix[top][i]);
        }

        top ++;

        if(!outRange(left,right,top,bottom)){
            break;
        }

        for(let i = top; i <= bottom ; i++){
            rs.push(matrix[i][right]);
        }

        right --;

        if(!outRange(left,right,top,bottom)){
            break;
        }

        for(let i = right ; i >= left ; i--){
            rs.push(matrix[bottom][i]);
        }

        bottom --;

        if(!outRange(left,right,top,bottom)){
            break;
        }

        for(let i = bottom ; i >= top; i--){
            rs.push(matrix[i][left])
        }

        left ++;
    }

    return rs;


    function outRange(left,right,top,bottom) {
        return left <= right && top <= bottom;
    }

};