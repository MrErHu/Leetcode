/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    let string = ''

    if(!t){
        return string;
    }

    string += t.val;

    if(!t.left && !t.right){
        return string;
    }else if(t.left && !t.right){
        return string + "(" + tree2str(t.left) + ")"
    }else {
        return string + "(" + tree2str(t.left) + ')('+tree2str(t.right)+')';
    }
};