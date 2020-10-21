---
path: lowest-common-ancestor
date: 2020-10-21T03:20:16.778Z
title: Lowest Common Ancestor of a Binary Tree
description: Algorithm to find the lowest common ancestor of a Binary Tree.
---
This is the third entry to the series of algorithms and coding challenges in my blog. ([Here’s the first one](https://www.memorebo.dev/blog/reverse-a-singly-linked-list/) where I explain the purpose of these posts). This time we are going to learn how to delete a node in a linked list. You can also check the second post on [how to delete a node from a linked list](https://www.memorebo.dev/blog/delete-a-node-in-a-linked-list/).

\* The code and examples I’m gonna be posting are written in Javascript.

### Problem Description

Link to [Leetcode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/).

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

**Example 1:**

![Binary Tree](/assets/example1.png "Example of a Binary Tree")

`Input: root = \[3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1`

`Output: 3`

`Explanation: The LCA of nodes 5 and 1 is 3.`

**Example 2 (same tree above):**

`Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4`

`Output: 5`

`Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.`

**Constraints**

- The number of nodes in the tree is in the range [2, 105].
- -109 <= Node.val <= 109
- All Node.val are unique.
- p != q
- p and q will exist in the tree.


### Thought Process
- We most likely are gonna need recursion to solve this challenge.

My algorithm would be:
- Check if root is defined, check if root equals to `p` or `q`.
- Go down the left and right side to find the nodes that equal `p` and `q`.
- If we don't find it on the left it means that it has to be on the right side and vice versa.


### Solution

``` javascript
function lowestCommonAncestor(root, p, q) {  
  if (!root || root === p || root === q) {
    return root;
  }
  
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  
  if (!right) return left;
  if (!left) return right;
  
  return root;
};
```

### Explanation
- We first check if `root` is defined or if it equals `p` or `q`.
- We define `left` and call the function recursively with the node in the left of `root`. We do the same with `right` and the node to the right of `root`. This will either return the node that equals `p` or `q` or it will return `null` if it does not find it and gets to the end of the tree.
- If `right` is `null` the LCA **must** be in the left side of the tree. 
- If `left` is `null` the LCA **must** be in the right side of the tree.
