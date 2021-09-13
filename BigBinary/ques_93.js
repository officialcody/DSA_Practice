/***
 * QUESTION: The function splitArray should return sub-arrays, where each of their maximum 
 * length should be equal to maxlen parameter passed as one of the input.
 * Return stringified object.
 * 
 * INPUT:
 *  const arr = [1, 2, 3, 4, 5, 6];
 *  const maxlen = 3;
 * 
 * OUTPUT:
 *  [[1,2,3],[4,5,6]]
 */
const splitArray = (arr, maxlen) => {
  const results = [];
  while (arr.length) {
    results.push(arr.splice(0, maxlen));
  }
  return JSON.stringify(results);
};

function checkTestCase(num, arr, maxlen){
  const result = splitArray(arr, maxlen);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, [1, 2, 3, 4, 5, 6], 3);
checkTestCase(2, [1, 2, 3, 4, 5, 6], 2);
checkTestCase(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4)