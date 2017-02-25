/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next){
        return head;
    }
    var length = 1;
    var pos = head;
    while(pos.next){
        length++
        pos = pos.next;
    }
    pos.next = head;
    length = length - (k % length);

    while(length > 0){
        length--;
        pos = pos.next;
    }
    var tempHead = pos.next;
    pos.next = null;
    return tempHead;
};