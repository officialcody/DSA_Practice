/***
 * QUESTION: Given a input string, the function should find the hexadecimal value present 
 * in it and return the decimal value of the same.
 * 
 * Note:
 * The string input given may contain a suffix string.
 * If value does not contain a hexaDecimal, the function should return 0.
 * 
 * INPUT:
 *  const value = 'e82f bit';
 * 
 * OUTPUT:
 *  59439
 */

/**
 * Returns a decimal value.
 *
 * @param {string} value string that contain the hexadecimal substring.
 * @returns {number} result
 */
function FindHexNumber(value){
    return (Number.isNaN(parseInt(value, 16)) ? 0 : parseInt(value, 16));
}

function checkTestCase(num, code){
    const result = FindHexNumber(code);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 'e82f bit');
checkTestCase(2, '79ed bits');
checkTestCase(3, 'nothinghere bits');
checkTestCase(4, '84f7 bits');