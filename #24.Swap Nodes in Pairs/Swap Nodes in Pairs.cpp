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
    ListNode* swapPairs(ListNode* head) {
        ListNode* headStore=head;
        while(head && head->next){
            swap(head->val,head->next->val);
            head=head->next->next;
        }
        return headStore;
    }
};