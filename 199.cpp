/*
 采用迭代的方式
 */
class Solution
{
public:
    vector<int> rightSideView(TreeNode* root)
    {
        vector<int> ret;
        rightSideView(root,ret,1);
        return ret;
    }
    void rightSideView(TreeNode* root, vector<int>& container, int level)
    {
        if(!root)   
        return ;
        if(container.size()<level)
            container.push_back(root->val);
        rightSideView(root->right,container,level+1);
        rightSideView(root->left,container,level+1);
    }
};
/*
 采用层次遍历的方式
*/
class Solution
{
public:
    vector<int> rightSideView(TreeNode* root)
    {
        vector<int> ret;
        if(!root)
            return ret;
        TreeNode *levelEnd=root;
        queue<TreeNode *> TreeQueue;
        TreeQueue.push(root);
        while(!TreeQueue.empty())
        {
            TreeNode* temp=TreeQueue.front();
            TreeQueue.pop();
            if(temp->left)
                TreeQueue.push(temp->left);
            if(temp->right)
                TreeQueue.push(temp->right);
            if(temp==levelEnd)
            {
                ret.push_back(temp->val);
                levelEnd = TreeQueue.back();
            }
        }
        return ret;
    }
};