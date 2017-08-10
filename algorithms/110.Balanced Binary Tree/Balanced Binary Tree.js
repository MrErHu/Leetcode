/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    return checkBalanced(root) != -1;
    /**
     * @param node
     * @returns {number}
     */
    function checkBalanced(node) {

        if (!node) {
            return 0;
        }

        const left = checkBalanced(node.left);
        const right = checkBalanced(node.right);

        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1;
        }

        return Math.max(left, right) + 1;
    }
};