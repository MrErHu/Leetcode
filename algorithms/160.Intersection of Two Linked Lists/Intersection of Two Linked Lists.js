/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var getLinkListLength = function (root) {
        var length = 0;
        while (root){
            length++;
            root = root.next;
        }
        return length
    };
    var Alength = getLinkListLength(headA);
    var Blength = getLinkListLength(headB);
    var diff = Alength - Blength;

    if(diff < 0){
        diff = - diff;
        var temp = headB;
        headB = headA;
        headA = temp;
    }

    while (diff > 0 ){
        headA = headA.next;
        diff--;
    }

    while(headA && headB){
        if(headA ==headB){
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }

    return null;
};