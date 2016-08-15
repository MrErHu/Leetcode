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
var lowestCommonAncestor = function(root, p, q) {
    if(root==null || root==p || root==q){
        return root;
    }
    var left=arguments.callee(root.left,p,q);
    var right=arguments.callee(root.right,p,q);
    if(left==null){
        return right;
    }
    if(right==null){
        return left;
    }
    return root;
};