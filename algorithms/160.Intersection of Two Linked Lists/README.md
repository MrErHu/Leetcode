# 160. Intersection of Two Linked Lists

Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:

A:          a1 → a2

                   ↘

                     c1 → c2 → c3

                   ↗

B:     b1 → b2 → b3

begin to intersect at node c1.

Notes:

1. If the two linked lists have no intersection at all, return null.
2. The linked lists must retain their original structure after the function returns.
3. You may assume there are no cycles anywhere in the entire linked structure.
4. Your code should preferably run in O(n) time and use only O(1) memory.


思路解析:

如果要使用时间复杂度为O(n)，空间复杂度为O(1)，方法为:

1. 首先分别遍历单链表A，得到长度Alength

2. 再次遍历单链表B,得到长度Blength

3. 选取长度较长的节点，先遍历两个长度之差(因为如果存在交叉点，肯定会存在的情况是后面的节点是完全相同的)，得到节点C

4. 依次同速度遍历节点C为首的单链表和较短的单链表，如果存在两个节点相同，则返回，否则返回null

