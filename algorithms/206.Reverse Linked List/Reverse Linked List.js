/**
 * iteratively edition
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
var reverseList = function (head) {
    let pos = null;
    while (head) {
        let temp = head;
        head = head.next;
        temp.next = pos;
        pos = temp;
    }
    return pos;
};

/**
 * recursively edition
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
var reverseList = function (head) {
    return _innerRecursion(head, null)

    function _innerRecursion(head, newHead) {
        if (!head) {
            return newHead;
        }
        let next = head.next;
        head.next = newHead;
        return _innerRecursion(next, head)
    }
};