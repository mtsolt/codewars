

// MIKE ANSWER
function countChar(string, char) {
    let count = 0
    let lowered = string.toLowerCase()
    console.log(lowered)
    let aLength = lowered.split('')
    console.log(aLength)
    for (let i = 0; i < aLength.length; i++) {
        if (aLength[i] === char.toLowerCase()) {
            count++
        }

    }
    return count
}


// CODEWARS ANSWERS
// Sensible one using single line & filter
// function countChar(s, c) {
//     c = c.toLowerCase();
//     return s.toLowerCase().split('').filter(x => x === c).length;
//   }

//Mental one using RegExp
// function countChar(string, char) {
//     return (string.match(new RegExp(char, 'ig')) || []).length 
//   }
console.log(countChar('asbjoeybfbALNLIUNDLIABSDLInq983ru', 'n'))
console.log(countChar('asbjo892331213eybfbALNLIUNDLIABSDLInq983ru', '8'))
console.log(countChar('VU9JJsyWTGBnanQafLDz7FiuQ2iB1', 'F'))
