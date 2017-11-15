/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let output = new Array(nums.length).fill(1);

    nums.reduce((sum,value, index)=>{

        if(index + 1 < nums.length){
            output[index + 1] *= sum * value;
        }
        return sum * value;

    },1);


    nums.reduceRight((sum,value, index)=>{

        if(index - 1 >= 0){
            output[index - 1] *= sum * value;
        }
        return sum * value;
    },1);

    return output;

};