# 234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Follow up:

Could you do it in O(n) time and O(1) space?

思路：
反转链表法，将链表后半段原地翻转，再将前半段、后半段依次比较，判断是否相等，
时间复杂度O（n），空间复杂度为O（1）满足题目要求。