/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {

    let maxCount = 0, count = 0, current= null;
    const result = [];

    inOrder(root, (node) => {
        if(node.val === current){
            count ++;
        }else{
            current = node.val;
            count = 1;
        }
        count > maxCount && (maxCount = count);
    });

    count = 0;
    current = null;

    inOrder(root, (node) => {
        if(node.val === current){
            count ++;
        }else{
            current = node.val;
            count = 1;
        }

        count === maxCount && (result.push(node.val))
    });

    return result;

    function inOrder(root, callback) {
        if (!root) {
            return;
        }

        inOrder(root.left, callback);
        callback(root);
        inOrder(root.right, callback)
    }
};