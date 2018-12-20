// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* function maxChar(str) {
  
} */

/* const maxChar = str => {
  let count = 0;
  let maxUsedChar = '';
  for (let char of str) {
    const reg = new RegExp(char, 'gi');
    const timesUsed = str.match(reg).length;
    if (timesUsed > count) {
      count = timesUsed;
      maxUsedChar = char;
    }
  }
  return maxUsedChar;
} */

/* const maxChar = str => {
  let counts = {};
  for (let char of str) {
    if (counts.hasOwnProperty(char)) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  const keys = Object.keys(counts);
  return keys.reduce((mostUsed, char, i) => {
    if (i === 0) {
        mostUsed = char;
    } else if (counts[char] > counts[mostUsed]) {
      mostUsed = char;
    }
    return mostUsed;
  });
} */


const maxChar = str => {
    const counts = {};
    for (let char of str) {
      counts[char] = counts[char] + 1 || 1;
    }
    const keys = Object.keys(counts);
    return keys.reduce((mostUsed, char) => {
      if (counts[char] > counts[mostUsed]) {
        mostUsed = char;
      }
      return mostUsed;
    });
  }



module.exports = maxChar;
