/*
递归解法
*/
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> result;
        preoderTraversal(root,result);
        return result;
    }
    void preoderTraversal(TreeNode*root,vector<int>& container){
        if(root){
            container.push_back(root->val);
            preoderTraversal(root->left,container);
            preoderTraversal(root->right,container);
        }
    }
};
/*
迭代解法
*/
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        stack<TreeNode*> t_stack;
        vector<int> result;
        TreeNode *ptr;
        if(!root) return result;
        t_stack.push(root);
        while(!t_stack.empty()){
            ptr=t_stack.top();
            t_stack.pop();
            result.push_back(ptr->val);
            if(ptr->right)
                t_stack.push(ptr->right);
            if(ptr->left)
                t_stack.push(ptr->left);
        }
        return result;
    }
};
