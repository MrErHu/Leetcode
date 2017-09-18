/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n <= 0) {
        return [];
    }
    return traversal(0, n);

    function traversal(start, end) {
        if (start > end) {
            return [null];
        }
        const result = [];
        for (let i = start; i <= end; i++) {
            const left = traversal(start, i - 1);
            const right = traversal(i + 1, end);
            for (let j = 0; j < left.length; j++) {
                for (let k = 0; k < right.length; k++) {
                    const root = new TreeNode(i);
                    root.left = left[j];
                    root.right = right[k];
                    result.push(root);
                }
            }
        }
        return result;
    }
};