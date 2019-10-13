// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// We're going to use the recursive solution
// We add a second argument for keeping track of the row we're on.
// Third argument is looking at the content in each row (the stair)

function steps(n, row = 0, stair = "") {

// Therefore, we need a base case, when we reach 0.
  if(n === row) {
    return;
  }

// The action. We are hitting the end of the row
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

// We are assembling a stair string row
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
// Call again with changed argument to get the space in the "stair"
  steps(n, row, stair);

}


steps(4);


module.exports = steps;
