# Populating Next Right Pointers in Each Node II

接着问题: 'Populating Next Right Pointers in Each Node'

如果给定的是任意二叉树呢？之前的方法还奏效吗？

注意：

你仅有常量的存储空间。

```
         1
       /  \
      2    3
     / \    \
    4   5    7
```

当调用完函数后，树应该像下面:

```
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
```