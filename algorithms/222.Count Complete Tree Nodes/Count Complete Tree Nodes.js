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
var countNodes = function(root) {

    if(root === null){
        return 0;
    }

    let leftmost = 0, rightmost = 0;
    let left = root.left, right = root.right;
    while (left){
        left = left.left;
        leftmost ++;
    }
    while (right){
        right = right.right;
        rightmost ++;
    }
    if(leftmost === rightmost){
        return Math.pow(2, leftmost + 1) - 1;
    }

    return countNodes(root.left) + countNodes(root.right) + 1;

};