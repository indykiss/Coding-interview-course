// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const endIndex = (n^2) + 1



// outer square
// first row print 1 -> n


// right edge, n -> (2n - 1)


// bottom row backwards (2n-1) -> (?)


// left edge up (?) -> (??)


// recursion to get the inner square, keep going til 
// all the inner squares are done

}

module.exports = matrix;
