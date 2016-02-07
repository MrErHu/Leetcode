/*
Binary Tree Postorder Traversal
Recursive version
*/
class Solution {
public:
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int> result;
        postorderTraversal(root,result);
        return result;
    }
    void postorderTraversal(TreeNode* root,vector<int>& container){
        if(!root)return;
        postorderTraversal(root->left,container);
        postorderTraversal(root->right,container);
        container.push_back(root->val);
    }
};
/*
Binary Tree Postorder Traversal
Iterative version
*/
class Solution {
public:
    vector<int> postorderTraversal(TreeNode* root) {
        stack<TreeNode*> t_stack;
        stack<bool> b_stack;//false->left   true->right
        vector<int> result;
        if(!root)return result;
        TreeNode *ptr=root;
        while(ptr){
            t_stack.push(ptr);
            b_stack.push(false);
            ptr=ptr->left;
        }
        while(!t_stack.empty()){
            TreeNode *pointer=t_stack.top();
            if(b_stack.top()==true || pointer->right==NULL){
                b_stack.pop();
                t_stack.pop();
                result.push_back(pointer->val);
            }else{
                //ptr has right child
                b_stack.pop();
                b_stack.push(true);
                pointer=pointer->right;
                while(pointer){
                    t_stack.push(pointer);
                    b_stack.push(false);
                    pointer=pointer->left;
                }
            }
        }
        return result;
    }
};
