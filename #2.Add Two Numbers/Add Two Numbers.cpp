class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *head=new ListNode(0);
        ListNode *point=head;
        int flag=0;
        while(l1!=NULL && l2!=NULL){
            point->next=new ListNode(l1->val+l2->val);
            point=point->next;
            l1=l1->next;
            l2=l2->next;
        }
        if(l1!=NULL)
            point->next=l1;
        if(l2!=NULL)
            point->next=l2;
        point=head->next;
        while(point!=NULL){
            point->val=point->val+flag;
            if(point->val<10){
                point=point->next;
                flag=0;
            }else{
                flag=point->val/10;
                point->val=point->val%10;
                if(point->next==NULL && flag!=0){
                    point->next=new ListNode(flag);
                    break;
                }
                point=point->next;
            }
        }
        return head->next;
    }
};