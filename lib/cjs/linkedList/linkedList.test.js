"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const linkedList_1 = __importDefault(require("./linkedList"));
(0, globals_1.describe)('Linked List: append', () => {
    const list = new linkedList_1.default();
    (0, globals_1.test)('first item', () => {
        var _a;
        list.append('a');
        (0, globals_1.expect)(list.toString()).toBe('a');
        (0, globals_1.expect)((_a = list.head) === null || _a === void 0 ? void 0 : _a.data).toBe('a');
    });
    (0, globals_1.test)('next item', () => {
        var _a;
        list.append('b');
        (0, globals_1.expect)(list.toString()).toBe('a,b');
        (0, globals_1.expect)((_a = list.head) === null || _a === void 0 ? void 0 : _a.data).toBe('a');
    });
});
(0, globals_1.describe)('Linked List: insert', () => {
    const list = new linkedList_1.default();
    list.append('b');
    list.append('c');
    (0, globals_1.test)('first position', () => {
        var _a;
        list.insert(0, 'a');
        (0, globals_1.expect)(list.toString()).toBe('a,b,c');
        (0, globals_1.expect)((_a = list.head) === null || _a === void 0 ? void 0 : _a.data).toBe('a');
    });
    (0, globals_1.test)('middle position', () => {
        list.insert(1, 'a1');
        (0, globals_1.expect)(list.toString()).toBe('a,a1,b,c');
    });
    (0, globals_1.test)('last position', () => {
        list.insert(4, 'd');
        (0, globals_1.expect)(list.toString()).toBe('a,a1,b,c,d');
    });
});
(0, globals_1.describe)('Linked List: RemoveAt', () => {
    (0, globals_1.test)('first position', () => {
        const list = new linkedList_1.default();
        list.append('a');
        list.append('b');
        list.append('c');
        list.removeAt(0);
        (0, globals_1.expect)(list.toString()).toBe('b,c');
        (0, globals_1.expect)(list.size()).toBe(2);
    });
    (0, globals_1.test)('middle position', () => {
        const list = new linkedList_1.default();
        list.append('a');
        list.append('b');
        list.append('c');
        list.removeAt(1);
        (0, globals_1.expect)(list.toString()).toBe('a,c');
        (0, globals_1.expect)(list.size()).toBe(2);
    });
    (0, globals_1.test)('last position', () => {
        const list = new linkedList_1.default();
        list.append('a');
        list.append('b');
        list.append('c');
        list.removeAt(2);
        (0, globals_1.expect)(list.toString()).toBe('a,b');
        (0, globals_1.expect)(list.size()).toBe(2);
    });
});
(0, globals_1.describe)('Linked List: remove', () => {
    (0, globals_1.test)('Remove: target element', () => {
        const list = new linkedList_1.default();
        list.append('a');
        list.append('b');
        list.append('c');
        list.remove('c');
        (0, globals_1.expect)(list.toString()).toBe('a,b');
        (0, globals_1.expect)(list.size()).toBe(2);
    });
});
(0, globals_1.describe)('Linked List: indexOf', () => {
    const list = new linkedList_1.default();
    list.append('a');
    list.append('b');
    list.append('c');
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
(0, globals_1.describe)('Linked List: size', () => {
    const list = new linkedList_1.default();
    (0, globals_1.test)('size: empty', () => {
        (0, globals_1.expect)(list.size()).toBe(0);
    });
    (0, globals_1.test)('size: not empty', () => {
        list.append('a');
        list.append('b');
        list.append('c');
        (0, globals_1.expect)(list.size()).toBe(3);
    });
});
