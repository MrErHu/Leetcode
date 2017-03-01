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
var addTwoNumbers = function(l1, l2) {
    var pos1 = l1;
    var pos2 = l2;
    var virtualHead = new ListNode(-1);
    var pos = virtualHead;
    while(pos1 && pos2){
        var temp = new ListNode(pos1.val + pos2.val);
        pos.next = temp;
        pos = temp;
        pos1 = pos1.next;
        pos2 = pos2.next;
    }
    if(pos2){
        pos1 = pos2;
    }

    while (pos1){
        var temp = new ListNode(pos1.val);
        pos.next = temp;
        pos = temp;
        pos1 = pos1.next;
    }

    pos = virtualHead.next;
    while(pos){
        if(pos.val >= 10){
            pos.next ?
                pos.next.val += Math.floor(pos.val / 10):
                pos.next = new ListNode(Math.floor(pos.val / 10));
            pos.val %= 10;
        }
        pos = pos.next;
    }
    return virtualHead.next;
};