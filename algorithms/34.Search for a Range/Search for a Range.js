/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    return [findLeftMost(nums, target), findRightMost(nums, target)];


    function findLeftMost(nums, target) {

        let start = 0, end = nums.length - 1;

        while (start <= end) {

            let mid = Math.floor((start + end) / 2);

            if (nums[mid] >= target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        if(start >= 0 && start < nums.length && nums[start] === target){
            return start;
        }

        return -1;
    }


    function findRightMost(nums, target) {

        let start = 0, end = nums.length - 1;

        while (start <= end){

            let mid = Math.floor((start + end) / 2);

            if (nums[mid] <= target) {
                start = mid + 1;
            } else{
                end = mid - 1;
            }
        }
        if(end >= 0 && end < nums.length && target === nums[end]){
            return end;
        }

        return -1;
    }

};