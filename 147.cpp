/*
 Insertion Sort List
*/
Solution {
public:
    ListNode* insertionSortList(ListNode* head) {
        if(!head ||!head->next)
            return head;
        ListNode *newHead=new ListNode(-INFINITY);
        ListNode *temp,*ptr;
        while(head){
            temp=head;
            ptr=newHead;
            head=head->next;
            while(ptr->next && ptr->next->val<temp->val){
                ptr=ptr->next;
            }
            temp->next=ptr->next;
            ptr->next=temp;
        }
        return newHead->next;
    }
};
