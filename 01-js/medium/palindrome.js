/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let lowerCase = str.toLowerCase()
    let filterStr = lowerCase.replace(/[^a-z0-9]/g, '');
    let strArray = filterStr.split('')
    let strReverse = strArray.reverse().join('');
    if (filterStr === strReverse){
      return true
    }
  return false
}
isPalindrome("DID")
module.exports = isPalindrome;
