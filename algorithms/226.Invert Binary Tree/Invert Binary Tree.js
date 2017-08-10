/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function (root) {
    if(!root){
        return root;
    }
    const right = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = right;
    return root;
};