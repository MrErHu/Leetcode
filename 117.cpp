/*
采用队列的方式
时间复杂度O（n）
空间复杂度O（m）其中m是树一层最多的节点数
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
不采用队列的方式
时间复杂度O（n）
空间复杂度O（1）
*/
class Solution
{
public:
    void connect(TreeLinkNode *root)
    {
        if(!root)
            return ;
        TreeLinkNode *head=root;//The left most node in the lower level
        TreeLinkNode *curr=nullptr;//The current node in the upper level
        TreeLinkNode *prev=nullptr;//The previous node in the lower level
        while(head!= nullptr)
        {
            curr=head;
            prev= nullptr;
            head= nullptr;
            while(curr!= nullptr)
            {
                if(curr->left!= nullptr)
                {
                    if(prev!= nullptr)
                        prev->next=curr->left;
                    else
                        head=curr->left;
                    prev=curr->left;
                }
                if(curr->right!= nullptr)
                {
                    if(prev!= nullptr)
                        prev->next=curr->right;
                    else
                        head=curr->right;
                    prev=curr->right;
                }
                curr=curr->next;
            }
        }
    }
};I
