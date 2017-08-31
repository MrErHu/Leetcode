/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {

    const {node, parent} = findNode(root, key);
    if (!node) {
        //not find or the tree is empty
        return root;
    }

    if (!node.left && !node.right) {
        parent ? setChild(parent, node, null) : root = null;
    } else if (!node.left) {
        parent ? setChild(parent, node, node.right) : root = root.right;
    } else if (!node.right) {
        parent ? setChild(parent, node, node.left) : root = root.left;
    } else {
        let current = node.right, curParent = node;
        while (current.left) {
            curParent = current;
            current = current.left;
        }
        node.val = current.val;
        setChild(curParent, current, current.right);
    }
    return root;


    function findNode(root, key) {
        let point = root;
        let prePoint = null;
        while (point != null) {
            if (point.val === key) {
                break;
            } else if (point.val > key) {
                prePoint = point;
                point = point.left;
            } else {
                prePoint = point;
                point = point.right;
            }
        }
        return {
            node: point,
            parent: prePoint
        }
    }

    function setChild(parent, node, newNode) {

        if (parent.left === node) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }
    }
};