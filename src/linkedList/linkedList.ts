/** Class representing a linked list data structure in javascript. */
export default class LinkedList {
    head: LinkedListNode | null = null;
    #length: number = 0;

    /**
     * to add an element to the end of the linked list
     * @param {any} data - linked list element data
     */
    append(data: any) { // how to pass the type on initialization phase?
        const node: LinkedListNode = new LinkedListNode(data);
        let current: LinkedListNode;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.#length++;
    }

    /**
     * to insert an element to the specified position in the linked list
     * @param {number} position - position in the linked list
     * @param {any} data - linked list element data
     * @return {Boolean} is inserted flag
     */
    insert(position: number, data: any): boolean {
        if (position < 0 && position > this.#length) {
            return false;
        }

        let node = new LinkedListNode(data);
        let index: number = 0;
        
        if (position === 0) {
            node.next = this.head;
            this.head = node;

        } else {
            let current = this.head;
            let previous;

            while (index++ < position) {
                previous = current;

                current = current?.next || null;
            }

            node.next = current;
            previous.next = node;
        }

        this.#length++;

        return true;
    }

    /**
     * to remove an element by the position
     * @param {number} position - position in the linked list
     */
    removeAt(position: number): any | null {
        if (position === -1 && position > this.#length) {
            return null;
        }

        let current = this.head;

        if (position === 0) {
            this.head = current?.next || null;
        } else {
            let index = 0;
            let previous;

            while (index++ < position) {
                previous = current;
                current = current?.next || null;
            }

            previous.next = current?.next || null;
        }

        this.#length--;

        return current?.data || null;
    }

    /**
     * to remove an element from the list
     * @param {any} data - position in the linked list
     */
    remove(data: any): any | null  {
        let index = this.indexOf(data);

        return this.removeAt(index);
    }

    /**
     * to find the element index
     * @param {any} data - element
     * @returns number
     */
    indexOf(data: any): number {
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
    toArray(): LinkedListNode[] {
        const nodes: LinkedListNode[] = [];
        let currentNode = this.head;

        while(currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    /**
     * to convert linked list to a string
     */
    toString(): string {
        return this
            .toArray()
            .map((node) => node.toString())
            .toString();
    }

    /**
     * to get the linked list size (length)
     */
    size(): number {
        return this.#length;
    }
}

/** Class representing a linked list node */
class LinkedListNode {
    data: any; // how to pass the type on initialization phase?
    next: LinkedListNode | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }

    /**
     * to convert linked list node to a string
     */
    toString(): string {
        return `${this.data}`;
    }
}