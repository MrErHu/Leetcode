/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    var virtualHead = new ListNode(-1);
    var pos = virtualHead;
    while (l1 && l2) {
        let temp;
        if (l1.val > l2.val) {
            temp = l2;
            l2 = l2.next;
        } else {
            temp = l1;
            l1 = l1.next;
        }
        temp.next = null;
        pos.next = temp;
        pos = pos.next;
    }
    if (l1) {
        pos.next = l1;
    }
    if (l2) {
        pos.next = l2;
    }
    return virtualHead.next;
};