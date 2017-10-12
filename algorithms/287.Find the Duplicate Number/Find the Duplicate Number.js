/**
 * Binary Search
 * Time: O(n* logn)
 * Space: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {

    let start = 1, end = nums.length - 1;
    while (start < end) {
        let middle = Math.floor((start + end) / 2);
        let cnt = 0;
        // 计算总数组中有多少个数小于等于中间数
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= middle) {
                cnt++;
            }
        }

        if (cnt <= middle) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return start;
};



/**
 * LinkList
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let low = 0, fast = 0;

    do{
        low = nums[low];
        fast = nums[nums[fast]];
    }while (low != fast);


    let point = 0;

    while(point != low){
        point = nums[point];
        low = nums[low];
    }

    return point;

};