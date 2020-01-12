// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    // Add a node
    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    // Given data, remove the node that has this data
    remove(data) {
        // Filtering out the nodes that don't have data
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }

}

// When whiteboarding, draw it out! 
class Tree {
    constructor() {
        this.root = null;
    }

    // These funcs just look through the tree in BF or DF
        // so it's just the basic mechanism of looking
    traverseBF(fn) {
        const arr = [this.root];
        while(arr.length) {
            const node = arr.shift();
            // Main difference is how we're looking @ data
            // We push children into the END of arr
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        const arr = [this.root]
        while(arr.length) {
            const node = arr.shift();
            // Main difference is how we're looking @ data
            // We push children into the START of arr
            arr.unshift(...node.children);
                // spread = O(n) time
            fn(node);
        }
    }
}




module.exports = { Tree, Node };
