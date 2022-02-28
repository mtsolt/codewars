// Count the number of vowels in a string

const vowelCount = (string) => {
    string = string.toLowerCase().split('')
    const newString = string.filter(item => item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u')
    return (newString.length)
}



//OR

const vowelCount2 = (string2) => {
    let count = 0
    string = string2.toLowerCase().split('')
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
            count++
        }
    }
    return count
}

console.log(vowelCount('hello'))
console.log(vowelCount('tRApezIus'))

console.log(vowelCount2('hello'))
console.log(vowelCount2('tRApezIus'))


// GOOD EXAMPLES FROM GITHUB

// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }

// function getCount(str) {
//     return (str.match(/[aeiou]/ig) || []).length;
// }
