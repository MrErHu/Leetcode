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

    const array = [];
    traversal(root, (node) => {
        array.push(node.val);
    });

    let num1, num2;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            num1 = array[i];
            num2 = array[i + 1];
            array[i + 1] = num1;
            array[i] = num2;
        }
    }

    let point1, point2;

    traversal(root, (node) => {
        if (node.val == num1) {
            point1 = node;
        }

        if (node.val == num2) {
            point2 = node;
        }
    });

    point1.val = num2;
    point2.val = num1;

    function traversal(node, callback) {
        if (!node) {
            return;
        }
        traversal(node.left, callback);
        callback(node);
        traversal(node.right, callback);
    }
};