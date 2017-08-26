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
var rightSideView = function (root) {

    if (!root) {
        return [];
    }

    const queue = [root], result = [];
    let levelEnd = root;

    while (queue.length > 0 ){
        const currentNode = queue.shift();
        currentNode.left && queue.push(currentNode.left);
        currentNode.right && queue.push(currentNode.right);
        if(levelEnd === currentNode){
            result.push(levelEnd.val);
            levelEnd = queue[queue.length -1];
        }
    }
    return result;
};