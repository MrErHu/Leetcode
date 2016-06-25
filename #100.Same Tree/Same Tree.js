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
var isSameTree = function(p, q) {

    if(p==null || q==null){
        return p==q;
    }

    return p.val == q.val && arguments.callee(p.left,q.left) && arguments.callee(p.right,q.right);
};