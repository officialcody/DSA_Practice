/***
 * QUESTION: Create a function that returns an ordinal array, for any input array of numbers given.
 * 
 * INPUT:
 *  const numbers = [1, 2, 3, 4, 5, 6, 7];	
 * 
 * OUTPUT:
 *  1st,2nd,3rd,4th,5th,6th,7th
 */

/**
 * Returns an ordinal array
 *
 * @param {Array.<numbers>} list list of numbers.
 * @returns {Array.<string>} result
 */
function makeItOrdinal(numbers) {
    const ordinalArray = [];
    for(let n of numbers){
      let s = ['th', 'st', 'nd', 'rd'];
      let temp = n % 100;
      ordinalArray.push(n + (s[(temp-20) % 10] || s[temp] || s[0]));
    }
    return ordinalArray;
}

function checkTestCase(num, numbers){
    const result = makeItOrdinal(numbers);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [1, 2, 3, 4, 5, 6, 7]);
checkTestCase(2, [456, 51, 123, 31, 2, 99, 101]);
checkTestCase(3, [42, 48, 49, 111, 222, 333, 0, 5]);