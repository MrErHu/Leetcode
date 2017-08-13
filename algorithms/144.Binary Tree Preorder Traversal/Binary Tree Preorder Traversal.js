/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Recursive version
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {

    const result = [];
    (function traversal(node) {
        if (!node) {
            return;
        }
        result.push(node.val);
        traversal(node.left);
        traversal(node.right);
    })(root);
    return result;

};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Iterative version
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const result = [], stack = [];
    let cur = root;

    while (cur || stack.length > 0) {
        if (!cur) {
            cur = stack.pop();
        }

        result.push(cur.val);
        cur.right && stack.push(cur.right);
        cur = cur.left;
    }
    return result;
};