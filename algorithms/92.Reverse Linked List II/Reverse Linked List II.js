/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let virtualHead = new ListNode(-1);
    virtualHead.next = head;

    let point = head, prePoint = virtualHead, index = 1;

    while (index < m) {
        prePoint = point;
        point = point.next;
        index++;
    }

    let next = point.next;
    let temp = next;
    let tail = point;

    while (index < n) {
        temp = next.next;
        next.next = point;
        point = next;
        next = temp;
        index++;
    }
    prePoint.next = point;
    tail.next = temp;
    return virtualHead.next;
};