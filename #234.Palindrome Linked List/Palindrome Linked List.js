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
function reverseLinkList(head) {
    var newHead=head;
    head=head.next;
    newHead.next=null;
    var tempNode;

    while(head != null){
        tempNode=head.next;
        head.next=newHead;
        newHead=head;
        head=tempNode;
    }
    return newHead;
}

var isPalindrome = function(head) {
    var front=head;
    var rear=head;

    if(head==null || head.next==null){
        return true;
    }

    while(rear!=null){
        front=front.next;
        rear=rear.next==null ? rear.next : rear.next.next;
    }

    rear=reverseLinkList(front);
    front=head;

    while(rear != null){
        if(rear.val != front.val){
            return false;
        }
        else{
            rear=rear.next;
            front=front.next;
        }
    }
    return true;
};
