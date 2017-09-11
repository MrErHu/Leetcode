/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {

    return construct(nums, 0, nums.length - 1);

    function construct(array, startIndex, endIndex) {
        if (startIndex > endIndex) {
            return null;
        }
        let maxValue = -Infinity, maxIndex = -1;
        for (let i = startIndex; i <= endIndex; i++) {
            if (maxValue < array[i]) {
                maxValue = array[i];
                maxIndex = i;

            }
        }
        const node = new TreeNode(maxValue);
        node.left = construct(array, startIndex, maxIndex - 1);
        node.right = construct(array, maxIndex + 1, endIndex);
        return node;
    }

};