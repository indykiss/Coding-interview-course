// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]

function chunk(array, size) {
  // We want to keep track of the new array
  const arrChunks = [];
  // We want to count through the array
  let indexCount = 0;

  // While we are looking at the entire array 
  while(indexCount < array.length) {
    // We are slicing the last parts of the array 
    // that matches the desired chunk, using the 
    // arr's index. Then adding it to new arr. 
    // Then moving on with our counting.
    arrChunks.push(array.slice(indexCount, indexCount + size));
    indexCount += size;
  }
  return arrChunks
}

chunk([1, 2, 3, 4, 5], 2) 

// --> [[ 1, 2, 3, 4, 5]]

module.exports = chunk;
