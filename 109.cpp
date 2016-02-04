/*
Convert Sorted List to Binary Search Tree
*/
class Solution {
public:
    TreeNode* sortedListToBST(ListNode* head) {
        if(!head)
            return nullptr;
        return buildListToBST(head);
    }
    TreeNode* buildListToBST(ListNode* head){
      if(!head) return nullptr;
      if(!head->next){
          TreeNode *root=new TreeNode(head->val);
          return root;
      }
      ListNode *slow,*fast,*preslow;
        slow=head;
        fast=head->next->next;
        preslow=head;
        while(fast){
            preslow=slow;
            slow=slow->next;
            fast=fast->next!= nullptr?fast->next->next:fast->next;
        }
        slow=preslow;
        TreeNode *root=new TreeNode(slow->next->val);
        fast=slow->next->next;
        slow->next= nullptr;
        root->left=buildListToBST(head);
        root->right=buildListToBST(fast);
        return root;
    }
};
