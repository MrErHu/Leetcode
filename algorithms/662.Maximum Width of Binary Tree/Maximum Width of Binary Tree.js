/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {

    if (!root) {
        return 0;
    }

    const queue = [root], numQueue = [1];
    let levelEnd = root, levelStartNum = 1;
    let maxWidth = 0;

    while (queue.length > 0) {
        const current = queue.shift();
        const number = numQueue.shift();

        if (current.left) {
            queue.push(current.left);
            numQueue.push(number * 2);
        }

        if (current.right) {
            queue.push(current.right);
            numQueue.push(number * 2 + 1);
        }

        if (current === levelEnd) {
            const levelNum = number - levelStartNum + 1;
            levelNum > maxWidth && ( maxWidth = levelNum);
            levelStartNum = numQueue[0];
            levelEnd = queue[queue.length - 1];
        }
    }

    return maxWidth;

};