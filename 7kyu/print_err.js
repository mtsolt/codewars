// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

//* MIKE SOLUTION *//
let accepted = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']


// function printerError(s) {
//     let count = 0
//     let array = s.split('')
//     const newArray = array.map(item => accepted.includes(item))
//     for (let i = 0; i<newArray.length; i++) {
//         if (!newArray[i]) {count ++}
//     }
//     console.log(count)
//     return `${count}/${s.length}`
// }


// let a="aaabbbbhaijjjm"
// console.log(printerError(a)) // "0/14"

// let b ="aaaxbbbbyyhwawiwjjjwwm"
// console.log(printerError(b)) // => "8/22"


// BEST SOLUTION // What's clever here is that JS must have built in alphabet handling! Also don't have to use the template literal string. 
function printerError(s) {
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++
      }
    }
    return count+"/"+s.length
}

let a="aaabbbbhaijjjm"
console.log(printerError(a)) // "0/14"

let b ="aaaxbbbbyyhwawiwjjjwwm"
console.log(printerError(b)) // => "8/22"
