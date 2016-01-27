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
    int kthSmallest(TreeNode* root, int k) {
        stack<TreeNode*> stack1;
        TreeNode *pointer=root;
        TreeNode *temp;
        while(pointer || !stack1.empty()){
            while(pointer){
                stack1.push(pointer);
                pointer=pointer->left;
            }
            temp=stack1.top();
            --k;
            stack1.pop();
            if(k==0)
                return temp->val;
            pointer=temp->right;
        }
    }
};