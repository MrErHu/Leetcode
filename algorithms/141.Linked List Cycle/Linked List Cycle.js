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
    if(!head || !head.next){
        return false;
    }
    var front =  head.next ? head.next.next : head.next;
    var end = head.next;
    while(front){
        front = front.next ? front.next.next : front.next;
        end = end.next;
        if(front == end){
            return true;
        }
    }
    return false;
};