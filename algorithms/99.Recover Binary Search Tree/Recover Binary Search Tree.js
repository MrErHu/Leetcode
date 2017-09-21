/**
 * space O(n)
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {

    let pre = null;
    let cur = null;
    let head, last, first = true;

    traversal(root, (node) => {
        pre = cur;
        cur = node;

        if (pre && cur && pre.val > cur.val) {
            if (first) {
                head = pre;
                first = false;
            }
            last = cur;
        }
    });

    [last.val, head.val] = [head.val, last.val];

    function traversal(node, callback) {
        if (!node) {
            return;
        }
        traversal(node.left, callback);
        callback(node);
        traversal(node.right, callback);
    }
};


/**
 * Space O(n)
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {

    let pre = null;
    let cur = null;
    let head, last, first = true;

    inorderTraversal(root, (node) => {
        pre = cur;
        cur = node;

        if (pre && cur && pre.val > cur.val) {
            if (first) {
                head = pre;
                first = false;
            }
            last = cur;
        }
    });

    [last.val, head.val] = [head.val, last.val];

    function inorderTraversal(root, callback) {
        let cur = root;
        const stack = [];

        while (cur) {
            stack.push(cur);
            cur = cur.left
        }

        while (stack.length > 0) {
            cur = stack.pop();
            callback(cur);
            cur = cur.right;
            while (cur) {
                stack.push(cur);
                cur = cur.left
            }
        }
    }

};
