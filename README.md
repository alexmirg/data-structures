# Data Structures Module

## Overview

A various collection of data structures, including **linked lists, stacks, queues, sets**, and more, for Node.js and JavaScript projects. Simplify complex data operations and promote code reusability in web servers, utilities, and data-intensive apps with seamless **CommonJS** and **ESM** integration.

## Key Data Structures

- **Linked List**: A flexible linked list implementation for dynamic data storage and manipulation.
- **Stack**: A stack data structure for managing data in a Last-In, First-Out (LIFO) manner.
- **Queue**: A queue data structure for managing data in a First-In, First-Out (FIFO) manner.
- **Sets**: A set data structure for handling unique values and set operations.

## Benefits

- Efficient Data Management: Easily handle and organize data with optimized data structures.
- Code Reusability: Encapsulate common data operations, reducing code duplication.
- Interoperability: Import and use the toolbox seamlessly in CommonJS and ESM environments.

## Use Cases

- Use linked lists for managing data with dynamic insertions and deletions.
- Employ stacks and queues for algorithmic operations or task scheduling.
- Utilize sets for maintaining unique collections of data.

## Getting Started

1. Install npm package to your project

    `npm i my-data-structures`

2. Usage

- ESM

```javascript
    import { linkedList } from 'my-data-structures';

    const list = new LinkedList();
```

- CommonJS

```javascript
    const { linkedList } = require('my-data-structures');

    const list = new LinkedList();
```

 Consult the documentation for details.

### Documentation

#### Stack

Representing a stack data structure.

| property/method         | params                        | return              | description |
| --------                | --------                      | --------            | -------- |
| .push(element)          | element: any                  | undefined           | add an element to the end of the stack   |
| .pop()                  |                               | element: any / null | remove the last element   |
| .peek()                 |                               | element: any / null | get the last element   |
| .isEmpty()              |                               | boolean             | check is the stack empty or not   |
| .size()                 |                               | number              | get the stack size (length)   |
| .clear()                |                               | undefined           | remove all stack items   |

#### Queue

The simple queue data structure.

| property/method         | params                        | return              | description |
| --------                | --------                      | --------            | -------- |
| .enqueue(element)       | element: any                  | undefined           | add an element to the queue   |
| .dequeue()              |                               | element: any / null | remove the element from the queue   |
| .front()                |                               | element: any / null | get the first queue element   |
| .isEmpty()              |                               | boolean             | check is the queue emptynot   |
| .size()                 |                               | number              | get the queue length   |
| .clear()                |                               | undefined           | remove all queue items   |

#### Linked List

Linked list data structure.

| property/method         | params                        | return           | description |
| --------                | --------                      | --------         | -------- |
| .append(data)           | data: any                     | undefined        | add an element to the end of the linked list   |
| .insert(position, data) | position: number, data: any   | boolean          | insert an element to the specified position in the linked list   |
| .remove(data)           | data: any                     | data: any / null | remove an element from the list   |
| .removeAt(position)     | position: number              | data: any / null | remove an element by the position   |
| .indexOf(data)          | data: any                     | index: number    | to find the element index   |
| .toArray()              |                               | array            | to convert linked list to an array   |

#### Doubly Linked List

Doubly Linked list data structure.

| property/method         | params                        | return           | description |
| --------                | --------                      | --------         | -------- |
| .insert(position, data) | position: number, data: any   | boolean          | insert an element to the specified position   |
| .remove(data)           | data: any                     | data: any / null | remove an element from the list   |
| .removeAt(position)     | position: number              | data: any / null | remove an element by the position   |
| .indexOf(data)          | data: any                     | index: number    | to find the element index   |
| .toArray()              |                               | array            | to convert doubly linked list to an array   |
