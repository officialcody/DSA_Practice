/**
 * Find all the unique values in an array.
 *  let a = [1,1,2,3,5,7,3,8];
 *  output =[ 1, 2, 3, 5, 7, 8 ]
 */
function findUniqueElements(array){
  return [...new Set(array)];
}

let a = [1,1,2,3,5,7,3,8];

console.log(findUniqueElements(a));