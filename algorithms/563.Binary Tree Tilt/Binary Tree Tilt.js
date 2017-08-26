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
var findTilt = function(root) {

    let tilt = 0;
    findTiltSum(root);
    return tilt;

    function findTiltSum(node) {
        if(!node){
            return 0;
        }
        const left = findTiltSum(node.left);
        const right = findTiltSum(node.right);
        tilt += Math.abs(left - right);
        return left + right + node.val;
    }
};