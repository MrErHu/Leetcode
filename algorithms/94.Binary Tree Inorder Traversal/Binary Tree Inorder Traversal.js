/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Recursive vision
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const rs = [];
    traversal(root);
    return rs;

    function traversal(root) {
        if(!root){
            return;
        }
        traversal(root.left);
        rs.push(root.val);
        traversal(root.right);
    }
};