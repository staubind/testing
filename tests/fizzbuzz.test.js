const { expect } = require('@jest/globals');

const fizzBuzz = require('../fizzbuzz')

test('3 should return FIZZ', () => {
    let result = fizzBuzz(3);
    expect(result).toBe('FIZZ'); // what you want the result to be
}); // gets string about what we're testing, second arg is a function

test('10 should return BUZZ', () => {
    let result = fizzBuzz(10);
    expect(result).toBe('BUZZ');
})