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

    if(n <= 0 || head == null){
        return head;
    }
    //create virtual-head
    const virtualHead = new ListNode(-1);
    virtualHead.next = head;
    let front = virtualHead, end = virtualHead;
    while (front.next){
        front = front.next;
        if(n <= 0){
            end = end.next;
        }
        n --;
    }
    end.next = end.next.next;
    return virtualHead.next;
};