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
var findBottomLeftValue = function (root) {

    let queue = [root];
    let last = null;

    while (queue.length > 0) {
        const current = queue.shift();
        last = current.val;
        current.right && queue.push(current.right);
        current.left && queue.push(current.left);
    }

    return last;

};