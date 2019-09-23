// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  
// Use for…of to iterate over the values in an iterable, like an array or a string. 
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    }
      else {
        charMap[char] = 1;
      }
  }

// Use for…in to iterate over the properties of an object (the object keys). For..in also works for strings/ arrays, I think
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
return maxChar;
}

maxChar("aabc")

module.exports = maxChar;
