/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Recursive version
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {

    const result = [];

    (function traversal(node) {
        if(!node){
            return;
        }
        traversal(node.left);
        traversal(node.right);
        result.push(node.val);
    })(root);
    return result;

};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Iterative version
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {

    class Stack{
        constructor(){
            this.stack = [];
        }

        push(val){
            this.stack.push(val);
        }

        peak(){
            return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
        }

        pop(){
            this.stack.pop()
        }

        empty(){
            return this.stack.length <= 0;
        }
    }

    if(!root){
        return [];
    }

    const result = [];
    const stack = new Stack();
    let preNode = null;
    stack.push(root);


    while (!stack.empty()){
        let cur = stack.peak();
        if((!cur.left && !cur.right) || (preNode && (preNode == cur.left || preNode == cur.right))){
            result.push(cur.val);
            stack.pop();
            preNode = cur;
        }else{
            cur.right && stack.push(cur.right);
            cur.left && stack.push(cur.left);
        }
    }
    return result;
};


var postorderTraversal = function(root) {

    if(!root){
        return [];
    }
    const stack = [root], flagStack = [false];
    const result = [];
    while(stack.length > 0){
        const cur = stack.pop();
        const flag = flagStack.pop();

        if((!cur.left && !cur.right) || (flag)){
            result.push(cur.val);
        }else {
            stack.push(cur);
            flagStack.push(true);

            if(cur.right){
                stack.push(cur.right);
                flagStack.push(false);
            }
            if(cur.left){
                stack.push(cur.left);
                flagStack.push(false);
            }
        }
    }

    return result;
};