import { describe, expect, test } from '@jest/globals';
import Stack from './stack';
describe('stack: push', () => {
    const stack = new Stack();
    test('first item', () => {
        stack.push('a');
        expect(stack.size()).toBe(1);
        expect(stack.peek()).toBe('a');
    });
    test('next item', () => {
        stack.push('b');
        expect(stack.size()).toBe(2);
        expect(stack.peek()).toBe('b');
    });
});
describe('stack: pop', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    test('remove item', () => {
        stack.pop();
        expect(stack.size()).toBe(1);
        expect(stack.peek()).toBe('a');
    });
    test('remove last item', () => {
        stack.pop();
        expect(stack.size()).toBe(0);
        expect(stack.peek()).toBe(null);
    });
    test('remove empty stack', () => {
        stack.pop();
        expect(stack.size()).toBe(0);
        expect(stack.peek()).toBe(null);
    });
});
describe('stack: peek', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    test('show last', () => {
        expect(stack.peek()).toBe('c');
    });
});
describe('stack: isEmpty', () => {
    test('not empty', () => {
        const stack = new Stack();
        stack.push('c');
        expect(stack.isEmpty()).toBe(false);
    });
    test('empty', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    });
});
describe('stack: size', () => {
    test('not empty', () => {
        const stack = new Stack();
        stack.push('c');
        expect(stack.size()).toBe(1);
    });
    test('empty', () => {
        const stack = new Stack();
        expect(stack.size()).toBe(0);
    });
});
describe('stack: clear', () => {
    test('clear items', () => {
        const stack = new Stack();
        stack.push('a');
        stack.push('b');
        stack.push('c');
        stack.clear();
        expect(stack.isEmpty()).toBe(true);
    });
    test('already empty', () => {
        const stack = new Stack();
        stack.clear();
        expect(stack.isEmpty()).toBe(true);
    });
});
