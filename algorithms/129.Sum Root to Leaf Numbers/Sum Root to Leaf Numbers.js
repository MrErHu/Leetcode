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
var sumNumbers = function(root) {
    let sum = 0;
    traversal(root,[]);
    return sum;

    function traversal(root, stack) {
        if(!root){
            return;
        }
        stack.push(root.val);
        if(!root.left && !root.right){
            sum += stack.reduce((sum ,cur)=> sum * 10 + cur,0);
        }
        traversal(root.left, stack);
        traversal(root.right, stack);
        stack.pop();
    }
};