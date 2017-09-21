/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Recursive vision
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const rs = [];
    traversal(root);
    return rs;

    function traversal(root) {
        if(!root){
            return;
        }
        traversal(root.left);
        rs.push(root.val);
        traversal(root.right);
    }
};

/**
 * Iteratively vision
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    let cur = root;
    const stack = [], result = [];

    while (cur){
        stack.push(cur);
        cur = cur.left
    }

    while (stack.length > 0){
        cur = stack.pop();
        result.push(cur.val);
        cur = cur.right;
        while(cur){
            stack.push(cur);
            cur = cur.left
        }
    }

    return result;
};

/**
 * time: O(n)
 * space: O(1)
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    const result = [];
    inOrderTraversal(root, (node)=>{
        result.push(node.val);
    });
    return result;

    function inOrderTraversal(root ,callback) {

        let current = root;
        let inOrderPre = null;

        while (current){
            if(current.left === null){
                callback(current);
                current = current.right;
            }else{
                //中序遍历的前驱节点
                inOrderPre = current.left;
                while (inOrderPre.right && inOrderPre.right != current){
                    inOrderPre = inOrderPre.right;
                }

                if(inOrderPre.right === null){
                    inOrderPre.right = current;
                    current = current.left;
                }else{
                    inOrderPre.right = null;
                    callback(current);
                    current = current.right;
                }
            }
        }
    }
};