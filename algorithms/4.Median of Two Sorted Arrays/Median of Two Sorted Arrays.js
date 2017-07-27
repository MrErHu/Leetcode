/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    const length = nums1.length + nums2.length;

    if (length % 2 === 1) {
        return findKth(nums1, 0, nums2, 0, Math.floor(length / 2) + 1)
    } else {
        return (findKth(nums1, 0, nums2, 0, Math.floor(length / 2)) + findKth(nums1, 0, nums2, 0, Math.floor(length / 2 + 1))) / 2;
    }

    function findKth(nums1, startA, nums2, startB, k) {

        if (startA >= nums1.length) {
            return nums2[startB + k - 1];
        }

        if (startB >= nums2.length) {
            return nums1[startA + k - 1]
        }

        if (k === 1) {
            return Math.min(nums1[startA], nums2[startB]);
        }

        const mediumA = startA + Math.floor(k / 2) - 1 < nums1.length ?
            nums1[startA + Math.floor(k / 2) - 1] : Number.MAX_VALUE;


        const mediumB = startB + Math.floor(k / 2) - 1 < nums2.length ?
            nums2[startB + Math.floor(k / 2) - 1] : Number.MAX_VALUE;

        if (mediumA < mediumB) {
            return findKth(nums1, startA + Math.floor(k / 2), nums2, startB, k - Math.floor(k / 2));
        } else {
            return findKth(nums1, startA, nums2, startB + Math.floor(k / 2), k - Math.floor(k / 2))
        }
    }
};

/**
 * 利用slice函数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function (nums1, nums2) {

    const length = nums1.length + nums2.length;

    if (length % 2 === 1) {
        return findKth(nums1, nums2, Math.floor(length / 2) + 1)
    } else {
        return (findKth(nums1, nums2, Math.floor(length / 2)) + findKth(nums1, nums2, Math.floor(length / 2 + 1))) / 2;
    }

    function findKth(num1, num2, k) {
        if (num1.length <= 0) {
            return num2[k - 1];
        }

        if (num2.length <= 0) {
            return num1[k - 1];
        }

        if (k === 1) {
            return Math.min(num1[0], num2[0]);
        }

        const mid = Math.floor(k / 2 - 1 );

        const medium1 = mid < num1.length ? num1[mid] : Number.MAX_VALUE;
        const medium2 = mid < num2.length ? num2[mid] : Number.MAX_VALUE;

        if (medium1 < medium2) {
            return findKth(num1.slice(mid + 1), num2, k - mid);
        } else {
            return findKth(num1, num2.slice(mid + 1), k - mid);
        }
    }
};