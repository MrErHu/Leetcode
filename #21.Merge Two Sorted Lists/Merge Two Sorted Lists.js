/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    var newHead=new ListNode(-1);
    var pos=newHead;
     while(l1 !=null && l2 !=null){
         if(l1.val < l2.val){
             pos.next=l1;
             pos=pos.next;
             l1=l1.next;
         }else{
             pos.next=l2;
             pos=pos.next;
             l2=l2.next;
         }
     }
    if(l1!=null){
        pos.next=l1;
    }else{
        pos.next=l2;
    }
    return newHead.next;
};