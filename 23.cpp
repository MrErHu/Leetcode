/*
方法一：通过并归的方式 
 */
class Solution {
public:
    ListNode *mergeKLists(vector<ListNode *> &lists) {
    if(lists.empty()){
        return nullptr;
    }
    while(lists.size() > 1){
        lists.push_back(mergeTwoLists(lists[0], lists[1]));
        lists.erase(lists.begin());
        lists.erase(lists.begin());
    }
    return lists.front();
}
 ListNode* mergeTwoLists(ListNode* list1,ListNode* list2){
        if(!list1 && !list2)return nullptr;
        if(list1==list2)return list1;
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
/*
方法二：用最小堆（优先权队列）解法
*/
struct cmp1{
    bool operator()(ListNode *a,ListNode* b){
        return a->val>b->val;//最小优先
    }
};
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        if(lists.empty()) return nullptr;
        priority_queue<ListNode*,vector<ListNode*>,cmp1> pqueue;
        ListNode *result=new ListNode(-1);
        ListNode *ptr=result;
        for(int i=0;i<lists.size();++i)
            if(lists[i])
            pqueue.push(lists[i]);
        while(!pqueue.empty()){
            ListNode *temp=pqueue.top();
            pqueue.pop();
            ptr->next=temp;
            if(temp->next)
                pqueue.push(temp->next);
            temp->next= nullptr;
            ptr=ptr->next;
        }
        return result->next;
    }
};

































