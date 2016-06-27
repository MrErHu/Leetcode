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

    var point=head;

    while(point != null && point.next !=null){
        if(point.val == point.next.val){
            point.next=point.next.next;
        }else{
            point=point.next;
        }
    }

    return head;

};