# 61. Rotate List

Given a list, rotate the list to the right by k places, where k is non-negative.

For example:

Given 1->2->3->4->5->NULL and k = 2,

return 4->5->1->2->3->NULL.

思路：通过首先形成一个环，然后对环进行切割的方式实现
注意，题目要求的K是从右开始数的