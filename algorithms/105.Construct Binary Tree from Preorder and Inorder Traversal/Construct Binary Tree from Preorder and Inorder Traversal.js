/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder || !inorder || preorder.length <= 0 || inorder.length <= 0) {
        return null;
    }

    const val =  preorder.shift();
    const node = new TreeNode(val);
    const index = inorder.indexOf(val);
    const inorderLeft = inorder.slice(0,index);
    const inorderRight = inorder.slice(index + 1);
    const preOrderLeft = preorder.slice(0, inorderLeft.length);
    const preOrderRight = preorder.slice(inorderLeft.length);

    node.left = buildTree(preOrderLeft,inorderLeft);
    node.right = buildTree(preOrderRight,inorderRight);

    return node;
};
