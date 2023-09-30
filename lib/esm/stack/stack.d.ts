/** Class representing a stack data structure in javascript. */
export default class Stack {
    #private;
    /**
     * add an element to the end of the stack
     * @param {any} element - stack element
     */
    push(element: any): void;
    /**
     * remove the last element
     */
    pop(): any | null;
    /**
     * get the last element
     * @returns the last element or null
     */
    peek(): any | null;
    /**
     * check is the stack empty or not
     * @return true/false
     */
    isEmpty(): boolean;
    /**
     * get the stack size (length)
     */
    size(): number;
    /**
     * remove all stack items
     */
    clear(): void;
    /**
     * log all stack items as a string in console (for dev proposes)
     */
    print(): void;
}
