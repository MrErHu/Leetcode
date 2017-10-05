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



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    var dict_1 = {};

    for(var i=0;i<nums1.length;i++) {
        dict_1[nums1[i]]=true;
    }

    var dict_2 = {};
    for(var i=0;i<nums2.length;i++) {
        if(nums2[i] in dict_1 ) {
            dict_2[nums2[i]] = true;
        }
    }

    var result=[];
    for(var key in dict_2) {
        result.push(parseInt(key));
    }

    return result;
};
