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

    var head=new ListNode(-1);
    var pos=head;
    var carry=0;

    while(l1 !=null && l2!=null){
        pos.next=new ListNode(l1.val+l2.val);
        pos=pos.next;
        l1=l1.next;
        l2=l2.next;
    }


    if(l1!=null){
        pos.next=l1;
    }
    if(l2!=null){
        pos.next=l2;
    }

    pos=head.next;

    while(pos!=null){
        pos.val+=carry;
        if(pos.val<10){
            pos=pos.next;
            carry=0;
        }else{
            carry=Math.floor(pos.val/10);
            pos.val%=10;
            if(pos.next ==null && carry!=0){
                pos.next=new ListNode(carry);
                break;
            }
            pos=pos.next;
        }
    }

    return head.next;
};