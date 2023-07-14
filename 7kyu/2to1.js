// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.


function longest(a, b) {
  let final = []
  function sorter(c) {
    let cSplit = c.split('')
    for (let i = 0; i<cSplit.length; i++){
      !final.includes(cSplit[i]) ? final.push(cSplit[i])
      : null
    }
  }
  sorter(a)
  sorter(b)
  final.sort()
  let result = final.join('')
  console.log(result)
}


a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) //-> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) // "abcdefghijklmnopqrstuvwxyz"



// * Best solutions from Codewars
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// function longest(s1, s2) {
//   s3 = s1 + s2;
//   s4 = s3.split("");
//   s4 = s4.sort().filter(function(element, index, array){
//     return element !== array[index - 1];
//   });
//   return s4.join("");
// }

// * REMEMBER - Easy to add two strings together with + && - also Sets