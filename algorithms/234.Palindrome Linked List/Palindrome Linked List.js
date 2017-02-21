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
var isPalindrome = function (head) {
    if (!head || !head.next) {
        return true;
    }
    let pos1 = head;
    let pos2 = head;
    while (pos1) {
        pos1 = pos1.next ? pos1.next.next : pos1.next;
        pos2 = pos2.next;
    }
    pos1 = head;
    pos2 = reverseLinkList(pos2);
    while (pos1 && pos2) {
        if (pos1.val != pos2.val) {
            return false
        }
        pos1 = pos1.next;
        pos2 = pos2.next;
    }
    return true;
    function reverseLinkList(head) {
        let anotherHead = null;
        while (head) {
            let temp = head;
            head = head.next;
            temp.next = anotherHead;
            anotherHead = temp;
        }
        return anotherHead;
    }
};