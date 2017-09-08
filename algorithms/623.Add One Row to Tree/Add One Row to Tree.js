/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 迭代版本
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function (root, v, d) {
    if (d === 1) {
        const node = new TreeNode(v);
        node.left = root;
        return node;
    }

    traversal(root, 1, v, d);

    return root;

    function traversal(root, depth, val, d) {
        if(!root || depth > d - 1){
            return;
        }
        if(depth == d - 1){
            let left = root.left;
            let right = root.right;

            root.left = new TreeNode(val);
            root.right = new TreeNode(val);

            root.left.left = left;
            root.right.right = right;

        }else{
            traversal(root.left, depth + 1, val, d);
            traversal(root.right, depth + 1, val, d);
        }
    }


};