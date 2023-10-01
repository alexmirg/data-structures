import {describe, expect, test} from '@jest/globals';
import DoublyLinkedList from './doublyLinkedList';

describe('Doubly Linked List: insert', () => {
  const list = new DoublyLinkedList();

  test('first element', () => {
    list.insert(0, 'a');

    expect(list.toString()).toBe('a');
    expect(list.head?.data).toBe('a');
  });
  
  test('next element', () => {
    list.insert(1, 'b');

    expect(list.toString()).toBe('a,b');
  });
});

describe('Doubly Linked List: RemoveAt', () => {
  test('first position', () => {
    const list = new DoublyLinkedList();
    list.insert(0, 'a');
    list.insert(1, 'b');
    list.removeAt(0);

    expect(list.toString()).toBe('b');
    expect(list.size()).toBe(1);
  });

  test('middle position', () => {
    const list = new DoublyLinkedList();
    list.insert(0, 'a');
    list.insert(1, 'b');
    list.insert(2, 'c');
    list.removeAt(1);

    expect(list.toString()).toBe('a,c');
    expect(list.size()).toBe(2);
  });

  test('last position', () => {
    const list = new DoublyLinkedList();
    list.insert(0, 'a');
    list.insert(1, 'b');
    list.insert(2, 'c');
    list.removeAt(2);

    expect(list.toString()).toBe('a,b');
    expect(list.size()).toBe(2);
  });
});

describe('Doubly Linked List: remove', () => {
  test('target element', () => {
    const list = new DoublyLinkedList();
    list.insert(0, 'a');
    list.insert(1, 'b');
    list.insert(2, 'c');
    list.remove('c');

    expect(list.toString()).toBe('a,b');
    expect(list.size()).toBe(2);
  });
});

describe('Doubly Linked List: indexOf', () => {
  const list = new DoublyLinkedList();
  list.insert(0, 'a');
  list.insert(1, 'b');
  list.insert(2, 'c');

  test('indexOf: first element', () => {
    expect(list.indexOf('a')).toBe(0);
  });

  test('indexOf: middle element', () => {
    expect(list.indexOf('b')).toBe(1);
  });
  test('indexOf: last element', () => {
    expect(list.indexOf('c')).toBe(2);
  });
  test('indexOf: not exist element', () => {
    expect(list.indexOf('d')).toBe(-1);
  });
});

describe('Doubly Linked List: size', () => {
  const list = new DoublyLinkedList();

  test('size: empty', () => {
    expect(list.size()).toBe(0);
  });

  test('size: not empty', () => {
    list.insert(0, 'a');
    list.insert(1, 'b');
    list.insert(2, 'c');

    expect(list.size()).toBe(3);
  });
});