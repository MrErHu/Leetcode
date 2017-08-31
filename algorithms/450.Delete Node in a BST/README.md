# Delete Node in a BST

给定一个二叉搜索树的引用和一个key值，在二叉搜索树中删除给定的节点值，并返回更新后的二叉搜索树的根节点引用。

通常，删除给定节点可以被分成两步：

寻找要删除的节点

如果发现节点，将其删除。

注意: 时间复杂度应该是O(树高)

例如:

```
root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7
```