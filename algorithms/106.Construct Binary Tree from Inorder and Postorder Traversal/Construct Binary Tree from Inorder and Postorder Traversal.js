/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    if(!inorder || !postorder || inorder.length <= 0 || postorder.length < 0){
        return null;
    }

    const val = postorder.pop();
    const node = new TreeNode(val);
    const index = inorder.indexOf(val);

    const inorderLeft = inorder.slice(0, index);
    const inorderRight = inorder.slice(index + 1);
    const postorderLeft = postorder.slice(0, inorderLeft.length);
    const postorderRight = postorder.slice(inorderLeft.length);

    node.left = buildTree(inorderLeft,postorderLeft);
    node.right = buildTree(inorderRight,postorderRight);

    return node;

};