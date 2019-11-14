// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// Rn: Can't iterate through queues or stacks
// That's why we build a "peek" method

// Make a queue (first in, first out) 
// when given a stack (last in, first out)
// Need to make two stacks to make a queue
// Move things from stack A to B, then back

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    add(record) {
    // Now we have all the records in the first box
        this.stackA.push(record);
    }

    remove() {
    // Now we want to add that first in, first out bit
    // As long as there's still something in the 1st stack
    // We push it into the second stack
        while(this.stackA.peek()) {
            const record =  this.stackA.pop();
            this.stackB.push(record);
        }
        const finalRecord = this.stackB.pop();

        while(this.stackB.peek()) {
            const record = this.stackB.pop();
            this.stackA.push(record);
        }
        return finalRecord;
    }

    peek() {
        // Move everything from stack A to stack B
        while(this.stackA.peek()) {
            const record =  this.stackA.pop();
            this.stackB.push(record);
        }
        const finalRecord = this.stackB.peek();

        // Move everything from stack B back into stack A
        while(this.stackB.peek()) {
            const record = this.stackB.pop();
            this.stackA.push(record);
        }
        return finalRecord;
    }
}

module.exports = Queue;
