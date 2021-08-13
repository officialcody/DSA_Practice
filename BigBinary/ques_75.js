/****
 * QUESTION: Given an input sentence, perform an in-place reversal of all words from 
 * the string.
 * 
 * INPUT:
 *  const str = "erehT era a tsav rebmun fo secruoser rof gninrael erom tpircsavaJ";
 * 
 * OUTPUT:
 *  There are a vast number of resources for learning more Javascript
 */

const inPlaceReversal = (str) => {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
    // return str.split(' ').reduce((accumulator, currentValue) => {
    //   return accumulator + ' ' + currentValue.split('').reverse().join('');  //My Solution
    // }, '').trim();
};
  

function checkTestCase(num, str){
    const result = inPlaceReversal(str);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, "erehT era a tsav rebmun fo secruoser rof gninrael erom tpircsavaJ");
checkTestCase(2,  "tpircsavaJ si emosewa");