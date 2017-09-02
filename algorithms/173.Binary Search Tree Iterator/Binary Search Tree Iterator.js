/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function (root) {
    this.stack = [];
    let point = root;
    while (point) {
        this.stack.push(point);
        point = point.left;
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function () {
    return this.stack.length <= 0 ? false : true;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function () {
    if (!this.hasNext()) {
        return -1;
    }

    const node = this.stack.pop();
    const val = node.val;
    let point = node.right;
    while (point) {
        this.stack.push(point);
        point = point.left;
    }
    return val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */