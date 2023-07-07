// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.



function pigIt(str) {
  const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let newStr = str.split(' ')
  let newLength = newStr.length
  let finalStr = []
  
  for (let i = 0; i < newLength; i++) {
    let newWord = newStr[i]
    
    if (allowed.includes(newWord.charAt(0))) {
      let ending = newWord.charAt(0)
      let splitArr = newWord.split('')
      splitArr.shift()
      splitArr.push(ending, "ay")
      let joinArr = splitArr.join('')
      finalStr.push(joinArr)
    } else {
      finalStr.push(newWord)
    }
    
    
  }
  return jumbo = finalStr.join(' ')


  }
//   console.log(pigIt('Pig latin is cool !')); // igPay atinlay siay oolcay
//   // pigIt('Hello world !');     // elloHay orldway !



  // BETTER VERSIONS FROM GITHUB
  // function pigIt(str){
  //   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  // }

  // function pigIt(str) {
  //   return str.replace(/\w+/g, (w) => {
  //     return w.slice(1) + w[0] + 'ay';
  //   });
  // }
  // *For these two I clearly need to work on looking at how replace works! - These do work with symbols. 

  // function pigIt(str) {
  //   var arrayWord = str.split(' ');
  //   return arrayWord.map(function(word) {
  //     var firstLetter = word.charAt(0);
  //     return word.slice(1) + firstLetter + 'ay';
  //   }).join(' ');
  // }
  console.log(pigIt('Pig latin is cool !'));
// RETURNS igPay atinlay siay oolcay !ay
  // * For this one I'm not entirely sure how it would work with symbols. - Have tested it and it doesn't work - I don't like it./