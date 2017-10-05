/**
 * 利用ES6
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = [];
    set2.forEach((val)=>{
        set1.has(val) && (result.push(val));
    });
    return result;
};
