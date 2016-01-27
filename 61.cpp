class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if(head==NULL||head->next==NULL||k==0)
            return head;
        ListNode *point=head;
        ListNode *last;
        ListNode *tempStore;
        int length=0;
        while(point!=NULL){
            if(point->next==NULL)
                last=point;
            ++length;
            point=point->next;
        }
        cout<<length<<endl;
        k=k%length;
        if(k==0)
            return head;
        point=head;
        int count=length-k;
        while(count>1){
            --count;
            point=point->next;
        }
        tempStore=head;
        head=point->next;
        last->next=tempStore;
        point->next=NULL;
        return head;
    }
};