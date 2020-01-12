// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// Assumption: Binary tree. Perfect, 2 nodes for each parent
// Edge: No root
// Depth- first traversal 

// Iterative solution
function validateIterative(node, min = null, max = null) {

// Start at root. Make fake lower and upper bounds
// Make a variable to keep track of each node & bounds
const nodeWithBounds = []; 
nodeWithBounds.push({
    node: node, 
    min: Number.NEGATIVE_INFINITY,
    max: Number.POSITIVE_INFINITY
})

// DFS
while(nodeWithBounds.length) {
    // Check that the node is valid to continue on 
    const{node, min, max} = nodeWithBounds.pop();

    if(node.data <= min || node.data >= max) {
        return false;
    }
    
    // If left, must be smaller than parent/ current node
    if(node.left) {
        nodeWithBounds.push({
            node: node.left, 
            min, 
            max: node.data
        })
    }

    // If right, must be bigger 
    if(node.right) {
        nodeWithBounds.push({
            node: node.left, 
            min: node.data, 
            max
        })
    }
}
// If all tests pass, then return true
    return true;
}
// O(n) time. O(n) space. 



// Recursive function
function validate(node, min = null, max = null) {

    // If node is not within bounds, return false 
    if(node.data <= min && min !== null) {
        return false;
    }
    if(node.data >= max && max !== null) {
        return false;
    }

    // recursion: reassigning bounds based on the parent nodes
        // data and we're looking at left or right 
    // left exists BUT left child doesnt validate
    if(node.left && !validate(node.left, min, node.data)) {
        return false;
    }
    // right exists BUT right child doesnt validate
    if(node.right && !validate(node.right, node.data, max)) {
        return false;
    }
    
    // We've passed the tests, so all true
    return true;
}


module.exports = validate;
