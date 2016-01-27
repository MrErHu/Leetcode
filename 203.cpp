/*
迭代算法
*/
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        ListNode *tHead=new ListNode(-1);
        tHead->next=head;
        ListNode *p=tHead;
        while(p!=NULL &&p->next!=NULL){
            if(p->next->val==val){
                p->next=p->next->next;
            }else{
                p=p->next;
            }
        }
        if(tHead->next!=NULL)return tHead->next;
        else return NULL;
    }
};
/*
递归算法
*/
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        if(head==NULL) return NULL;
        head->next=removeElements(head->next,val);
        if(head->val==val) return head->next;
        else return head;
        
    }
};