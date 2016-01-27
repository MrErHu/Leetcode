class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if (!head)return NULL;
        ListNode *point = head;
        set<ListNode *> container;
        while (point != NULL) {
            if (container.find(point) != container.end()) {
                return *container.find(point);
            } else {
                container.insert(point);
                point = point->next;
            }
        }
        return NULL;
    }
};