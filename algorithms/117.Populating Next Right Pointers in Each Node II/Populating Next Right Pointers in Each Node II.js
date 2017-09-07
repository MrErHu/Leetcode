/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {

    let leftNode = null, pre = null;
    let cur = root;

    while (cur) {

        while (cur) {

            if (cur.left != null) {
                if (pre != null) {
                    pre.next = cur.left;
                } else {
                    leftNode = cur.left;
                }
                pre = cur.left;
            }

            if (cur.right != null) {
                if (pre != null) {
                    pre.next = cur.right;
                } else {
                    leftNode = cur.right;
                }
                pre = cur.right;
            }

            cur = cur.next;
        }

        cur = leftNode;
        pre = leftNode = null;
    }
};
