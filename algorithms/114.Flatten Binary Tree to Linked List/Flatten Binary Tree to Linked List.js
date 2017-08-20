/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
    let preNode = null;
    traversal(root);
    
    
    function traversal(node) {

        if(!node){
            return;
        }

        if(preNode != null){
            preNode.right = node;
            preNode.left = null;
        }

        preNode = node;
        const right = node.right;
        traversal(node.left);
        traversal(right);
    }

};