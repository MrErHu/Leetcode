/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * recursively
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function (root) {
    
    if(!root){
        return true;
    }

    return checkSymmetric(root.left,root.right);

    function checkSymmetric(left, right) {
        if(!left && !right){
            return true;
        }
        if((!left && right) || (!right && left) || left.val != right.val){
            return false;
        }

        return checkSymmetric(left.left,right.right) && checkSymmetric(left.right, right.left);
    }

};