/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    var pos1=head;
    var pos2=head;

    while(pos1 != null && pos2 !=null){
        pos1=pos1.next;
        pos2=pos2.next!=null ? pos2.next.next : pos2.next;

        if(pos1 == pos2 && pos1 !=null){
            return true;
        }
    }
    return false;
};