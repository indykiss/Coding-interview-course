// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Much better!!!
function anagrams(stringA, stringB) {
   return anagramMapHelper(stringA) === anagramMapHelper(stringB)
}

function anagramMapHelper(str) {
  return str.replace(/[^\w]/g, "")
  .toLowerCase()
  .split('')
  .sort()
  .join('');
}

// anagrams('Hi there', 'Bye there')
anagrams('rail safety', 'fairy tal!!es')



// Lots of iteration! Less good option of solution.

// function anagrams(stringA, stringB) {
//   const aCharMap = anagramMapHelper(stringA);
//   const bCharMap = anagramMapHelper(stringB);  

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for(let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function anagramMapHelper(str) {
//   const charMap = {};

//   for(let char of str.replace(/[^/w]/g, "").toLowerCase()) { charMap = charMap[char] + 1 || 1; }
//   return charMap
// }

// anagrams('rail safety', 'fairy talessssss')



module.exports = anagrams;
