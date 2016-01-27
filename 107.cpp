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
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        vector<vector<int>> container;
        stack<vector<int>> stack;
        vector<int> level;
        queue<TreeNode*> queue1;
        if(!root)
            return container;
        queue1.push(root);
        queue1.push(NULL);
        while(!queue1.empty()){
            TreeNode *temp=queue1.front();
            queue1.pop();
            if(temp==NULL){
                stack.push(level);
                level.clear();
                if(!queue1.empty())
                    queue1.push(NULL);
            }else{//queue1.top()!=NULL
                level.push_back(temp->val);
                if(temp->left) queue1.push(temp->left);
                if(temp->right) queue1.push(temp->right);
            }
        }
        while(!stack.empty()){
            container.push_back(stack.top());
            stack.pop();
        }
    }
};