class Solution {
public:
    ListNode* oddEvenList(ListNode* head) {
        if(!head) return head;
        ListNode *oddHead=new ListNode(-1),*oddLast=oddHead;
        ListNode *evenHead=new ListNode(-1),*evenLast=evenHead;
        ListNode *point1,*point2;
        point1=head;
        int count=1;
        while(point1){
            point2=point1->next;
            point1->next=NULL;
            if(count%2==0){
                evenLast->next=point1;
                evenLast=evenLast->next;
            }else{
                oddLast->next=point1;
                oddLast=oddLast->next;
            }
            ++count;
            point1=point2;
        }
        oddLast->next=evenHead->next;
        return oddHead->nex;
    }
};

