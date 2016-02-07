/*
Binary Tree Inorder Traversal
Recursive version
*/
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> result;
        inorderTraversal(root,result);
        return result;
    }
    void inorderTraversal(TreeNode* root,vector<int>& container){
        if(!root)return;
        inorderTraversal(root->left,container);
        container.push_back(root->val);
        inorderTraversal(root->right,container);
    }
};
/*
Binary Tree Inorder Traversal
Iterative version
*/
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        TreeNode* ptr=root;
        stack<TreeNode*> t_stack;
        vector<int> container;
        if(!root)return container;
        while(ptr || !t_stack.empty()){
            while(ptr){
                t_stack.push(ptr);
                ptr=ptr->left;
            }
            ptr=t_stack.top();
            t_stack.pop();
            container.push_back(ptr->val);
            ptr=ptr->right;
        }
        return container;
    }
};
