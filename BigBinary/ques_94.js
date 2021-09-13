/**
 * QUESTION: The function accumulatingArray should return an array of the accumulating sum.
 * 
 * Return Stringified Object
 * 
 * INPUT:
 *  const arr = [1, 0, 1, 0, 1];	
 * 
 * OUTPUT
 *  [1,1,2,2,3]
 */
// PROVIDED SOLUTION
// const accumulatingArray = (arr) => {
//   let totalSum = 0;
//   return JSON.stringify(arr.map((x) => (totalSum += x)));
// };


// MY SOLUTION
const accumulatingArray = (arr) => {
  let final_array = [];
  let sum = 0;
  arr.forEach(el => {
    sum += el;
    final_array.push(sum);
  });
  return JSON.stringify(final_array);
};

function checkTestCase(num, arr){
  const result = accumulatingArray(arr);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, [1, 0, 1, 0, 1]);
checkTestCase(2, [1, 5, 7]);
checkTestCase(3, [1, 2, 3, 4]);
checkTestCase(4, []);