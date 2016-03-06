/*
递归法：
*/
class Solution
{
private:
    TreeNode* pre= nullptr;
public:
    void flatten(TreeNode* root)
    {
        if(!root)
            return;
        flatten(root->right);
        flatten(root->left);
        root->right=pre;
        root->left= nullptr;
        pre=root;
    }
};
