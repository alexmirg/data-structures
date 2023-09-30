import { describe, expect, test } from '@jest/globals';
import LinkedList from './linkedList';
describe('Linked List: append', () => {
    const list = new LinkedList();
    test('first item', () => {
        var _a;
        list.append('a');
        expect(list.toString()).toBe('a');
        expect((_a = list.head) === null || _a === void 0 ? void 0 : _a.data).toBe('a');
    });
    test('next item', () => {
        var _a;
        list.append('b');
        expect(list.toString()).toBe('a,b');
        expect((_a = list.head) === null || _a === void 0 ? void 0 : _a.data).toBe('a');
    });
});
describe('Linked List: insert', () => {
    const list = new LinkedList();
    list.append('b');
    list.append('c');
    test('first position', () => {
        var _a;
        list.insert(0, 'a');
        expect(list.toString()).toBe('a,b,c');
        expect((_a = list.head) === null || _a === void 0 ? void 0 : _a.data).toBe('a');
    });
    test('middle position', () => {
        list.insert(1, 'a1');
        expect(list.toString()).toBe('a,a1,b,c');
    });
    test('last position', () => {
        list.insert(4, 'd');
        expect(list.toString()).toBe('a,a1,b,c,d');
    });
});
describe('Linked List: RemoveAt', () => {
    test('first position', () => {
        const list = new LinkedList();
        list.append('a');
        list.append('b');
        list.append('c');
        list.removeAt(0);
        expect(list.toString()).toBe('b,c');
        expect(list.size()).toBe(2);
    });
    test('middle position', () => {
        const list = new LinkedList();
        list.append('a');
        list.append('b');
        list.append('c');
        list.removeAt(1);
        expect(list.toString()).toBe('a,c');
        expect(list.size()).toBe(2);
    });
    test('last position', () => {
        const list = new LinkedList();
        list.append('a');
        list.append('b');
        list.append('c');
        list.removeAt(2);
        expect(list.toString()).toBe('a,b');
        expect(list.size()).toBe(2);
    });
});
describe('Linked List: remove', () => {
    test('Remove: target element', () => {
        const list = new LinkedList();
        list.append('a');
        list.append('b');
        list.append('c');
        list.remove('c');
        expect(list.toString()).toBe('a,b');
        expect(list.size()).toBe(2);
    });
});
describe('Linked List: indexOf', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
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
describe('Linked List: size', () => {
    const list = new LinkedList();
    test('size: empty', () => {
        expect(list.size()).toBe(0);
    });
    test('size: not empty', () => {
        list.append('a');
        list.append('b');
        list.append('c');
        expect(list.size()).toBe(3);
    });
});
