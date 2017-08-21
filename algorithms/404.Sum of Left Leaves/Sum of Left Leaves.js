/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Recursion Version
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let left,right;

    if(!root){
        return 0;
    }

    if(root.left && !root.left.left && !root.left.right){
        left = root.left.val;
    }else{
        left = sumOfLeftLeaves(root.left);
    }

    right = sumOfLeftLeaves(root.right);
    return left + right;
};


var sumOfLeftLeaves = function(root) {
    return traversal(root,false);

    function traversal(node,left) {
        if(!node){
            return 0;
        }
        if(!node.left && !node.right && left){
            return node.val;
        }
        return traversal(node.left,true) + traversal(node.right,false);
    }

};