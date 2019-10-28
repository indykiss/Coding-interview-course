// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let counter = 0;

    for(let char of str) {
        if(vowel.includes(char)) {
            counter++
        } 
    }
    return counter;
}


// Much simpler RegEx version exists
// function vowels(str) {

// // g means we dont stop at the first match
//     const matches = str.match(/[aeiouAEIOU]/g);

//     return matches.length
// }



module.exports = vowels;
