/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxNumber = numbers[0];
    if ( numbers.length == 0 ) {
        return ;
    }
    for ( let i = 1; i < numbers.length; i++ ) {
        if ( maxNumber < numbers[i] ) {
            maxNumber = numbers[i];
        } 
    }
    return maxNumber
}
findLargestElement([3, 7, 2, 9, 1])


module.exports = findLargestElement;