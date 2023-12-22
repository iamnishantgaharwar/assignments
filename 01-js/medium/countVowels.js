/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let lowercase = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
    let gotVowel = lowercase.split('').filter((char) => (vowels.includes(char)))
    return gotVowel.length;
}
console.log(countVowels("HEllo"));
module.exports = countVowels;

