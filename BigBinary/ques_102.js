/***
 * QUESTION: The function mostCommonCharacter should return the most commonly occurring 
 * character in a string.
 * 
 * If there are 2 or more such characters, then return the character which comes first 
 * alphabetically.
 * 
 * INPUT:
 *  const str = "abcddefg";
 * 
 * OUTPUT:
 *  d
 */

// PROVIDED SOLUTION
// const mostCommonCharacter = (str) => {
//   const arr = [..."abcdefghijklmnopqrstuvwxyz"];
//   const hash = new Map();
//   arr.forEach((e) => hash.set(e, 0));
//   const strArr = [...str.toLowerCase()];
//   strArr.forEach((e) => {
//     if (hash.has(e)) hash.set(e, hash.get(e) + 1);
//   });
//   return [...hash].reduce((a, e) => (e[1] > a[1] ? e : a))[0];
// };

// MY SOLUTION
const mostCommonCharacter = (str) => {
  let strArr = [...str.toLowerCase()].sort();
  let max = 0;
  let count = 0;
  let character = "";
  for(let i=0;i<strArr.length-1;i++){
    if(strArr[i] === strArr[i+1]){
      count++;
    } else if(max < count && max !== count){
      max = count;
      count = 0;
      character = strArr[i];
    } else if(count <= max) {
      count = 0;
    }
  }
  return character;
};

function checkTestCase(num, str){
  const result = mostCommonCharacter(str);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, "abcddefg");
checkTestCase(2, "heggbdeff");
checkTestCase(3, "KABBAB");
checkTestCase(4, "aFsFeeccfFfa");
checkTestCase(5, "afdsafdsafe");