/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * The encoded string should be as compact as possible.
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {

    var array = [];
    preOrder(root, array);
    return array.join(',');


    function preOrder(root, array) {
        if (!root) {
            return;
        }
        array.push(root.val);
        preOrder(root.left, array);
        preOrder(root.right, array);
    }

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data === '') {
        return null;
    }

    const array = data.split(',');
    return traversal(array);

    function traversal(array) {
        if (array.length <= 0) {
            return null;
        }

        const val = parseInt(array.shift());
        const node = new TreeNode(val);
        let left = array, right = [];
        if (array.length > 0) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] > val) {
                    left = array.slice(0, i);
                    right = array.slice(i);
                    break;
                }
            }
        }
        node.left = left.length > 0 ? traversal(left) : null;
        node.right = right.length > 0 ? traversal(right) : null;
        return node;
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */