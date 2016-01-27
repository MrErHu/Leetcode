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
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        int headA_l=length(headA);
        int headB_l=length(headB);
        ListNode *pointA=headA;
        ListNode *pointB=headB;
        int sub=headA_l-headB_l;
        if(sub>0)
            for(;sub>0;--sub)
                pointA=pointA->next;
        else
            for(;sub<0;sub++)
                pointB=pointB->next;
        while(pointA&&pointB){
            if(pointA==pointB)  return pointA;
            pointA=pointA->next;
            pointB=pointB->next;
        }
        return NULL;
    }
    int length(ListNode *head){
        if(head==NULL) return 0;
        int num=0;
        ListNode *point=head;
        while(point){
            ++num;
            point=point->next;
        }
        return num;
    }
};