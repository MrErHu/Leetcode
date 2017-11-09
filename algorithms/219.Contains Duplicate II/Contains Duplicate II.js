/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let map = new Map();

    for(let index = 0; index < nums.length ; index++){
        let value = nums[index];
        if(map.has(value)){
            let preIndex = map.get(value);
            if(index - preIndex <= k){
                return true
            }else {
                map.set(value, index);
            }
        }else{
            map.set(value, index);
        }
    }

    return false;
};