/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

    return checkSame(p, q);

    function checkSame(pNode, qNode) {
        if (!pNode && !qNode) {
            return true;
        }

        if ((pNode && !qNode) || (!pNode && qNode) || (pNode.val != qNode.val)) {
            return false;
        }

        return checkSame(pNode.left, qNode.left) && checkSame(pNode.right, qNode.right);
    }

};