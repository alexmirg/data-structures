"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const queue_1 = __importDefault(require("./queue"));
(0, globals_1.describe)('queue: enqueue', () => {
    const queue = new queue_1.default();
    (0, globals_1.test)('first element', () => {
        queue.enqueue('a');
        (0, globals_1.expect)(queue.size()).toBe(1);
        (0, globals_1.expect)(queue.front()).toBe('a');
    });
    (0, globals_1.test)('next element', () => {
        queue.enqueue('b');
        (0, globals_1.expect)(queue.size()).toBe(2);
        (0, globals_1.expect)(queue.front()).toBe('a');
    });
});
(0, globals_1.describe)('queue: dequeue', () => {
    const queue = new queue_1.default();
    queue.enqueue('a');
    queue.enqueue('b');
    (0, globals_1.test)('dequeue item', () => {
        const removedElement = queue.dequeue();
        (0, globals_1.expect)(queue.size()).toBe(1);
        (0, globals_1.expect)(removedElement).toBe('a');
        (0, globals_1.expect)(queue.front()).toBe('b');
    });
    (0, globals_1.test)('dequeue last item', () => {
        const removedElement = queue.dequeue();
        (0, globals_1.expect)(queue.size()).toBe(0);
        (0, globals_1.expect)(removedElement).toBe('b');
    });
    (0, globals_1.test)('remove empty stack', () => {
        const removedElement = queue.dequeue();
        (0, globals_1.expect)(removedElement).toBe(null);
        (0, globals_1.expect)(queue.front()).toBe(null);
        (0, globals_1.expect)(queue.size()).toBe(0);
    });
});
(0, globals_1.describe)('queue: front', () => {
    (0, globals_1.test)('applied for not empty', () => {
        const queue = new queue_1.default();
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        (0, globals_1.expect)(queue.front()).toBe('a');
    });
    (0, globals_1.test)('applied for empty', () => {
        const queue = new queue_1.default();
        (0, globals_1.expect)(queue.front()).toBe(null);
    });
});
(0, globals_1.describe)('queue: isEmpty', () => {
    (0, globals_1.test)('not empty', () => {
        const queue = new queue_1.default();
        queue.enqueue('a');
        (0, globals_1.expect)(queue.isEmpty()).toBe(false);
    });
    (0, globals_1.test)('empty', () => {
        const queue = new queue_1.default();
        (0, globals_1.expect)(queue.isEmpty()).toBe(true);
    });
});
(0, globals_1.describe)('queue: size', () => {
    (0, globals_1.test)('not empty', () => {
        const queue = new queue_1.default();
        queue.enqueue('c');
        (0, globals_1.expect)(queue.size()).toBe(1);
    });
    (0, globals_1.test)('empty', () => {
        const queue = new queue_1.default();
        (0, globals_1.expect)(queue.size()).toBe(0);
    });
});
(0, globals_1.describe)('queue: clear', () => {
    (0, globals_1.test)('clear items', () => {
        const queue = new queue_1.default();
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        queue.clear();
        (0, globals_1.expect)(queue.isEmpty()).toBe(true);
    });
    (0, globals_1.test)('already empty', () => {
        const queue = new queue_1.default();
        queue.clear();
        (0, globals_1.expect)(queue.isEmpty()).toBe(true);
    });
});
