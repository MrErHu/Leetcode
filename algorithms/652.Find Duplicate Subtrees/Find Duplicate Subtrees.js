/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {

    const map = new Map();
    const rs = [];
    traversal(root, map, rs);
    return rs;

    function traversal(root, map, result) {

        if(!root){
            return;
        }
        const rootStr = serialize(root);
        const value = map.get(rootStr);

        if (!map.has(rootStr)) {
            map.set(rootStr, 1);

        } else {
            if (value === 1) {
                result.push(root);
            }
            map.set(rootStr, value + 1);
        }
        traversal(root.left, map, result);
        traversal(root.right, map, result);
    }

    /**
     * 序列化树结构
     */
    function serialize(root) {

        const treeArray = [];
        preOrder(root, treeArray);
        return treeArray.join(',');

        function preOrder(root, array) {
            if (!root) {
                array.push('null');
                return;
            }

            array.push(root.val);
            preOrder(root.left, array);
            preOrder(root.right, array);
        }

    };
};