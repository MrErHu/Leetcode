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
var detectCycle = function (head) {

    var oneStep = head;
    var twoStep = head;

    while (twoStep != null) {

        oneStep = oneStep.next;

        twoStep = twoStep.next;
        twoStep = twoStep ? twoStep.next : twoStep;

        if(oneStep ==  twoStep){
            break;
        }
    }

    if(!twoStep){
        return null;
    }

    while (head!= oneStep){
        head = head.next;
        oneStep = oneStep.next;
    }

    return oneStep;
};