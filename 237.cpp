/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
 /*
 该题删除的是给出的节点，因此只要将后一个复制到当前节点，然后删除下一个节点即可
 很无聊！！！！！
 */
class Solution {
public:
    void deleteNode(ListNode* node) {
        node->val=node->next->val;
        ListNode *temp_delete=node->next;
        node->next=node->next->next;
        delete temp_delete;
    }
};