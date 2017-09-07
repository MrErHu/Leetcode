/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * 递归版本
 * 不太符合题目，使用了递归，存储空间就不是常量了
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {

    if(!root){
        return;
    }

    if(root.left){
        root.left.next = root.right;
    }

    if(root.right){
        root.right.next = root.next ? root.next.left : null;
    }

    connect(root.left);
    connect(root.right);
};


/**
 * 迭代版本
 * 常量存储空间
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root){

    if(!root){
        return;
    }

    var firstLeft = null;
    var p = root;

    while (p) {
        if (firstLeft == null) {
            firstLeft = p.left;
        }

        if(p.left){
            p.left.next = p.right;
        }

        if(p.right){
            p.right.next = p.next ? p.next.left : null;
        }

        if(p.next){
            p = p.next;
        }else{
            p = firstLeft;
            firstLeft = null;
        }
    }
};