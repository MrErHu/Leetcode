/*
递归法：
递归时后序遍历，先右后左
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
