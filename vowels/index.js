// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   const vowelCol = ['a', 'e', 'i', 'o', 'u']
//   const toLower = str.toLowerCase().split('')
//   let count = 0
//   toLower.forEach(char => {
//     if (vowelCol.includes(char)) {
//       count += 1
//     }
//   })
//   return count
// }

// function vowels(str) {
//   const vowelCol = ['a', 'e', 'i', 'o', 'u']
//   return str.toLowerCase()
//     .split('')
//     .filter(char => vowelCol.includes(char))
//     .length
// }
function vowels(str) {
  const vowelCount = str.match(/[aeiou]/gi)
  return vowelCount ? vowelCount.length : 0
}

module.exports = vowels;
