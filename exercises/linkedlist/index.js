// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document


// A linked list is an ordered collection of data. 
// The collection contains a number of nodes. 
// Each node has data and a reference to the next node. 
// A handful of each nodes are called a linked list/ chain of nodes. 
// First node is a head node
// Last node is a tail node, 
    // w/o reference to next node, bc there are no next node. 
    // we call it null by default

// Simple node is like this:
// const nodeOne = {data: 123}
// const nodeTwo = {data: 456}
// Reference!! nodeOne.next = nodeTwo

class FuckThis {
    constructor(cant, doThis) {
        console.log("I'm stopping linked lists bc confused")
    }
}

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // adding a node to front of linked list
    insertFirst(data) {
        // make a new node thats connected to the head node/ past node
        const node = new Node(data, this.head);
        // make this node the new "head" node/ past node
        this.head = node;
    }

    // Counts the number of nodes
    size(nodes) {
        let counter = 0;
        let node = this.head 

        // if there is a "head" node, then it will counter++
        // then continue to next node
        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head

        if(!node) {
            return null;
        }

        while(node) {
            if(!node.next) {
                return node;
            }
            node = node.next; 
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) {
            return null;
        }
        this.head = this.head.next;
    }

    removeLast() {
        let previous = this.head;
        let node = this.head.next;
        // edge cases; if is empty or if theres only 1 node

        if(!this.head) {
            return null;
        }

        if(this.head.next = null) {
            this.head = null;
        }

    // As we iterate, find the node that's next is null
        while(node.next) {
            previous = node; 
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        // Let's get the last node 
        const last = this.getLast();
        // If there is a last node, let's make a new 
        // node and push it to the end
        if (last) {
            last.next = new Node(data); 
        } else {
            this.head = new Node(data)
        }
    }

    getAt(index) {
        // Returns the node at a particular index. Start at head, make a counter, go through until
        // Counter = index, then return that node 
        let counter = 0; 
        let node = this.head;

        // Edge case, no nodes
        if(!this.head) {
            return null;
        }
        // If node exists, then we check if counter === index
        // If not, then increment node.
        // Edge: if index > total # of nodes, then we say null
        while(node) {
            if(counter === index) {
                return node;
            } 

            counter++;
            node = node.next;
        }
        return null;
    }



}

module.exports = { Node, LinkedList };
