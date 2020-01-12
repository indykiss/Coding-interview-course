// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
// Count the number of nums in each level. Push count in arr
    // Breadth 1st search 

function levelWidth(root) {

    // Make a counter arr and arr that has the children
        // start with root and a placeholder, s
    const counters = [0];
    const arr = [root, "s"];

    // Loop through tree until there's only placeholder left
    while(arr.length > 1) {
        // Pull off 1st working element
        const node =  arr.shift();
        // If we've reached end of row, to placeholder
        if(node === 's') {
            // K get a new element into counters and 
            // move S back at end of arr to keep being placeholder
            counters.push(0);
            arr.push('s')
        // If we're working with an actual node, we want to 
        // look at its children next AND 
        // increment last value in counters and increment by 1
        } else {
            arr.push(...node.children);
            counters[counters.length -1]++;
        }
    }
    return counters;
}


module.exports = levelWidth;
