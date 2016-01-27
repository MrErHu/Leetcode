/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    int  high(TreeNode* root){
        if(!root) return 0;
        int l_high=high(root->left);
        int r_high=high(root->right);
        return l_high>r_high?l_high+1:r_high+1;
    }
    bool isBalanced(TreeNode* root) {
        if(root==NULL) return true;
        int left=high(root->left);
        int right=high(root->right);
        bool flag=left-right<=1 &&left-right>=-1?true:false;
        return  flag&&isBalanced(root->left)&&isBalanced(root->right);
    }
};