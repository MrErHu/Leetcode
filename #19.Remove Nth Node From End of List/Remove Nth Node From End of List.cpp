/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
 /*
 自己添加头结点
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *front,*rear;
        ListNode addHead(0);    //添加自己的头结点，方便处理节点
        addHead.next=head;  
        front=&addHead;
        --n;    //实际寻找倒数第n-1个节点
        while(n>0){
            front=front->next;
            --n;
        }
        rear=&addHead;
        while(front->next->next!=NULL){
            front=front->next;
            rear=rear->next;
        }
        rear->next=rear->next->next;//删除rear下一个节点
        head=addHead.next;
        return head;
        
        
    }
};