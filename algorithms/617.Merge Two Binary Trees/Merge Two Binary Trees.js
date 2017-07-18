/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function mergeTrees(t1, t2) {

    let node = null;

    if (t1 != null && t2 != null) {
        node = new TreeNode(t1.val + t2.val);
    } else if (t1 == null && t2 != null) {
        node = new TreeNode(t2.val)
    } else if (t2 == null && t1 != null) {
        node = new TreeNode(t1.val)
    }


    if (node != null) {
        node.left = mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null);
        node.right = mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null);
    }
    return node;
};