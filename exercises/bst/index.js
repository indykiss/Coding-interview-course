// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if(data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if(data > this.data) {
            this.right = new Node(data);
        }
    }

    contains(data) {
        // BST so basically just need to check if value 
            // is > or < than node. If <, go left, if 
            // >, go right
        // if found it, then done
        if(this.data === data) {
            return this; // returns entire node
        }   
        
        // go left, as long as left exists
        if(data < this.data && this.left) {
            return this.left.contains(data);
        } // go right, as long as right exists
        else if(data > this.data && this.right) {
            return this.right.contains(data);
        }

        // if tree doesnt contain value 
        return null;
    }
}

module.exports = Node;
