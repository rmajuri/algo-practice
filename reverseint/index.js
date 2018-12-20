// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/* function reverseInt(n) {

} */

/* const reverseInt = n => {
  const revString = n.toString(10).split('').reverse().join('');
  return n < 0 ?  Number.parseInt(`${'-' + revString}`, 10) : Number.parseInt(revString, 10);
}
 */

const reverseInt = n => {
  const revString = n.toString(10).split('').reverse().join('');
  return parseInt(revString, 10) * Math.sign(n);
}

/* const reverseInt = n => {
  let revString = n.toString(10).split('').reverse().join('');
  if (n < 0) {
    revString = '-' + revString;
  }
  return Number.parseInt(revString, 10);
} */


module.exports = reverseInt;
