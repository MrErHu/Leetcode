# Maximum Width of Binary Tree

给定一棵二叉树，编写一个函数来得到二叉树的最大宽度。二叉树的宽度是指所有层的最大宽度。二叉树的结构类似于完整二叉树，但是某些几点会为null。

每一层的宽度定义为最左和最右非空节点的之前的长度，其中的空节点会被计算进长度。

例1:
```
Input:

           1
         /   \
        3     2
       / \     \
      5   3     9

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).

```

例2:

```
Input:

          1
         /
        3
       / \
      5   3

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
```


例3:

```
Input:

          1
         / \
        3   2
       /
      5

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
```

例四:

```
Input:

          1
         / \
        3   2
       /     \
      5       9
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
```