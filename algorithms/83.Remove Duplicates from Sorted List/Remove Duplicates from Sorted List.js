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
var deleteDuplicates = function(head) {
    var pos = head;
    while(pos && pos.next){
        if(pos.val == pos.next.val){
            pos.next = pos.next.next;
        }else{
            pos = pos.next;
        }
    }
    return head;
};