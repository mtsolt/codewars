// Function counts sheep when given an array. Sheep = true, no sheep -= false


function countSheeps(arrayOfSheep) {
  let counter = 0
  for (let i = 0; i <arrayOfSheep.length; i++) {
    arrayOfSheep[i] ? counter ++ : null
  }
  return counter
}
const array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ]


  console.log(countSheeps(array1))


  // * Better solutions from codewars:
  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }