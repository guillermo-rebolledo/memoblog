---
path: delete-node-in-linked-list
date: 2020-10-21T02:19:51.379Z
title: Delete a Node in a Linked List
description: Algorithm to remove a node in a Linked List.
---
This is the second entry to the series of algorithms and coding challenges in my blog. ([Here's the first one](https://www.memorebo.dev/blog/reverse-a-singly-linked-list/) where I explain the purpose of these posts). This time we are going to learn how to **delete a node in a linked list**.

\* The code and examples I’m gonna be posting are written in Javascript.



### Problem Description
You can see a better description of the problem in [Hackerrank](https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem).

tl;dr: Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.

Example:

`Input: 20 -> 6 -> 2 -> 19 -> 7 -> 4 -> 15 -> 9, position = 3`

`Output: 20 -> 6 -> 2 -> 7 -> 4 -> 15 -> 9`

Constraints:

- 1 <= n <= 1000
- 1 <= list[i] <= 1000 where list[i] is the **i**th element of the linked list.

### Thought Process
What I initially think is that we need to change the pointer of the node in `position - 1` so that it skips the next node which would be the position we want to delete.

My algorithm would be:
- First of all check for edge cases (head is null, position is 0, etc).
- Have a copy of `head` to reference and a `counter` so that our code is aware when to stop traversing the list to perform the deletion.
- Once we stop at `position - 1`, we skip the next node.
- We return `head`.

### Solution
``` javascript
function deleteNode(head, position) {
    if (!head) {
        return head;
    }

    if (position === 0) {
        return head.next;
    }

    let currentNode = head;
    let counter = 0;

    while (counter < position - 1) {
        currentNode = currentNode.next;
        counter++;
    }

    currentNode.next = currentNode.next.next;
    return head;
}
```

### Explanation
- As in many other linked list problems or coding challenges in general, we first handle some edge cases. The `head` node we receive could be `null`. We can also get `position = 0`, in that case we just return the next node (`return head.next;`) because we have to delete the very first one.
- We save a reference to `head` like this `let currentNode = head;` and initialize a counter in 0 (the problem states that the head position starts in 0).
- We have a while loop with `counter < position - 1` as the condition. We have `position - 1` because we need to get the the node before the one we want to delete in order to skip it (delete it, I kinda see it better as skipping since we change the reference of the `next` property). We increase the `counter` at the end of every loop.
- Once we have the reference to the node before the position we want to delete in `currentNode`, we say `currentNode.next.next` in order to delete the next node, which would be the one we want to delete.
- Lastly, we return `head` which contains the nodes minus the node in the specified position.
