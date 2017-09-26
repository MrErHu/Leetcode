/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {

    const path = [];
    const cache = [];
    traversal(root, cache, path);
    return path;

    function traversal(root, cache, path) {
        if (!root) {
            return null;
        }
        cache.push(root.val);
        if (!root.left && !root.right) {
            path.push(createPath(cache));
        }else {
            root.left && traversal(root.left, cache, path);
            root.right && traversal(root.right, cache, path);
        }
        cache.pop();
    }


    function createPath(array) {
        let string = '';
        for(let i= 0; i< array.length; i++){
            string += array[i];
            if(i != array.length - 1){
                string += '->'
            }
        }
        return string;
    }

};