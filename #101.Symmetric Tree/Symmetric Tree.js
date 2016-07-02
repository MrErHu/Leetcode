/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function checkIsSymmetric(left,right) {
    if(!left && !right)
        return true;
    if(!left && right)
        return false;
    if(left && !right)
        return false;

    return left.val ==right.val && arguments.callee(left.left,right.right) && arguments.callee(left.right,right.left);

}
var isSymmetric = function(root) {

    if(!root)
        return true;
    return checkIsSymmetric(root.left,root.right);
};