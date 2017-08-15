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
var minDepth = function (root) {

    return length(root);

    function length(node) {
        if (!node) {
            return 0;
        }

        if (node.left && !node.right) {
            return length(node.left) + 1
        }

        if (node.right && !node.left) {
            return length(node.right) + 1
        }

        return Math.min(length(node.left), length(node.right)) + 1;
    }

};