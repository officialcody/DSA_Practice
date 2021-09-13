/***
 * QUESTION: The function keysAndValues should return the keys and values as separate arrays.
 * Return stringified object.
 * 
 * INPUT:
 *  const obj = {
 *    apple: 100,
 *    banana: 60,
 *    orange: 120,
 *    kiwi: 250,
 *  };
 * 
 * OUTPUT:
 *  [["apple","banana","orange","kiwi"],[100,60,120,250]]
 */

// PROVIDED SOLUTION
// const keysAndValues = (obj) => {
//   const v1 = [],
//     v2 = [];
//   for (const key in obj) {
//     v1.push(key);
//     v2.push(obj[key]);
//   }
//   return JSON.stringify([v1, v2]);
// };

// MY SOLUTION
const keysAndValues = (obj) => {
  return JSON.stringify([Object.keys(obj), Object.values(obj)]);
};

function checkTestCase(num, obj){
  const result = keysAndValues(obj);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, { apple: 100, banana: 60, orange: 120, kiwi: 250 });
checkTestCase(2, { Bruce: 32, Tony: 42, Natasha: 52, Steve: 62, Thor: 72, Clint: 82 });