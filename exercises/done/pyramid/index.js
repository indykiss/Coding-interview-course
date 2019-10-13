// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
    const midPoint = Math.floor((2 * n - 1)/2)
    let add;
  
  // base action
    if(n === row) {
      return;
    }
  
  // when to stop?
    if( (2 * n) - 1 === stair.length) {
      console.log("'" + stair + "'");
      return pyramid(n, row + 1, '')
    }
  
  // make the content of the stair
    if(midPoint - row <= stair.length && midPoint + row >= stair.length) { 
      add = '#'
      } else {
       add = ' '
      }
  
  pyramid(n, row, stair + add)
  
}
  
pyramid(3)

module.exports = pyramid;
