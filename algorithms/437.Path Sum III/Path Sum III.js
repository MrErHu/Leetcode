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
 * @return {number}
 */
var pathSum = function (root, sum) {

    const path = [];
    return findPath(root, sum);


    function findPath(root, sum) {
        if (!root) {
            return 0;
        }

        path.push(root.val);

        let pathSum = 0, count = 0;
        for (let i = path.length - 1; i >= 0; i--) {
            pathSum += path[i];
            if (pathSum == sum) {
                count++;
            }
        }

        const rs = count + findPath(root.left, sum) + findPath(root.right, sum);
        path.pop();
        return rs;
    }
};