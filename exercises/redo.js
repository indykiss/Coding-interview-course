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

// Anagrams
// Check to see if two provided strings are anagrams of each other.
// anagrams('rail safety', 'fairy tales') --> True

// Checking if reversed str = original string 

function anagrams(str1, str2) {
}
