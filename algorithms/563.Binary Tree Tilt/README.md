# Binary Tree Tilt

给定一颗二叉树,返回整个树的倾斜值。

树的节点倾斜值是指树的左子树节点之和与右子树节点之和的差的绝对值。空节点的值为0。

树的倾斜值是指所有节点倾斜之和。

例如：

```
Input:
         1
       /   \
      2     3
Output: 1
Explanation:
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
```