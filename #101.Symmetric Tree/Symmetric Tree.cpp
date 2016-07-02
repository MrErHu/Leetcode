class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        if(!root)
            return true;
        else
            return checkIsSymmetric(root->left,root->right);

    }
    bool checkIsSymmetric(TreeNode *left,TreeNode *right){
        if(!left && !right) return true;
        if(!left && right) return false;
        if(left &&!right) return false;
        return left->val==right->val && checkIsSymmetric(left->left,right->right) &&checkIsSymmetric(left->right,right->left);
    }
};