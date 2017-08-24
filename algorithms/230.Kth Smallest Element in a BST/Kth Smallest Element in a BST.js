/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Recursive Version
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {

    let kth = k;
    return traversal(root);

    function traversal(node) {
        if (!node) {
            return;
        }
        const left = traversal(node.left);
        if (kth <= 0) {
            return left;
        }

        if (--kth <= 0) {
            return node.val;
        }

        return traversal(node.right);
    }
};