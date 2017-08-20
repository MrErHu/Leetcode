/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * inorder
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

    let preNodeVal = -Infinity;
    return checkValid(root);
    
    function checkValid(node) {
        if(!node){
            return true;
        }
        if(!checkValid(node.left)){
            return false;
        }
        if(preNodeVal >= node.val){
            return false;
        }
        preNodeVal = node.val;
        return checkValid(node.right);
    }
};