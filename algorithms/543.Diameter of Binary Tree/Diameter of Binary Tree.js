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
var diameterOfBinaryTree = function (root) {

    if (!root) {
        return 0;
    }

    let maxDiameter = -Infinity;
    depth(root);
    return maxDiameter;

    function depth(root) {
        if (!root) {
            return 0;
        }
        const left = depth(root.left);
        const right = depth(root.right);
        if(left + right > maxDiameter){
            maxDiameter = left + right;
        }
        return Math.max(left, right) + 1;
    }

};