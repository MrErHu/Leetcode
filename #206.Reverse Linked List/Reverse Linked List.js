/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    if(head==null){
        return head;
    }

    var newHead=head;
    head=newHead.next;
    newHead.next=null;

    while(head){
        var temp=head.next;
        head.next=newHead;
        newHead=head;
        head=temp;
    }

    return newHead;
};