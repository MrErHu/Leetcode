class Solution {
public:
    ListNode* reverseBetween(ListNode* head, int m, int n) {
        if(!head)
            return head;
        int count=0;
        ListNode *userHead=new ListNode(-1);
        userHead->next=head;
        head=userHead;
        ListNode *point=head;
        ListNode *preMNode,*Mnode,*Nnode,*rearNNode;
        while(count<=n && point){
            if(count==m-1) {
                preMNode = point;
                Mnode=point->next;
            }
            if(count==n) {
                Nnode=point;
                rearNNode = point->next;
            }
            ++count;
            point=point->next;
        }
        Nnode->next=NULL;
        Nnode=reverseList(Mnode);
        Nnode->next=rearNNode;
        preMNode->next=Mnode;
        return head->next;

    }
    /*
     * 函数返回的是翻转单链表之后的尾节点
     */
    ListNode* reverseList(ListNode *&head){
        if(!head)return head;
        ListNode *reverseHead=NULL;
        ListNode *lastNode=head;
        ListNode* temp;
        while(head!=NULL){
            temp=head->next;
            head->next=reverseHead;
            reverseHead=head;
            head=temp;
        }
        head=reverseHead;
        return lastNode;
    }
};