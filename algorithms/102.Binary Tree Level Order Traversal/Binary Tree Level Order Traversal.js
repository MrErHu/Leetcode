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
var levelOrder = function (root) {

    if(!root){
        return []
    }

    let queue = [root], result = [], level = [];
    let levelEnd = root;

    while (queue.length > 0) {
        let current = queue.shift();
        level.push(current.val);
        current.left && queue.push(current.left);
        current.right && queue.push(current.right);
        if(levelEnd === current){
            result.push(level);
            level = [];
            levelEnd = queue[queue.length - 1];
        }
    }

    return result;

};