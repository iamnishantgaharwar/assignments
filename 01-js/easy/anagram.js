/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

// Remove non-word characters except spaces and convert to lowercase
const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9\s]/g, '');
const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9\s]/g, '');

// Check if the lengths are different
if (cleanStr1.length !== cleanStr2.length) {
  return false;
}

// Sort both strings and compare
const sortedStr1 = cleanStr1.split('').sort().join('');
const sortedStr2 = cleanStr2.split('').sort().join('');

return sortedStr1 === sortedStr2;
}

let a = 0
function ( let i = 0; i < 10; i++) {
    a += 1;
    console.log(a)
}

module.exports = isAnagram;
