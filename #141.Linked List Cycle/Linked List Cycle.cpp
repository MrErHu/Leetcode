/*
使用STL的set集 时间复杂度为O（n）空间复杂度为O（1）
*/
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if(!head)return false;
        ListNode *point=head;
        set<ListNode*> container;
        while(point!=NULL){
            if(container.find(point)==container.end()){
                container.insert(point);
                point=point->next;
            }else
                return true;
        }
        return false;
    }
};
/*
改进后算法，空间复杂度降低为O（1）
*/
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if(!head || !head->next)return false;
        ListNode *fast,*slow;
        slow=head;
        fast=head->next->next;
        while(fast!=NULL && fast->next!=NULL){
            if(fast==slow)
                return true;
            fast=fast->next->next;
            slow=slow->next;
        }
        return false;
    }
};
