class Solution {
public:
    void reorderList(ListNode* head) {
        if(!head ||!head->next) return;
        ListNode *point=head;
        ListNode *midPoint,*midLPoint,*last;
        int length=0,i;
        while(point){
            ++length;
            if(point->next)
                last=point;
            point=point->next;
        }
        int mid=length/2;
        point=head;
        for(i=1;point;point=point->next,i++)
            if(i==mid){
                midPoint=point;
                break;
            }
        midLPoint=midPoint->next;
        midPoint->next=NULL;
        reverseList(midLPoint);
        point=new ListNode(-1);
        ListNode *temp=point;
        while(head){
            temp->next=head;
            temp=temp->next;
            head=head->next;
            temp->next=midLPoint;
            midLPoint=midLPoint->next;
            temp=temp->next;
        }
        if(midLPoint)
            temp->next=midLPoint;
        head=point->next;
    }
    ListNode* reverseList(ListNode *&head){
        if(!head)return head;
        ListNode *reverseHead=NULL;
        ListNode *lastNode=head;
        ListNode* temp;
        while(head!=NULL){
            temp=head->next;
            head->next=reverseHead;
            reverseHead=head;
            head=temp;
        }
        head=reverseHead;
        return lastNode;
    }
};