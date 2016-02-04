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
