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
var preorderTraversal = function (root) {

    const result = [];
    (function traversal(node) {
        if(!node){
            return;
        }
        result.push(node.val);
        traversal(node.left);
        traversal(node.right);
    })(root);
    return result;

};