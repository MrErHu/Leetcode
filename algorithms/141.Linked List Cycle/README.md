# 141. Linked List Cycle

Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

中文翻译：

给你一个单链表，你能判断其中时候含有环。

更进一步:

你能不使用额外的空间解决该问题吗？

思路:如果不使用额外的空间来判断该单链表是否有环，可以设置两个变量分别遍历单链表，其中一个变量的遍历速度是另外一个的两倍，
这种如果不存在环，速度快的变量肯定会首先到达结尾，如果存在环，肯定会存在速度快的节点追上速度慢的节点，如果某个时刻两者相等，
肯定在单链表中存在环。