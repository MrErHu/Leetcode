# Convert BST to Greater Tree

给定一个二叉搜索树，将其转化成Greater Tree。Greater Tree的定义是原始BST树中的每一个节点值被改变成原始值加上在BST中所有大于其值的和。

Given a Binary Search Tree (BST),
convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.


Example:

```
输入:
              5
            /   \
           2     13

输出:
             18
            /   \
          20     13
```
