
* /*
//递归解法
class Solution {
    public:
        int maxDepth(TreeNode* root) {
    if(!root)
    return 0;
    else{
    int left_length=maxDepth(root->left);
    int right_length=maxDepth(root->right);
    return left_length>right_length?left_length+1:right_length+1;
}
}
};
*/
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
var maxDepth = function(root) {

    if(root==null){
        return 0;
    }
    var left_deep=arguments.callee(root.left);
    var right_deep=arguments.callee(root.right);
    return left_deep>right_deep?left_deep+1:right_deep+1;

};