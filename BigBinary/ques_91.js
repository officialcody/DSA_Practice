/**
 * QUESTION: The function addSuffix should return an anonymous function, which transforms its 
 * input by adding a particular suffix at the end. Whereas the function printSuffixed should 
 * return this suffixed string.
 * Do not modify the function names.
 * 
 * INPUT:
 *  const str = "quick";
 *  const suffix = "ly";
 * 
 * OUTPUT:
 *  quickly
 */

// PROVIDED SOLUTION
// const addSuffix = (suffix) => {
//   return function (str) {
//     return str + suffix;
//   };
// };
// const printSuffixed = (suffix, str) => {
//   const addString = addSuffix(suffix);
//   return addString(str);
// };

// MY SOLUTION
const addSuffix = (suffix, str) => {
  return str.split('').concat(suffix).join('');
};

const printSuffixed = (suffix, str) => {
  return addSuffix(suffix, str);
};

function checkTestCase(num, str, suffix){
  const result = printSuffixed(suffix, str);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, "quick", "ly");
checkTestCase(2, "total", "ly");
checkTestCase(3, "fear", "less");
checkTestCase(4, "ruth", "less");
checkTestCase(5, "joy", "ous");