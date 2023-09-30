/** Class representing the simple queue data structure in javascript. */
export default class Queue {
    #private;
    /**
     * add an element to the queue
     * @param element - queue element
     */
    enqueue(element: any): void;
    /**
     * remove the element from the queue
     * @return if success item else null
     */
    dequeue(): any | null;
    /**
     * get the first queue element
     * @returns first queue element or null
     */
    front(): any | null;
    /**
     * check is the queue empty
     * @return true/false
     */
    isEmpty(): boolean;
    /**
     * get the queue length
     */
    size(): number;
    /**
     * remove all queue items
     */
    clear(): void;
}
