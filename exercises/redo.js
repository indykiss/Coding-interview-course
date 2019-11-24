// I'm going to redo the algos I've learned so far
// To prep for the tech interview I have tomorrow 

// String reversal
// reverse('apple') === 'leppa'

function reverse(str) {
    return str.split('').reverse().join('');
}

function reverseAlt(str) {
  let newStr = ""

  for(var i = str.length - 1; i >= 0 - 1; i--) {
    newStr += str[i]
  }

  return newStr;
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

function anagrams(str1, str2) {
  return (strMapper(str1) == strMapper(str2));
}

function strMapper(str) {
  // Edge cases
  return str.replace(/[^w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join('')
}

// Fibbonocchi 

function fib(n) {
  // Edge cases 
  if(n == 1 || n == 0) {
    return n;
  }

  // Recursion 
  return fib(n-1) + fib(n-2);
}

// Capitalize
// Cap all the words in the string

function capitalize(str) {
  let arr = []
  // Make str an arr
  // Loop through and capitalize the 1st index of each word 

  let newArr = str.split(' '); 

  for(let ele of newArr) {
    arr.push(ele[0].toUpperCase() + ele.slice(1))
  }
  return arr.join(" ")
}

// capitalize("hi there")

// Max character
// Return character that is used the most in the string 
// maxChar("abcccccccd") === "c"

function maxChar(str) {
  let bigChar = ''; 
  const mapChar = {}; 
  let max = 0;

  for(let ele of str) {
    // If char is already in map, increment
    if(mapChar[ele]) {
      mapChar[ele]++
    } else {
      mapChar[ele] = 1;
    }
  }

  for(let char in mapChar) {
    if(mapChar[char] > max) {
      mapChar[char] = max;
      bigChar = char;
    }
  }

  return bigChar;
}
