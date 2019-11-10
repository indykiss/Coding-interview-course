// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// This is an exponential runtime. 
// For every increase in n, there will be a sharp increase in the function calls.

function fib(n) {
// If n is 0 or 1, then return n. 
    if(n == 0 || n == 1) {
        return n;
    }
// Add the last one, and the one that's 2 before
    return(fib(n-1) + fib(n-2));
}


// To improve the runtime, we can use consolidate the function calls that 
// have the same arguments. Stores the similar function calls, with the results 
// So instead of function the function, we can just return the saved result
// Memoization! 

// I am a generic memoization function that can be repeated anywhere
function memoizer(fn) {
    const cache = {};

// Take the slow function and return a fast function
// Put in all the possible args, to make this abstract
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        } 

// .apply just is like, take the current obj and the args
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
    };
}

// we memoize over fib, better than renaming
const fib = memoizer(fib);

fib(50)


module.exports = fib;
