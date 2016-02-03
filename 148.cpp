/*
链表的并归排序
时间复杂度为O（nlogn）
*/
Solution for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* sortList(ListNode* head) {
        return sortMerge(head);
    }
    ListNode* sortMerge(ListNode* head){
        if(!head || !head->next) return head;
        ListNode *fast,*last;
        last=head;
        fast=head->next->next;
        while(fast && last){
            last=last->next;
            fast=fast->next!=NULL?fast->next->next:fast->next;
        }
        fast=last->next;
        last->next=NULL;
        head=sortList(head);
        fast=sortList(fast);
        return merge(head,fast);


    }
    ListNode* merge(ListNode* list1,ListNode* list2){
        if(!list1 && !list2)return nullptr;
        if(!list1) return list2;
        if(!list2) return list1;
        ListNode *newHead=new ListNode(-1);
        ListNode *ptr= newHead;
        ListNode *tmp;
        while(list1 && list2){
            if(list1->val<list2->val){
                ptr->next=list1;
                list1=list1->next;
            }
            else{
                ptr->next=list2;
                list2=list2->next;
            }
            ptr=ptr->next;
        }
        if(list1) ptr->next=list1;
        if(list2) ptr->next=list2;
        tmp=newHead->next;
        delete newHead;
        return tmp;
    }
};
