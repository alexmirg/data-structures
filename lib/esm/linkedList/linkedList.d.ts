/** Class representing a linked list data structure in javascript. */
export default class LinkedList {
    #private;
    head: LinkedListNode | null;
    /**
     * to add an element to the end of the linked list
     * @param {any} data - linked list element data
     */
    append(data: any): void;
    /**
     * to insert an element to the specified position in the linked list
     * @param {number} position - position in the linked list
     * @param {any} data - linked list element data
     * @return {Boolean} is inserted flag
     */
    insert(position: number, data: any): boolean;
    /**
     * to remove an element by the position
     * @param {number} position - position in the linked list
     */
    removeAt(position: number): any | null;
    /**
     * to remove an element from the list
     * @param {any} data - position in the linked list
     */
    remove(data: any): any | null;
    /**
     * to find the element index
     * @param {any} data - element
     * @returns number
     */
    indexOf(data: any): number;
    /**
     * to convert linked list to an array
     */
    toArray(): LinkedListNode[];
    /**
     * to convert linked list to a string
     */
    toString(): string;
    /**
     * to get the linked list size (length)
     */
    size(): number;
}
/** Class representing a linked list node */
declare class LinkedListNode {
    data: any;
    next: LinkedListNode | null;
    constructor(data: any);
    /**
     * to convert linked list node to a string
     */
    toString(): string;
}
export {};
