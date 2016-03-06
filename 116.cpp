/*
队列的层次遍历
 */
class Solution
{
public:
    void connect(TreeLinkNode *root)
    {
        if(!root)
            return ;
        queue<TreeLinkNode*> TreeQueue;
        TreeLinkNode *levelEnd=root;
        TreeQueue.push(root);
        while(!TreeQueue.empty())
        {
            TreeLinkNode *temp=TreeQueue.front();
            TreeQueue.pop();
            if(temp==levelEnd)
            {
                if(temp->left)
                    TreeQueue.push(temp->left);
                if(temp->right)
                    TreeQueue.push(temp->right);
                levelEnd=TreeQueue.back();
            }
            else
            {
                temp->next=TreeQueue.front();
                if(temp->left)
                    TreeQueue.push(temp->left);
                if(temp->right)
                    TreeQueue.push(temp->right);
            }
        }
    }
};
/*
空间复杂度为O(1)算法
*/
class Solution
{
public:
    void connect(TreeLinkNode *root)
    {
        if(!root)
            return ;
        while(root->left)
        {
            TreeLinkNode *ptr=root;
            while(ptr)
            {
                ptr->left->next = ptr->right;
                if (ptr->next)
                    ptr->right->next = ptr->next->left;
                ptr = ptr->next;
            }
            root=root->left;
        }
    }
};
