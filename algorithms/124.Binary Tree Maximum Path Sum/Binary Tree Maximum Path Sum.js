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
var maxPathSum = function (root) {

    let maxPathSum = -Infinity;
    findMaxPath(root);
    return maxPathSum;

    function findMaxPath(node) {

        if (!node) {
            return 0;
        }

        let leftValue = 0, rightValue = 0;

        if (node.left) {
            leftValue = Math.max(findMaxPath(node.left), 0);
        }
        if (node.right) {
            rightValue = Math.max(findMaxPath(node.right), 0);
        }

        const pathSum1 = Math.max(leftValue, rightValue, 0) + node.val;
        const pathSum2 = Math.max(leftValue, 0) + Math.max(rightValue, 0) + node.val;

        maxPathSum = Math.max(maxPathSum, pathSum1, pathSum2);
        return pathSum1;
    }

};