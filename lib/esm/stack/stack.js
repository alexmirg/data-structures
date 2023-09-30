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
var _Stack_items;
/** Class representing a stack data structure in javascript. */
class Stack {
    constructor() {
        _Stack_items.set(this, []);
    }
    /**
     * add an element to the end of the stack
     * @param {any} element - stack element
     */
    push(element) {
        __classPrivateFieldGet(this, _Stack_items, "f").push(element);
    }
    /**
     * remove the last element
     */
    pop() {
        return __classPrivateFieldGet(this, _Stack_items, "f").pop() || null;
    }
    /**
     * get the last element
     * @returns the last element or null
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return __classPrivateFieldGet(this, _Stack_items, "f")[__classPrivateFieldGet(this, _Stack_items, "f").length - 1];
    }
    /**
     * check is the stack empty or not
     * @return true/false
     */
    isEmpty() {
        return this.size() === 0;
    }
    /**
     * get the stack size (length)
     */
    size() {
        return __classPrivateFieldGet(this, _Stack_items, "f").length;
    }
    /**
     * remove all stack items
     */
    clear() {
        __classPrivateFieldSet(this, _Stack_items, [], "f");
    }
    /**
     * log all stack items as a string in console (for dev proposes)
     */
    print() {
        console.log(__classPrivateFieldGet(this, _Stack_items, "f").toString());
    }
}
_Stack_items = new WeakMap();
export default Stack;
