class Solution {
public:
    int countNodes(TreeNode* root) {
        if(!root)
            return 0;
        TreeNode *leftPtr=root;
        TreeNode *rightPtr=root;
        int leftHight=0;
        int rightHight=0;
        while(leftPtr)
        {
            leftPtr=leftPtr->left;
            ++leftHight;
        }
        while(rightPtr)
        {
            rightPtr=rightPtr->right;
            ++rightHight;
        }
        if(rightHight==leftHight)
            return (1<<rightHight)-1;
        else
            return 1+countNodes(root->left)+countNodes(root->right);
    }
};
