/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 空间复杂度为n 时间复杂度n
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    const array = [];
    (function traversal(node) {
        if (!node) {
            return;
        }
        traversal(node.left);
        if (node) {
            array.push(node.val)
        }
        traversal(node.right);
    })(root);
    let i = 0, j = array.length - 1;
    while (i < j) {
        if (array[i] + array[j] === k) {
            return true;
        } else if (array[i] + array[j] > k) {
            j--;
        } else {
            i++
        }
    }
    return false;
};