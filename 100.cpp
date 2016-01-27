/*
判断两个二叉树是否相等的递归算法
*/
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
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if(p==NULL || q==NULL)
            return p==q;
        return isSameTree(p->left,q->left) && isSameTree(p->right,q->right) && p->val==q->val;
    }
};