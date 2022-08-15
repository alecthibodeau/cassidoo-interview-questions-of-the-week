/**
 * https://buttondown.email/cassidoo/archive/keep-your-face-always-toward-the-sunshine-and/
 * Write a function that determines if all the characters in a given string are unique.
 * Can you do this without making any new variables?
 * You choose if you want to include capitalization in your consideration for this one,
 * as a fun challenge.
 *
 * Run locally: $ node all-unique.js
 */

const string = 'Cassidy';
// const string = 'cat & dog';
// const string = 'cat+dog';

const allUnique = function(string) {
  return new Set(string.split('')).size === string.length;
}

console.log(allUnique(string));
