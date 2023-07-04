// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]


function solution(number) {
    let numerals = ''
    numbers.forEach((value, index) => {
        while (number >= value) {
            numerals += romanNumbers[index]
            number -= value
        }
    })
    return numerals
}

console.log(solution(2000))
console.log(solution(300))
console.log(solution(30))
console.log(solution(3))
console.log(solution(2351))
console.log(solution(451))
console.log(solution(4))
console.log(solution(1666))
console.log(solution(16663))
