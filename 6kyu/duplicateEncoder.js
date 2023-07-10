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


// * OK THE WAY WE DO THIS IS TO MAKE AN OBJECT FROM THE ORIGINAL STRING > array - Each value in the array acts aas key and then the 
// * corresponding value is the amount of times it appears in the array. Then compare values after that... maybe.

// * We go again in the morning!
function duplicateEncode(aWord){
  let word = aWord.toLowerCase()
  let newArray = word.split('')
  let secondArray = []
  let finalArray = []
  console.log('This is the lenght', newArray.length)
  for(let i=0; i<newArray.length; i++){
    let slicee = newArray[i]
    if (!secondArray.includes(slicee)){
      secondArray.push(slicee)
      finalArray.push(')')
    } else {
      finalArray.push('(')
    }
  }
  return finalArray
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))
// console.log(duplicateEncode("(( @"))