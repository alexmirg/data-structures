"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const doublyLinkedList_1 = __importDefault(require("./doublyLinkedList"));
(0, globals_1.describe)('Doubly Linked List: insert', () => {
    const list = new doublyLinkedList_1.default();
    (0, globals_1.test)('first element', () => {
        var _a;
        list.insert(0, 'a');
        (0, globals_1.expect)(list.toString()).toBe('a');
        (0, globals_1.expect)((_a = list.head) === null || _a === void 0 ? void 0 : _a.data).toBe('a');
    });
    (0, globals_1.test)('next element', () => {
        list.insert(1, 'b');
        (0, globals_1.expect)(list.toString()).toBe('a,b');
    });
});
(0, globals_1.describe)('Doubly Linked List: RemoveAt', () => {
    (0, globals_1.test)('first position', () => {
        const list = new doublyLinkedList_1.default();
        list.insert(0, 'a');
        list.insert(1, 'b');
        list.removeAt(0);
        (0, globals_1.expect)(list.toString()).toBe('b');
        (0, globals_1.expect)(list.size()).toBe(1);
    });
    (0, globals_1.test)('middle position', () => {
        const list = new doublyLinkedList_1.default();
        list.insert(0, 'a');
        list.insert(1, 'b');
        list.insert(2, 'c');
        list.removeAt(1);
        (0, globals_1.expect)(list.toString()).toBe('a,c');
        (0, globals_1.expect)(list.size()).toBe(2);
    });
    (0, globals_1.test)('last position', () => {
        const list = new doublyLinkedList_1.default();
        list.insert(0, 'a');
        list.insert(1, 'b');
        list.insert(2, 'c');
        list.removeAt(2);
        (0, globals_1.expect)(list.toString()).toBe('a,b');
        (0, globals_1.expect)(list.size()).toBe(2);
    });
});
(0, globals_1.describe)('Doubly Linked List: remove', () => {
    (0, globals_1.test)('target element', () => {
        const list = new doublyLinkedList_1.default();
        list.insert(0, 'a');
        list.insert(1, 'b');
        list.insert(2, 'c');
        list.remove('c');
        (0, globals_1.expect)(list.toString()).toBe('a,b');
        (0, globals_1.expect)(list.size()).toBe(2);
    });
});
(0, globals_1.describe)('Doubly Linked List: indexOf', () => {
    const list = new doublyLinkedList_1.default();
    list.insert(0, 'a');
    list.insert(1, 'b');
    list.insert(2, 'c');
    (0, globals_1.test)('indexOf: first element', () => {
        (0, globals_1.expect)(list.indexOf('a')).toBe(0);
    });
    (0, globals_1.test)('indexOf: middle element', () => {
        (0, globals_1.expect)(list.indexOf('b')).toBe(1);
    });
    (0, globals_1.test)('indexOf: last element', () => {
        (0, globals_1.expect)(list.indexOf('c')).toBe(2);
    });
    (0, globals_1.test)('indexOf: not exist element', () => {
        (0, globals_1.expect)(list.indexOf('d')).toBe(-1);
    });
});
(0, globals_1.describe)('Doubly Linked List: size', () => {
    const list = new doublyLinkedList_1.default();
    (0, globals_1.test)('size: empty', () => {
        (0, globals_1.expect)(list.size()).toBe(0);
    });
    (0, globals_1.test)('size: not empty', () => {
        list.insert(0, 'a');
        list.insert(1, 'b');
        list.insert(2, 'c');
        (0, globals_1.expect)(list.size()).toBe(3);
    });
});
