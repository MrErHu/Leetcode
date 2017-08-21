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
var averageOfLevels = function(root) {
    if(!root){
        return []
    }

    const result = [], queue = [root];
    let levelEnd = root, levelSum = 0, levelCount = 0;


    while(queue.length > 0){
        const current = queue.shift();
        levelSum += current.val;
        levelCount ++;
        current.left && queue.push(current.left);
        current.right && queue.push(current.right);
        if(current == levelEnd){
            result.push(levelSum / levelCount);
            levelEnd = queue[queue.length - 1];
            levelCount = levelSum = 0;
        }
    }

    return result;

};