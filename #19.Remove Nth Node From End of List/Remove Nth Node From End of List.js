/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    if(head == null || n < 0){
        return head;
    }
    var addHead=new ListNode(-1);
    addHead.next=head;

    var front=addHead;
    var rear=addHead;

    while(n>0){
        front=front.next;
        --n;
    }

    while(front.next!=null){
        front=front.next;
        rear=rear.next;
    }

    rear.next=rear.next.next;

    return addHead.next;

};