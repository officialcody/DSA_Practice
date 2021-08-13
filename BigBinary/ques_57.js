/****
 * QUESTION: Create a function which returns characters created from the given sequence of UTF-16 code units.
 * 
 * Note:
 * There could be any number of inputs with minimum of 1.
 * Concatinate and return the final string.
 * 
 * INPUT:
 *  const codes = [73, 20, 76, 111, 118, 101, 20, 74, 83];
 * 
 * OUTPUT:
 *  ILoveJS
 * 
 */

function convertToString(...codes) {
    return String.fromCharCode(...codes);
}

function checkTestCase(num, codes){
    const result = convertToString(...codes);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [73, 20, 76, 111, 118, 101, 20, 74, 83]);
checkTestCase(2, [66, 105, 103, 20, 66, 105, 110, 97, 114, 121]);