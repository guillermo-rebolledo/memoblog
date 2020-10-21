---
path: reverse-singly-linked-list
date: 2020-10-21T01:00:01.525Z
title: Reverse a Singly Linked List
description: Algorithm to reverse a Singly Linked List.
---
Hello there! 👋🏼 If you are a developer/software engineer, you most likely have been through a series of interviews. If you are a student then you will face this at some point in your career. I am going through that right now so I thought I might as well document my study material 🤷🏻‍♂️. This is the first entry to a series of posts about algorithms and coding problems, so without further ado, here is one classic: **Reverse a Signly Linked List**.

\* The code and examples I'm gonna be posting are written in Javascript.

### What is a Linked List?

A linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. [Via Wikipedia](https://en.wikipedia.org/wiki/Linked_list).

### Problem Description

Reverse a singly linked list. Example:

`Input: 1->2->3->4->5->NULL`

`Output: 5->4->3->2->1->NULL`

### Thought Process

When I think about Linked Lists, I think about **pointers**. What we need to do here is just switch the pointer **next** and create **previous** pointer (since it is a singly linked list we don't have another way to know the previous node) to different nodes to change the order of the list (reverse it).

### Solution

```javascript
function reverseList(head) {
  let previousNode = null;

  while (head) {
    let nextNode = head.next;
    head.next = previousNode;
    previousNode = head;
    head = nextNode;
  }

  return previousNode;
};
```

### Explanation
- We define `let previousNode = null;` in order to have a reference to previous node once we traverse the list.
- We start traversing the linked list with a `while` loop. Keep looping until `head` (current node) is null, which means we traversed the whole list.
- Inside this while loop, we are going to change the pointers of each node to reverse the order of the list. First, we save a reference to the current next node with `let nextNode = head.next;`. Then we say `head.next = previousNode;` which means "hey, the node that follows the current node is now the previous node. Then, with `previousNode = head;` we are saying "the current node we are on right now is gonna become the previous one". The final statement inside the while loop `head = nextNode;` is setting the next node as the current one now. If it were the end of the list, the while loop finishes. Since it is not we now have what was the next node as the current one and so on.
- Lastly, we return the `previousNode` which now has the reversed linked list since we switched the pointers.
