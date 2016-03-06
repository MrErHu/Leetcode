class Solution
{
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root)
    {
        vector<vector<int>> ret;
        if(!root)
            return ret;
        stack<TreeNode *> even,odd;
        int level=1;
        odd.push(root);
        while(!odd.empty() || !even.empty())
        {
            vector<int> levelNum;
            TreeNode *temp= nullptr;
            if(level%2==1)
            {
                while(!odd.empty())
                {
                    temp=odd.top();
                    odd.pop();
                    levelNum.push_back(temp->val);
                    if(temp->left)
                        even.push(temp->left);
                    if(temp->right)
                        even.push(temp->right);
                }
            }
            else
            {
                while(!even.empty())
                {
                    temp=even.top();
                    even.pop();
                    levelNum.push_back(temp->val);
                    if(temp->right)
                        odd.push(temp->right);
                    if(temp->left)
                        odd.push(temp->left);
                }
            }
            ++level;
            ret.push_back(levelNum);
        }
        return ret;
    }
};
