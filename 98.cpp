/*
98. Validate Binary Search Tree
*/
class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return isValidBST(root, nullptr, nullptr);
    }
    bool isValidBST(TreeNode* root,TreeNode* min,TreeNode*max){
        if(!root)return true;
        if(min && min->val>=root->val || max && max->val<=root->val)
            return false;
        return isValidBST(root->left,min,root) && isValidBST(root->right,root,max);
    }
};
