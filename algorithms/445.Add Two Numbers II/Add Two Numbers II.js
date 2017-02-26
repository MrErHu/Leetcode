/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 只对Double能表示的数值有效，并不完全满足题意
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var num1 = 0;
    var num2 = 0;
    var pos1 = l1;
    var pos2 = l2;
    while (pos1) {
        num1 = (num1 * 10) + pos1.val;
        pos1 = pos1.next;
    }
    while (pos2) {
        num2 = (num2 * 10) + pos2.val;
        pos2 = pos2.next;
    }

    var num = num1 + num2;
    var head = null;

    while (num > 0) {
        var digit = new ListNode(num % 10);
        digit.next = head;
        head = digit;
        num = Math.floor((num / 10));
    }

    if (head) {
        return head;
    } else {
        return new ListNode(0);
    }
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 使用数据结构栈,保存两个单链表的数据，然后手动模拟加法过程
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var stack1 = [];
    var stack2 = [];
    var pos1 = l1;
    var pos2 = l2;
    var head = null;

    while (pos1) {
        stack1.push(pos1.val);
        pos1 = pos1.next;
    }

    while (pos2) {
        stack2.push(pos2.val);
        pos2 = pos2.next;
    }

    while (stack1.length > 0 && stack2.length > 0) {
        let num = (stack2.pop()) + (stack1.pop());
        if (num >= 10) {
            stack1.length > 0 ?
                stack1.push(stack1.pop() + Math.floor(num / 10)):
                stack1.push(Math.floor(num / 10));
            num %= 10;
        }
        digit = new ListNode(num);
        digit.next = head;
        head = digit;
    }
    if (stack2.length > 0) {
        stack1 = stack2;
    }

    while(stack1.length>0){
        let num = stack1.pop();
        if (num >= 10) {
            stack1.length > 0 ?
                stack1.push(stack1.pop() + Math.floor(num / 10)):
                stack1.push(Math.floor(num / 10));
            num %= 10;
        }

        let digit = new ListNode(num);
        digit.next = head;
        head = digit;
    }
    if(!head){
        return new ListNode(0);
    }else {
        return head;
    }
};