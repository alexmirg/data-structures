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
var _Queue_items;
Object.defineProperty(exports, "__esModule", { value: true });
/** Class representing the simple queue data structure in javascript. */
class Queue {
    constructor() {
        _Queue_items.set(this, []);
    }
    /**
     * add an element to the queue
     * @param element - queue element
     */
    enqueue(element) {
        __classPrivateFieldGet(this, _Queue_items, "f").push(element);
    }
    /**
     * remove the element from the queue
     * @return if success item else null
     */
    dequeue() {
        if (this.size() === 0) {
            return null;
        }
        return __classPrivateFieldGet(this, _Queue_items, "f").shift();
    }
    /**
     * get the first queue element
     * @returns first queue element or null
     */
    front() {
        return __classPrivateFieldGet(this, _Queue_items, "f")[0] || null;
    }
    /**
     * check is the queue empty
     * @return true/false
     */
    isEmpty() {
        return this.size() === 0;
    }
    /**
     * get the queue length
     */
    size() {
        return __classPrivateFieldGet(this, _Queue_items, "f").length;
    }
    /**
     * remove all queue items
     */
    clear() {
        __classPrivateFieldSet(this, _Queue_items, [], "f");
    }
}
_Queue_items = new WeakMap();
exports.default = Queue;
