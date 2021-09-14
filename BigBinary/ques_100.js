/**
 * QUESITON: The function splitByOddAndEven should separate a single array into sub-arrays: one containing 
 * odd numbers, the other containing even numbers.
 * 
 * If array contains only even or odd, return the array. Eg. [1,3,5] -> [1,3,5]
 * Return stringified object.
 * 
 * INPUT:
 *  const arr = [2, 3, 7, 6, 2, 4, 9];
 * 
 * OUTPUT:
 *  [[2,6,2,4],[3,7,9]]
 */

// PROVIDED SOLUTION
// const splitByOddAndEven = (arr) => {
//   const odd = arr.filter((number) => number % 2 === 1);
//   const even = arr.filter((number) => number % 2 === 0);
//   if (odd.length > 0 && even.length > 0) return JSON.stringify([even, odd]);
//   if (even.length === 0) return JSON.stringify(odd);
//   else return JSON.stringify(even);
// };

// MY SOLUTION
const splitByOddAndEven = (arr) => {
  if(arr.every(el => el%2 === 0) || arr.every(el => el%2 !== 0)) return JSON.stringify(arr);
  let oddNumbers = [];
  let evenNumbers = [];
  arr.forEach(el => {
    if(el % 2 === 0) {
      evenNumbers.push(el);
    } else {
      oddNumbers.push(el);
    }
  });
  return JSON.stringify([evenNumbers,oddNumbers]);
};

function checkTestCase(num, arr){
  const result = splitByOddAndEven(arr);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, [2, 3, 7, 6, 2, 4, 9]);
checkTestCase(2, [12, 14, 17]);
checkTestCase(3, [10, 12, 6, 18]);
checkTestCase(4, [1, 5, 3, 2]);
checkTestCase(5, [1, 3]);