"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _DoublyLinkedList_length;
Object.defineProperty(exports, "__esModule", { value: true });
/** Class representing a doubly linked list data structure. */
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        _DoublyLinkedList_length.set(this, 0);
    }
    /**
     * to insert an element to the specified position in the linked list
     * @param position - position in the linked list
     * @param data - linked list element data
     * @return is inserted
     */
    insert(position, data) {
        var _a;
        if (position >= 0 && position <= __classPrivateFieldGet(this, _DoublyLinkedList_length, "f")) {
            let node = new DoublyLinkedListNode(data);
            let current = this.head;
            let previous = null;
            let index = 0;
            if (position === 0) {
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                }
                else {
                    node.next = current;
                    if (current) {
                        current.prev = node;
                    }
                    this.head = node;
                }
            }
            else if (position === __classPrivateFieldGet(this, _DoublyLinkedList_length, "f")) {
                current = this.tail;
                if (current) {
                    current.next = node;
                }
                node.prev = current;
                this.tail = node;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    if (current) {
                        current = current.next;
                    }
                }
                node.next = current;
                if (previous) {
                    previous.next = node;
                }
                if (current) {
                    current.prev = node;
                }
                node.prev = previous;
            }
            __classPrivateFieldSet(this, _DoublyLinkedList_length, (_a = __classPrivateFieldGet(this, _DoublyLinkedList_length, "f"), _a++, _a), "f");
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * to remove an element by the position
     * @param position - position in the double linked list
     */
    removeAt(position) {
        var _a;
        if (position > -1 && position < __classPrivateFieldGet(this, _DoublyLinkedList_length, "f")) {
            let current = this.head;
            let previous = null;
            let index = 0;
            if (position === 0) {
                this.head = (current === null || current === void 0 ? void 0 : current.next) || null;
                if (__classPrivateFieldGet(this, _DoublyLinkedList_length, "f") === 1) {
                    this.tail = null;
                }
                else {
                    if (this.head) {
                        this.head.prev = null;
                    }
                }
            }
            else if (position === __classPrivateFieldGet(this, _DoublyLinkedList_length, "f") - 1) {
                current = this.tail;
                if (current) {
                    this.tail = current.prev;
                }
                if (this.tail) {
                    this.tail.next = null;
                }
            }
            else {
                while (index++ < position) {
                    previous = current;
                    if (current) {
                        current = current.next;
                    }
                }
                // link previous with current's next - skip it
                if (previous) {
                    previous.next = (current === null || current === void 0 ? void 0 : current.next) || null;
                }
                if (current && current.next) {
                    current.next.prev = previous;
                }
            }
            __classPrivateFieldSet(this, _DoublyLinkedList_length, (_a = __classPrivateFieldGet(this, _DoublyLinkedList_length, "f"), _a--, _a), "f");
            return (current === null || current === void 0 ? void 0 : current.data) || null;
        }
        else {
            return null;
        }
    }
    /**
     * to remove an element from the list
     * @param {any} data - position in the linked list
     */
    remove(data) {
        let index = this.indexOf(data);
        return this.removeAt(index);
    }
    /**
     * to find the element index
     * @param {any} data - element
     * @returns number
     */
    indexOf(data) {
        let current = this.head;
        let index = -1;
        while (current) {
            if (data === current.data) {
                return ++index;
            }
            ++index;
            current = current.next;
        }
        return -1;
    }
    /**
     * to convert linked list to an array
     */
    toArray() {
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    /**
     * to convert linked list to a string
     */
    toString() {
        return this
            .toArray()
            .map((node) => node.toString())
            .toString();
    }
    /**
     * to get the linked list size (length)
     */
    size() {
        return __classPrivateFieldGet(this, _DoublyLinkedList_length, "f");
    }
}
_DoublyLinkedList_length = new WeakMap();
exports.default = DoublyLinkedList;
/** Class representing a linked list node */
class DoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    /**
     * to convert linked list node to a string
     */
    toString() {
        return `${this.data}`;
    }
}
