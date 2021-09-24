/**
 * * FizzBuzz
 * *
 * * Write a function that takes a number
 * 
 * If the number is divisible by 3, return "FIZZ"
 * If the number is divisible by 5, return "BUZZ"
 * If the number is divisible by both 3 and 5, return "FIZZBUZZ"
 * Otherwise, return null;
 * 
 */

function fizzBuzz(number) {
    returnString = '';
    if (number % 3 === 0) {
        returnString += 'FIZZ';
    }
    return returnString;
}

// formalization of the below process
console.log('3 should return FIZZ: ', fizzBuzz(3));
console.log('36 should return FIZZ: ', fizzBuzz(36));