/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * recursively
 * @param {TreeNode} root
 * @return {boolean}
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isSymmetric = function (root) {

    if (!root) {
        return true;
    }

    return checkSymmetric(root.left, root.right);

    function checkSymmetric(left, right) {
        if (!left && !right) {
            return true;
        }
        if ((!left && right) || (!right && left) || left.val != right.val) {
            return false;
        }

        return checkSymmetric(left.left, right.right) && checkSymmetric(left.right, right.left);
    }

};

/**
 * iteratively
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

    if (!root) {
        return true;
    }

    const leftQueue = [];
    const rightQueue = [];

    leftQueue.push(root.left);
    rightQueue.push(root.right);

    while (leftQueue.length > 0 && rightQueue.length > 0) {
        const leftNode = leftQueue.shift();
        const rightNode = rightQueue.shift();
        if(!leftNode && !rightNode){
            continue;
        }
        if ((leftNode && !rightNode) || (!leftNode && rightNode) || (leftNode.val != rightNode.val)) {
            return false;
        }
        leftQueue.push(leftNode.left);
        leftQueue.push(leftNode.right);
        rightQueue.push(rightNode.right);
        rightQueue.push(rightNode.left);
    }
    if (leftQueue.length > 0 || rightQueue.length > 0) {
        return false;
    }
    return true;
}