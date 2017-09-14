/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {

    // 计算宽高
    const height = getHeight(root);
    const width = Math.pow(2, height) - 1;

    // 生成结果数组
    const array = [];
    for (let i = 0; i < height; i++) {
        const arr = [];
        for (let j = 0; j < width; j++) {
            arr.push('');
        }
        array.push(arr);
    }

    //递归
    traversal(root, 0, array, 0 , width - 1);

    return array;

    function traversal(root, curHeight, array, left, right) {
        if (!root) return;
        const middle = (left + right ) / 2
        array[curHeight][middle] = root.val.toString();

        traversal(root.left, curHeight + 1, array, left, middle - 1);
        traversal(root.right, curHeight + 1, array, middle + 1, right);
    }


    function getHeight(root) {

        if (!root) {
            return 0;
        }

        return 1 + Math.max(getHeight(root.left), getHeight(root.right));
    }
}