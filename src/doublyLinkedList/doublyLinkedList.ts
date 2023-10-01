/** Class representing a doubly linked list data structure. */
export default class DoublyLinkedList {
    head: DoublyLinkedListNode | null = null;
    tail: DoublyLinkedListNode | null = null;
    #length: number = 0;

    /**
     * to insert an element to the specified position in the linked list
     * @param position - position in the linked list
     * @param data - linked list element data
     * @return is inserted
     */
    insert(position: number, data: any): boolean {
        if (position >= 0 && position <= this.#length) {
            let node = new DoublyLinkedListNode(data);
            let current = this.head;
            let previous = null;
            let index = 0;

            if (position === 0) {
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    
                    if (current) {
                        current.prev = node;
                    }
                    this.head = node;
                }
            } else if (position === this.#length) {
                current = this.tail;
                
                if (current) {
                    current.next = node;
                }

                node.prev = current;
                this.tail = node;
            } else {
                while(index++ < position) { 
                    previous = current;

                    if(current) {
                        current = current.next;
                    }
                }
                node.next = current;
                
                if (previous) {
                    previous.next = node;
                }

                if(current) {
                    current.prev = node;
                }

                node.prev = previous;
            }

            this.#length++;
            return true;

        } else {
            return false;
        }
    }

    /**
     * to remove an element by the position
     * @param position - position in the double linked list
     */
    removeAt(position: number): any | null {
        if (position > -1 && position < this.#length) {
            let current = this.head;
            let previous = null;
            let index = 0;

            if (position === 0) {

                this.head = current?.next || null;

                if (this.#length === 1) {
                    this.tail = null;
                } else {
                    if(this.head) {
                        this.head.prev = null;
                    }
                }
            } else if (position === this.#length - 1) {
                current = this.tail;

                if(current) {
                    this.tail = current.prev;
                }

                if (this.tail) {
                    this.tail.next = null;
                }
            } else {
                while (index++ < position) {
                    previous = current;

                    if (current) {
                        current = current.next;
                    }
                }

                // link previous with current's next - skip it
                if (previous) {
                    previous.next = current?.next || null;
                }
                if(current && current.next) {
                    current.next.prev = previous;
                }
            }

            this.#length--;

            return current?.data || null;
        } else {
            return null;
        }
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
    toArray(): DoublyLinkedListNode[] {
        const nodes: DoublyLinkedListNode[] = [];
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
class DoublyLinkedListNode {
    data: any; // how to pass the type on initialization phase?
    next: DoublyLinkedListNode | null;
    prev: DoublyLinkedListNode | null;

    constructor(data: any) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }

    /**
     * to convert linked list node to a string
     */
    toString(): string {
        return `${this.data}`;
    }
}