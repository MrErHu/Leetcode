/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {

    if (!root || (!root.left && !root.right)) {
        return -1;
    }

    let left = root.left.val;
    let right = root.right.val;

    if (left === root.val) {
        left = findSecondMinimumValue(root.left);
    }

    if (right === root.val) {
        right = findSecondMinimumValue(root.right);
    }

    if (left !== -1 && right !== -1) {
        return Math.min(left, right);
    } else if (left !== -1) {
        return left;
    } else {
        return right;
    }

};