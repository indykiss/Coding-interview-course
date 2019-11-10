// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;


// A data structure is a way to organiza data such that
// we can optimize run time complexity 
// One example of a data structure is a Queue
// Essentially a watered down array with first-in, first-out functionality
// Queues can be better than arrays bc performance could be better

// 1. Make an iniatizing constructor

class Queue {
    constructor() {
        this.arr = [];
    }

    add(record) {
        this.arr.unshift(record);
    }

    remove(record) {
        return this.arr.pop(record);
    }

}

module.exports = Queue;
