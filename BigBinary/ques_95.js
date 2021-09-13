/**
 * QUESTION: The function compactArray should clear array from all unnecessary elements, like false, 
 * undefined, empty strings, zero, null.
 * 
 * Return stringified object.
 * 
 * INPUT:
 *  const arr = [0, 1, false, 2, undefined, "", 3, null];
 * 
 * OUTPUT:
 *  [1,2,3]
 */
const compactArray = (arr) => {
  return JSON.stringify(arr.filter(el => el));
};

function checkTestCase(num, arr){
  const result = compactArray(arr);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, [0, 1, false, 2, undefined, "", 3, null]);
checkTestCase(2, [1, 5, 7, undefined, null, 9, false]);
checkTestCase(3, [1, null, "", 1, false, 1]);
checkTestCase(4, [null, undefined, "", false]);