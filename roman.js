// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
const digits = [
    {
        0: '',
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX'
    },
]
const tens = [
    {
        0: '',
        1: 'X',
        2: 'XX',
        3: 'XXX',
        4: 'XL',
        5: 'L',
        6: 'LX',
        7: 'LXX',
        8: 'LXX',
        9: 'XC'
    },
]

const cents = [
    {
        0: '',
        1: 'C',
        2: 'CC',
        3: 'CCC',
        4: 'CD',
        5: 'D',
        6: 'DC',
        7: 'DCC',
        8: 'DCCC',
        9: 'CM'
    },
]

const mills = [
    {
        0: '',
        1: 'M',
        2: 'MM',
        3: 'MMM',
        4: 'MV',
        5: 'V',
        6: 'VM',
        7: 'VMM',
        8: 'VMMM',
        9: 'MX'
    },
]


console.log(mills.values[keys(1)])

// function solution(number) {
//     let finalString = []
//     let array = [mills, cents, tens, digits]
//     const numString = number.toString()
//     const split = numString.split('')
//     let sLength = split.length
//     console.log(sLength)
//     if (sLength === 4) {
//         for (let i = 0; i < sLength; i++) {

//             finalString.push(split[i])
            
//         }
//     } else if (sLength === 3) {
//         for (let i = 0; i < sLength; i++) {
//             finalString.push(split[i])
//         }
//     } else if (sLength === 2) {
//         for (let i = 0; i < sLength; i++) {
//             finalString.push(split[i])
//         }
//     } else {
//         for (let i = 0; i < sLength; i++) {
//             finalString.push(split[i])
//             console.log('HERE IT IS>>>', array[i])
//         }
//     }


//     return finalString.join('')
// }

// // console.log(solution(2000))
// // console.log(solution(300))
// // console.log(solution(30))
// // console.log(solution(3))

// console.log(solution(2351))

// console.log(solution(451))
// console.log(solution(4))
