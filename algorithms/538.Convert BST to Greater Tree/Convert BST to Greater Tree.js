/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {


    convert(root, 0);

    return root;

    function convert(root, sum) {
        if (!root) {
            return sum;
        }

        const right = convert(root.right, sum);
        root.val += right;
        return root.left ? convert(root.left, root.val) : root.val;
    }

};