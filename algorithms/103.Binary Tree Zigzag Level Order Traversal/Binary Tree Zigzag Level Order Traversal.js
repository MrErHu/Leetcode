/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) {
        return [];
    }

    let level = [], result = [], queue = [root];
    let levelEnd = root, levelNum = 0;

    while (queue.length > 0) {
        const current = queue.shift();
        levelNum % 2 == 0 ? (level.push(current.val)) : (level.unshift(current.val));
        current.left && queue.push(current.left);
        current.right && queue.push(current.right);
        if (levelEnd == current) {
            levelNum++;
            levelEnd = queue[queue.length - 1];
            result.push(level);
            level = [];
        }
    }

    return result;

};