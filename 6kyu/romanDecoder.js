// DESCRIPTION:
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21

const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]


function solution(numerals) {

    return number
}

console.log(solution('XXI')) // should give  21
console.log(solution('CCC')) // should give 300
console.log(solution('XXX')) // Should give 30

// tips: use recursion or folding from the right
// RECURSION
// https://www.programiz.com/javascript/recursion
// FOLD
// https://dev.to/mebble/learn-to-fold-your-js-arrays-2o8p