import { describe, expect, test } from '@jest/globals';
import Queue from './queue';

describe('queue: enqueue', () => {
    const queue = new Queue();
  
    test('first element', () => {
      queue.enqueue('a');
      expect(queue.size()).toBe(1);
      expect(queue.front()).toBe('a');
    });

    test('next element', () => {
        queue.enqueue('b');
        expect(queue.size()).toBe(2);
        expect(queue.front()).toBe('a');
    });
});

describe('queue: dequeue', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
  
    test('dequeue item', () => {
        const removedElement = queue.dequeue();

        expect(queue.size()).toBe(1);
        expect(removedElement).toBe('a');
        expect(queue.front()).toBe('b');
    });

    test('dequeue last item', () => {
        const removedElement = queue.dequeue();

        expect(queue.size()).toBe(0);
        expect(removedElement).toBe('b');
    });

    test('remove empty stack', () => {
        const removedElement = queue.dequeue();

        expect(removedElement).toBe(null);
        expect(queue.front()).toBe(null);
        expect(queue.size()).toBe(0);
    });
});

describe('queue: front', () => {
    test('applied for not empty', () => {
        const queue = new Queue();
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        expect(queue.front()).toBe('a');
    });

    test('applied for empty', () => {
        const queue = new Queue();
        expect(queue.front()).toBe(null);
    });
});

describe('queue: isEmpty', () => {
    test('not empty', () => {
        const queue = new Queue();
        queue.enqueue('a');
        expect(queue.isEmpty()).toBe(false);
    });

    test('empty', () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
    });
});

describe('queue: size', () => {
    test('not empty', () => {
        const queue = new Queue();
        queue.enqueue('c');
        expect(queue.size()).toBe(1);
    });

    test('empty', () => {
        const queue = new Queue();
        expect(queue.size()).toBe(0);
    });
});

describe('queue: clear', () => {

    test('clear items', () => {
        const queue = new Queue();
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        queue.clear();

        expect(queue.isEmpty()).toBe(true);
    });

    test('already empty', () => {
        const queue = new Queue();
        queue.clear();

        expect(queue.isEmpty()).toBe(true);
    });
});