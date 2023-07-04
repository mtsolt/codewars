// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let ALPHABET='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let splitabet = alphabet.split('')
    let SPLITABET = ALPHABET.split('')
    let newString = message.split('')
    let cipher = []

    newString.forEach(item => {
        if (alphabet.includes(item)) {
            let index = alphabet.indexOf(item)
            if (index >= 13) {index = index - 26}
            let newIndex = splitabet[index+13]
            cipher.push(newIndex)
        } else if (ALPHABET.includes(item)) {
            let index = ALPHABET.indexOf(item)
            if (index >= 13) {index = index - 26}
            let newIndex = SPLITABET[index+13]
            cipher.push(newIndex)
        } else {
            cipher.push(item)
        }
    })
    return(cipher.join(''))
}

console.log(rot13('grfg'))
console.log(rot13('sdifubBPWqwser'))


// CLEVER
function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(a, b)
}

// BEST PRACTISE

