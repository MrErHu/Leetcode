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
var invertTree = function(root) {

    if(root==null){
        return root;
    }

    var temp=arguments.callee(root.left);
    root.left=arguments.callee(root.right);
    root.right=temp;
    return root;
};