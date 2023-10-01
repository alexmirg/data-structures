/** Class representing a doubly linked list data structure. */
export default class DoublyLinkedList {
    #private;
    head: DoublyLinkedListNode | null;
    tail: DoublyLinkedListNode | null;
    /**
     * to insert an element to the specified position in the linked list
     * @param position - position in the linked list
     * @param data - linked list element data
     * @return is inserted
     */
    insert(position: number, data: any): boolean;
    /**
     * to remove an element by the position
     * @param position - position in the double linked list
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
    toArray(): DoublyLinkedListNode[];
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
declare class DoublyLinkedListNode {
    data: any;
    next: DoublyLinkedListNode | null;
    prev: DoublyLinkedListNode | null;
    constructor(data: any);
    /**
     * to convert linked list node to a string
     */
    toString(): string;
}
export {};
