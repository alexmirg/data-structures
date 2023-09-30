/** Class representing the simple queue data structure in javascript. */
export default class Queue {
    #items: any[] = [];

    /**
     * add an element to the queue
     * @param element - queue element
     */
    enqueue(element: any) {
        this.#items.push(element);
    }

    /**
     * remove the element from the queue
     * @return if success item else null
     */
    dequeue(): any | null {
        if (this.size() === 0) {
            return null;
        }

        return this.#items.shift();
    }

    /**
     * get the first queue element
     * @returns first queue element or null
     */
    front(): any | null {
        return this.#items[0] || null;
    }

    /**
     * check is the queue empty
     * @return true/false
     */
    isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * get the queue length
     */
    size(): number {
        return this.#items.length;
    }

    /**
     * remove all queue items
     */
    clear() {
        this.#items = [];
    }
}