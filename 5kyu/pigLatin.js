// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.



function pigIt(str) {
  const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let newStr = str.split(' ')
  let newLength = newStr.length
  for (let i = 0; i < newLength; i++) {
    let newWord = newStr[i]
    console.log('THis is new word', newWord)
    if (allowed.includes(newWord.charAt(0))) {
      console.log('This is newWord[i]', newStr[i])
    } else {
      console.log('BLAH')
    }
  }

    console.log('End result >>>',newStr)

    // return str


  }
  pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
  pigIt('Hello world !');     // elloHay orldway !

