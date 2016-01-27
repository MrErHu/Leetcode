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