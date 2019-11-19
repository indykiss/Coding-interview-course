// I'm going to redo the algos I've learned so far
// To prep for the tech interview I have tomorrow 

// String reversal
// reverse('apple') === 'leppa'

function reverse(str) {
    return str.split('').reverse().join('');
}

// Integer reversal

function reverseInt(int) {
    // Make int into a str, then do the above. 
    let numToStr = int.toString().split('').reverse().join('');
  
    // Convert back to number
    let newNum = parseFloat(numToStr);
  
    // Edge case: negative numbers 
    return newNum * Math.sign(int);
  }