/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {

    const result = [], path = [];
    findPath(root,sum);
    return result;

    function findPath(root,sum) {
        if(!root){
            return;
        }

        path.push(root.val);

        if(!root.left && !root.right && root.val === sum){
            result.push(path.slice(0));
        }else{
            findPath(root.left,sum - root.val);
            findPath(root.right,sum - root.val);
        }
        path.pop();
    }

};