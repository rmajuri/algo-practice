// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* function anagrams(stringA, stringB) {
  65 - 122




} */

/* const anagrams = (stringA, stringB) => {
  const aString = {};
  const bString = {};
  for (let char of stringA) {
    if (/\w/.test(char)) {
      if (!aString.hasOwnProperty(char)) {
        aString[char] = 1;
      } else {
        aString[char]++;
      }
    }
  }
  for (let char of stringB) {
    if (/\w/.test(char)) {
      if (!bString.hasOwnProperty(char)) {
        bString[char] = 1;
      } else {
        bString[char]++;
      }
    }
  }
  if (Object.keys(aString).length !== Object.keys(bString).length) {
    return false;
  } else {
    for (let key in aString) {
      if (!bString.hasOwnProperty(key) || aString[key] !== bString[key]) {
        return false;
      }
    }
  }
  return true;
} */

/* const anagrams = (stringA, stringB) => {
  let firstString = {};
  for (let char of stringA) {
    if (/\w/.test(char)) {
      if (!firstString[char.toLowerCase()]) {
        firstString[char.toLowerCase()] = 1;
      } else {
        firstString[char.toLowerCase()]++;
      }
    }
  }
  for (let char of stringB) {
    const reg = new RegExp(char, 'gi');
    const occurences = stringB.match(reg).length;
    if (/\w/.test(char)) {
      if (!firstString.hasOwnProperty(char.toLowerCase())) {
        return false;
      } else if (occurences !== firstString[char.toLowerCase()]) {
      return false;
      }
    }
  }
  return true;
} */

/* const anagrams = (stringA, stringB) => {
  const a = stringA.toLowerCase().replace(/[^\w]/g, '');
  const b = stringB.toLowerCase().replace(/[^\w]/g, '');
  if (a.length !== b.length) {
    return false;
  }
  for (let char of a) {
    const reg = new RegExp(char, 'gi');
    if (!b.includes(char) || stringA.match(reg).length !== stringB.match(reg).length) {
      return false;
    }
  }
  return true;
} */

const anagrams = (stringA, stringB) => {
  const cleanString = str => {
    return str
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  };
  return cleanString(stringA) === cleanString(stringB);
};

/* const anagrams = (stringA, stringB) => {

  const buildMap = str => {
    const charMap = {};
    for (let char of str.toLowerCase().replace(/[^\w]/g, '')) {
      !charMap.hasOwnProperty(char) ? charMap[char] = 1 : charMap[char]++;
    }
    return charMap;
  }

  const mapA = buildMap(stringA);
  const mapB = buildMap(stringB);

  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  for (let aChar in mapA) {
    if (!mapB.hasOwnProperty(aChar) || mapB[aChar] !== mapA[aChar]) {
      return false;
    }
  }

  return true;
} */

module.exports = anagrams;
