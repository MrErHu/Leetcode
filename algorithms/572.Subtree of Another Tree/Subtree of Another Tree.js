/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {

    if(!s && !t){
        return true;
    }

    if(!s && t){
        return false;
    }

    return checkSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);

    function checkSame(s, t) {
        if (!s && !t) {
            return true;
        }

        if (s == null || t == null || s.val != t.val) {
            return false;
        }

        return checkSame(s.left, t.left) && checkSame(s.right, t.right);
    }

};