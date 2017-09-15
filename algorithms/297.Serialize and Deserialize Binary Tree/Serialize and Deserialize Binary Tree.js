/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

    const treeArray = [];
    preOrder(root, treeArray);
    return treeArray.join(',');

    function preOrder(root, array) {
        if(!root){
            array.push('null');
            return;
        }

        array.push(root.val);
        preOrder(root.left, array);
        preOrder(root.right, array);
    }

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const treeArray = data.split(',');
    return preOrder(treeArray);

    function preOrder(array) {

        const string = array.shift();
        const root = string == 'null' ? null : new TreeNode(parseInt(string));
        if(root){
            root.left = preOrder(array);
            root.right = preOrder(array);
        }
        return root;
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */