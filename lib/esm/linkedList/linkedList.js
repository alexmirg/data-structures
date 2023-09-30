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
var _LinkedList_length;
/** Class representing a linked list data structure in javascript. */
class LinkedList {
    constructor() {
        this.head = null;
        _LinkedList_length.set(this, 0);
    }
    /**
     * to add an element to the end of the linked list
     * @param {any} data - linked list element data
     */
    append(data) {
        var _a;
        const node = new LinkedListNode(data);
        let current;
        if (!this.head) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        __classPrivateFieldSet(this, _LinkedList_length, (_a = __classPrivateFieldGet(this, _LinkedList_length, "f"), _a++, _a), "f");
    }
    /**
     * to insert an element to the specified position in the linked list
     * @param {number} position - position in the linked list
     * @param {any} data - linked list element data
     * @return {Boolean} is inserted flag
     */
    insert(position, data) {
        var _a;
        if (position < 0 && position > __classPrivateFieldGet(this, _LinkedList_length, "f")) {
            return false;
        }
        let node = new LinkedListNode(data);
        let index = 0;
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let current = this.head;
            let previous;
            while (index++ < position) {
                previous = current;
                current = (current === null || current === void 0 ? void 0 : current.next) || null;
            }
            node.next = current;
            if (previous) {
                previous.next = node;
            }
        }
        __classPrivateFieldSet(this, _LinkedList_length, (_a = __classPrivateFieldGet(this, _LinkedList_length, "f"), _a++, _a), "f");
        return true;
    }
    /**
     * to remove an element by the position
     * @param {number} position - position in the linked list
     */
    removeAt(position) {
        var _a;
        if (position === -1 && position > __classPrivateFieldGet(this, _LinkedList_length, "f")) {
            return null;
        }
        let current = this.head;
        if (position === 0) {
            this.head = (current === null || current === void 0 ? void 0 : current.next) || null;
        }
        else {
            let index = 0;
            let previous;
            while (index++ < position) {
                previous = current;
                current = (current === null || current === void 0 ? void 0 : current.next) || null;
            }
            if (previous) {
                previous.next = (current === null || current === void 0 ? void 0 : current.next) || null;
            }
        }
        __classPrivateFieldSet(this, _LinkedList_length, (_a = __classPrivateFieldGet(this, _LinkedList_length, "f"), _a--, _a), "f");
        return (current === null || current === void 0 ? void 0 : current.data) || null;
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
        return __classPrivateFieldGet(this, _LinkedList_length, "f");
    }
}
_LinkedList_length = new WeakMap();
export default LinkedList;
/** Class representing a linked list node */
class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    /**
     * to convert linked list node to a string
     */
    toString() {
        return `${this.data}`;
    }
}
