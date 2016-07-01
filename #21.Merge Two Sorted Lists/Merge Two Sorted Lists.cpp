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
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        if(l1==NULL) return l2;
        if(l2==NULL) return l1;
        ListNode *newHead,*point;
        if(l1->val<l2->val){
            newHead=l1;
            l1=l1->next;
        }else{
            newHead=l2;
            l2=l2->next;
        }
        point=newHead;
        while(l1&&l2){
            if(l1->val<l2->val){
                point->next=l1;
                l1=l1->next;
                point=point->next;
            }else{
                point->next=l2;
                l2=l2->next;
                point=point->next;
            }
        }
        if(l1)  point->next=l1;
        else    point->next=l2;
        return newHead;
        
    }
};