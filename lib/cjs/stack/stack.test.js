"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const stack_1 = __importDefault(require("./stack"));
(0, globals_1.describe)('stack: push', () => {
    const stack = new stack_1.default();
    (0, globals_1.test)('first item', () => {
        stack.push('a');
        (0, globals_1.expect)(stack.size()).toBe(1);
        (0, globals_1.expect)(stack.peek()).toBe('a');
    });
    (0, globals_1.test)('next item', () => {
        stack.push('b');
        (0, globals_1.expect)(stack.size()).toBe(2);
        (0, globals_1.expect)(stack.peek()).toBe('b');
    });
});
(0, globals_1.describe)('stack: pop', () => {
    const stack = new stack_1.default();
    stack.push('a');
    stack.push('b');
    (0, globals_1.test)('remove item', () => {
        stack.pop();
        (0, globals_1.expect)(stack.size()).toBe(1);
        (0, globals_1.expect)(stack.peek()).toBe('a');
    });
    (0, globals_1.test)('remove last item', () => {
        stack.pop();
        (0, globals_1.expect)(stack.size()).toBe(0);
        (0, globals_1.expect)(stack.peek()).toBe(null);
    });
    (0, globals_1.test)('remove empty stack', () => {
        stack.pop();
        (0, globals_1.expect)(stack.size()).toBe(0);
        (0, globals_1.expect)(stack.peek()).toBe(null);
    });
});
(0, globals_1.describe)('stack: peek', () => {
    const stack = new stack_1.default();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    (0, globals_1.test)('show last', () => {
        (0, globals_1.expect)(stack.peek()).toBe('c');
    });
});
(0, globals_1.describe)('stack: isEmpty', () => {
    (0, globals_1.test)('not empty', () => {
        const stack = new stack_1.default();
        stack.push('c');
        (0, globals_1.expect)(stack.isEmpty()).toBe(false);
    });
    (0, globals_1.test)('empty', () => {
        const stack = new stack_1.default();
        (0, globals_1.expect)(stack.isEmpty()).toBe(true);
    });
});
(0, globals_1.describe)('stack: size', () => {
    (0, globals_1.test)('not empty', () => {
        const stack = new stack_1.default();
        stack.push('c');
        (0, globals_1.expect)(stack.size()).toBe(1);
    });
    (0, globals_1.test)('empty', () => {
        const stack = new stack_1.default();
        (0, globals_1.expect)(stack.size()).toBe(0);
    });
});
(0, globals_1.describe)('stack: clear', () => {
    (0, globals_1.test)('clear items', () => {
        const stack = new stack_1.default();
        stack.push('a');
        stack.push('b');
        stack.push('c');
        stack.clear();
        (0, globals_1.expect)(stack.isEmpty()).toBe(true);
    });
    (0, globals_1.test)('already empty', () => {
        const stack = new stack_1.default();
        stack.clear();
        (0, globals_1.expect)(stack.isEmpty()).toBe(true);
    });
});
