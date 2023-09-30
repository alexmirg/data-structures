/** Class representing a stack data structure in javascript. */
export default class Stack {
    #items: any[] = [];
    
    /**
     * add an element to the end of the stack
     * @param {any} element - stack element
     */
    push(element: any) {
        this.#items.push(element);
    }

    /**
     * remove the last element
     */
    pop(): any | null {
        return this.#items.pop() || null;
    }

    /**
     * get the last element
     * @returns the last element or null
     */
    peek(): any | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.#items[this.#items.length - 1];
    }

    /**
     * check is the stack empty or not
     * @return true/false
     */
    isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * get the stack size (length)
     */
    size(): number {
        return this.#items.length;
    }

    /**
     * remove all stack items
     */
    clear() {
        this.#items = [];
    }

    /**
     * log all stack items as a string in console (for dev proposes)
     */
    print() {
        console.log(this.#items.toString());
    }
}