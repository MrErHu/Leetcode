/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Recursive version
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {

    const result = [];

    (function traversal(node) {
        if(!node){
            return;
        }
        traversal(node.left);
        traversal(node.right);
        result.push(node.val);
    })(root);
    return result;

};