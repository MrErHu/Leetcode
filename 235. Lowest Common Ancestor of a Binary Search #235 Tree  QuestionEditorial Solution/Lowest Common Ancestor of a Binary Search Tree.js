/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root == null) return null;
    if (root.val > p.val && root.val > q.val) {
        return arguments.callee(root.left,p,q);
    } else if (root.val < p.val && root.val < q.val) {
        return arguments.callee(root.right,p,q);
    } else {
        return root;
    }
};