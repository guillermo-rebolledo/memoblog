---
path: understanding-linked-lists
date: 2021-04-15T23:05:28.309Z
title: Understanding Linked Lists
description: Come along with me in this journey to understand how to reverse a Linked List.
---
## So, what the heck is a Linked List anyway?

According to [Wikipedia](https://en.wikipedia.org/wiki/Linked_list), a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. 

It is a data structure consisting of a collection of nodes that together represent a sequence. In its most basic form, each node contains data and a reference (in other words, a link) to the next node in the sequence.

Okay, but at this point, you might be wondering... 

## What's the difference between an array and a linked list?

The main difference is that **arrays** store elements in **contiguous memory locations**. This way computers can easily calculate the address for the elements in the array with a specific index.

This is why you can do `const secondItem = myArray[1];` but you can't do the same with linked lists. 

**Linked Lists** are not usually stored in contiguous locations and that's also why there needs to be an extra 'tag' giving a reference to the next element in the list. You might have heard of this as **pointers**.

See the image below where I try to demonstrate how these two different data structures are stored. The squares in the grid represent memory slots which can be empty or not.

![memory representation array vs linked list](/assets/data-structures-prep-3-2-.jpg "Representation of Array vs Linked List in Memory")

Some other differences:

* For Arrays, memory allocation happens at compile time and at runtime for Linked Lists.
* Arrays' sizes cannot be altered during runtime due to the risk of overwriting other data. Linked Lists can have data scattered but it does not matter since we have pointers to each element in the sequence.
* Normally, Linked Lists use more memory because a reference to the next element is also stored, however, Linked Lists can use less memory overall when you are not certain of the size you need to allocate since it is dynamic and happens at runtime.

## How do I build a Linked List?

In Javascript, a Node of a Linked List looks like this:

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

But we might want to have a LinkedList class that can help us build the list. It would look something like this:

```js
class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }
    
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(data);
  }
  
  prepend(data) {
    const newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }
  
  deleteWithValue(data) {
    if (this.head === null) {
      return;
    }
    
    if (this.head.data === data) {
      this.head = this.head.next;
    }
    
    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}
```

Some things to note:

* The `head` will always be the start of the list.
*
