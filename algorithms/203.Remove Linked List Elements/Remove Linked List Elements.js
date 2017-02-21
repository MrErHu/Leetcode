/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var virtualHead= new ListNode(-1);
    var pos = virtualHead;
    virtualHead.next = head;
    while (pos.next){
        if(pos.next.val == val){
            pos.next = pos.next.next;
        }else{
            pos = pos.next;
        }
    }
    return virtualHead.next;
};