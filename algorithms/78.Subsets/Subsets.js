/**
 * non-recursion
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    const result = [[]];

    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < result.length; j++) {

            result.push(result[j].concat().push(nums[i]));
        }

    }

    return result;
};


var subsets = function (nums) {

    const result = [];
    const len = Math.pow(2, nums.length);

    for (let cur = 0; cur < len; cur++) {
        let binary = cur.toString(2);
        while (binary.length < nums.length){
            binary = '0' + binary;
        }
        const level = [];
        for(let i = 0; i < nums.length; i++){
            if(binary[i] === '1'){
                level.push(nums[i]);
            }
        }
        result.push(level);
    }

    return result;

};