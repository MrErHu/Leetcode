class Solution 
{
public:
    ListNode* partition(ListNode* head, int x) 
    {
        if(!head)
            return nullptr;
        ListNode *lessX=new ListNode(-1);//头结点
        ListNode *greaterX=new ListNode(-1);//头结点
        ListNode *lessInsert=lessX;
        ListNode *greaterInsert=greaterX;
        
        while(head)
        {
            ListNode *temp=head;
            head=head->next;
            if(temp->val<x)
            {
                lessInsert->next=temp;
                temp->next= nullptr;
                lessInsert=temp;
            }
            else
            {
                greaterInsert->next=temp;
                temp->next=nullptr;
                greaterInsert=temp;
            }
        }
        lessInsert->next=greaterX->next;
        delete greaterX;
        greaterX=lessX;
        lessX=lessX->next;
        delete greaterX;
        return lessX;
    }
};
