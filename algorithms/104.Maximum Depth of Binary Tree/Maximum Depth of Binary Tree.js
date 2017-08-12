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
var maxDepth = function (root) {

    return length(root);

    function length(node) {
        if (!node) {
            return 0;
        }
        return Math.max(length(node.left), length(node.right)) + 1;
    }
};