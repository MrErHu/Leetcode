class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if(!head || !head->next)
            return head;
        ListNode *DIYhead=new ListNode(-1);
        DIYhead->next=head;
        head=DIYhead;
        ListNode *prepoint=head;
        ListNode *point=head->next;
        while(point!=NULL && point->next!=NULL){
            if(point->val==point->next->val){
                ListNode *temp=point->next->next;
                while(temp!=NULL && temp->val==point->val)
                    temp=temp->next;
                prepoint->next=temp;
                point=prepoint->next;

            }else{
                prepoint=point;
                point=point->next;
            }
        }
        return head->next;
    }
};