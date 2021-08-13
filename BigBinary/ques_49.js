/****
 * QUESTION: Given an alphanumerical value as input, return the sum of all its digits.
 * 
 * Note:
 * If present, non-numerical values will only be a suffix to all the digits.
 * If no numerical value is present, return false
 * 
 * 
 */

/**
 * Returns sum of the digits present
 *
 * @param {string} alphaNumeric string from which we need find the digits, and get the sum
 * @returns {number | boolean} result.
 */
const findSumOfDigitsMySolution = (alphaNumeric) => {
    let sum = false;
    alphaNumeric.split('').forEach(character => {
      if(!isNaN(character)){
        sum += parseInt(character,10);
      }
    });
    return sum;
}

const findSumOfDigitsProvidedSolution = (alphaNumeric) => {
    const digits = parseInt(alphaNumeric);
    if (digits) {
        return digits.toString().split('').map(Number).reduce((a,b) => a + b, 0);
    }
    return false
}

function checkTestCase(num, alphaNumeric){
    const result = findSumOfDigitsMySolution(alphaNumeric);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, '0987654321abcdefgh');
checkTestCase(2, '42JohnDoe');
checkTestCase(3, '221BBakerStreet');
checkTestCase(4, 'JamesBond');