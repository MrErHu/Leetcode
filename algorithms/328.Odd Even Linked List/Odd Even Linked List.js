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

var oddEvenList = function(head) {

    var oddHead = new ListNode(-1);
    var evenHead = new ListNode(-1);
    var oddPoint = oddHead, evenPoint = evenHead;

    if(!head){
        return head;
    }

    var cursor = head, cursorCount = 1;

    while(cursor){
        if(cursorCount % 2 === 1){
            oddPoint.next = cursor;
            oddPoint = oddPoint.next;
        }else{
            evenPoint.next = cursor;
            evenPoint = evenPoint.next;
        }
        cursor = cursor.next;
        cursorCount ++;
    }

    evenPoint.next = null;
    oddPoint.next = evenHead.next;
    return oddHead.next;
};