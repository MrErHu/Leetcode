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
var swapPairs = function(head) {
    var tempHead=head;
    var tempVal;
    while(tempHead && tempHead.next){
        tempVal=tempHead.next.val;
        tempHead.next.val=tempHead.val;
        tempHead.val=tempVal;
        tempHead=tempHead.next.next;
    }
    return head;
};