// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Close but not there yet

function anagrams(stringA, stringB) {
  const mapStringA = {};
  const mapStringB = {};

  for(let char of stringA) {
    if (char != " ") {
      if(mapStringA[char]) {
        mapStringA[char]++
      } else {
        mapStringA[char] = 1;
      }
    }
  }

  for(let char of stringB) {
    if (char != " ") {
      if(mapStringB[char]) {
        mapStringB[char]++
      } else {
        mapStringB[char] = 1;
      }
    }
  }

  if (mapStringA == mapStringB) {
    console.log(true) 
  }
    else {
      console.log(false) 
    }

  console.log(mapStringA)
  console.log(mapStringB)


}

// anagrams('Hi there', 'Bye there')
anagrams('rail safety', 'fairy tales')


module.exports = anagrams;
