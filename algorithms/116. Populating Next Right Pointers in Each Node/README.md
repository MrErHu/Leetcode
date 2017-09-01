# Populating Next Right Pointers in Each Node

给定一颗二叉树:

```
    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
```

将每一个节点的next连接到右边的节点。如果不存在右节点，next指针应该为null、

初始时，所有的next节点都是null。

注意:

- 你仅可以使用常量的存储空间。

- 你可以假设是一颗完美二叉树(所有的叶子节点都在同一层，每一个父节点都有两个字节点)

例如:

```
         1
       /  \
      2    3
     / \  / \
    4  5  6  7
```

调用函数后你的节点应该是:

```
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL
```