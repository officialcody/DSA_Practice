/**
 * QUESTION: The function compareArray should do a shallow comparison of two arrays arr1, arr2 and 
 * return true if they are identical.
 * 
 * INPUT:
 *  const arr1 = [1, 2, 3, 4];
 *  const arr2 = [1, 2, 3, 4];
 * 
 * OUTPUT:
 *  true
 */
// PROVIDED SOLUTION
// const compareArray = (arr1, arr2) => {
//   if (arr1.length === 0 || arr2.length === 0) return false;
//   if (arr1.length !== arr2.length) return false;
//   const compared = arr1.map((el, idx) => arr2[idx] === el);
//   return !compared.includes(false);
// };

// MY SOLUTION
const compareArray = (arr1, arr2)  => {
  return JSON.stringify(arr1)==JSON.stringify(arr2);
};

function checkTestCase(num, arr1, arr2){
  const result = compareArray(arr1, arr2);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, [1, 2, 3, 4], [1, 2, 3, 4]);
checkTestCase(2, ["Miami", "Pune", "Kochi"], ["Kochi", "Miami", "Pune"]);
checkTestCase(3, [1, 2, 3], [1, 2, 3, 4, 5]);
checkTestCase(4, [], [1, 2, 3, 4, 5]);