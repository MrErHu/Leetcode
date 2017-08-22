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
var largestValues = function(root) {
    const rs = [];
    if(!root){
        return rs;
    }

    const queue = [root];
    let levelEnd = root, levelMax = root.val;

    while (queue.length >  0 ){
        const current = queue.shift();
        if(levelMax < current.val){
            levelMax = current.val;
        }
        current.left && queue.push(current.left);
        current.right && queue.push(current.right);

        if(levelEnd === current){
            levelEnd = queue[queue.length - 1];
            rs.push(levelMax);
            levelMax = -Infinity;
        }
    }
    return rs;
};