class Solution {
public:
    bool isPalindrome(ListNode* head) {
        if(head==NULL || head->next==NULL)
            return true;
        ListNode *front,*rear;
        front=head;
        rear=head;
        while(front!=NULL && front->next!=NULL){
            front=front->next->next;
            rear=rear->next;
        }
        if(front) rear=rear->next;
        ListNode *list1=head;
        ListNode *list2=rear;
        list2=reverseList(list2);
        while(list2!=NULL){
            if(list1->val!=list2->val)
                return false;
            else{
                list1=list1->next;
                list2=list2->next;
            }
        }
        return true;
    }
    ListNode* reverseList(ListNode* head){
        ListNode* reverseHead=NULL;
        while(head!=NULL){
            ListNode *temp=head->next;
            head->next=reverseHead;
            reverseHead=head;
            head=temp;
        }
        return reverseHead;
    }
};