# Kth Smallest Element in a Sorted Matrix

给定一个 n x n 的矩阵，其中每行每列都已经递增排序，在矩阵中找到第k个小的元素。

注意是在排序数组中第k个元素，而不是第k个不同元素。

例如:

```
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
```

注意:

你可以假设k是有效的，即 1 ≤ k ≤ n ^ 2
