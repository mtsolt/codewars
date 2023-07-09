// The goal of this exercise is to convert a string to a new string where each character in the 
// new string is "(" if that character appears only once in the original string, or ")" if that 
// character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// * https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
// * USE THIS TO CHECK IT OUT NEXT MIKE!!!

function duplicateEncode(word){
  let counter = 0
  let checkArr = []
  let newArr = word.split('')
  newArr.forEach(char => {
    !checkArr.includes(char) ?
    checkArr.push(char)
    : null
  })
  newArr.forEach(char =>{
    checkArr.includes(char)?

  })

  console.log(`This is check arr ${checkArr}`)
  return counter

}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))
console.log(duplicateEncode("(( @"))