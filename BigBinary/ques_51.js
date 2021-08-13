/***
 * QUESTION: Given an array of countries, sorted according to their land area & strings 
 * ‘i’ & ‘j’, the function should return both the original array intact and an array that 
 * contains ith largest to jth largest countries in the return format:
 * { newList, countries; }
 * 
 * Note:
 * The strings ‘i’ & ‘j’ will be of the format (1st, 2nd, 3rd etc)
 * The countries array will be constant for all test cases.
 * Return stringified object.
 * 
 * INPUT:
 *  const i = '1st';
 *  const j = '2nd';
 * 
 * OUTPUT:
 *  {"newList":["Canada","China"],"countries":["Russia","Canada","China","United States","Brazil","Australia","India","Argentina","Kazakhstan","Algeria"]}
 */

/**
 * Returns an array of unique river names
 *
 * @param {Array.<string>} countries list of countries
 * @param {string} i start position
 * @param {string} j end position
 * @returns {string} result.
 */
function getCountries(countries, i, j) {
    return JSON.stringify({
      newList: countries.slice(parseInt(i), parseInt(j)+1),
      countries
    })
}

function checkTestCase(num, countries, i, j){
    const result = getCountries(countries, i, j);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

const countries = ["Russia","Canada","China","United States","Brazil","Australia","India","Argentina","Kazakhstan","Algeria"];

checkTestCase(1, countries, '1st', '2nd');
checkTestCase(2, countries, '9rd', '10th');
checkTestCase(3, countries, '2nd', '9th');
checkTestCase(4, countries, '3rd', '5th');