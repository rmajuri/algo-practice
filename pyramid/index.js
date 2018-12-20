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
//       ' ### ' 1/3
//       '#####' 0/4

// function pyramid(n) {
//   const oddNums = []
//   let odd = 1
//   for (let i = 0; i < n; i++) {
//     oddNums.push(odd)
//     odd += 2
//   }

//   function printPyramid(levelsArr, levelStr = '') {
//     if (!levelsArr.length) {
//         return 
//     }
    
//     if (!levelStr.length) {
//       levelStr = '#'.repeat(levelsArr[0])
//       return printPyramid(levelsArr, levelStr)
//     }

//     if (levelStr.length < levelsArr[levelsArr.length - 1]) {
//       levelStr = ' ' + levelStr + ' '
//       printPyramid(levelsArr, levelStr)
//     } else {
//       console.log(levelStr)
//       return printPyramid(levelsArr.slice(1))
//     }
//   }
function pyramid(n, row = 0, column = 0, levelStr = '') {
  const midpoint = Math.floor((2 * n - 1) / 2)
  const levelLength = ((2 * n) - 1)

  if (row === n) {
    return 
  }

  if (levelStr.length === levelLength) {
    console.log(levelStr)
    return pyramid(n, ++row)
  }

  if (levelStr.length < levelLength) {
    const char = midpoint - row <= column && midpoint + row >= column ? '#' : ' '
    levelStr += char
    return pyramid(n, row, ++column, levelStr)
  }
}

module.exports = pyramid;
