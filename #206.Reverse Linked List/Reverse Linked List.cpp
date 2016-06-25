/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if(head==NULL||head->next==NULL){
            return head;
        }
        ListNode* p=head->next;
        ListNode* temp;
        head->next=NULL;
        while(p!=NULL){
            temp=p->next;
            p->next=head;
            head=p;
            p=temp;
        }
        return head;
    }
};