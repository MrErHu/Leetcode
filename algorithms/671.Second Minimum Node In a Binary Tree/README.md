# Second Minimum Node In a Binary Tree

给定一棵非空特殊二叉树，其中的节点值都是非空的，并且树中的每个节点都有两个或者零个子节点。如果节点有两个子节点。如果节点有两个子节点，节点的值在左右小于两个自己小于两个子子节点。

给定一颗二叉树，你需要输出整个树节点值中的第二小的数。如果不存在的话，输出-1。

例1:

```
Input:
    2
   / \
  2   5
     / \
    5   7

Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.
```

例子2:

```
Input:
    2
   / \
  2   2

Output: -1
Explanation: The smallest value is 2, but there isn't any second smallest value.
```