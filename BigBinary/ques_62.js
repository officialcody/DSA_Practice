/*****
 * QUESTION: The function should return the number of days in a given month.
 * 
 * Note:
 *  No spelling errors will be present in the inputs.
 * 
 * INPUT:
 *  const month = 'Feb';
 *  const year = 2000;
 * 
 * OUTPUT:
 *  29
 */

/**
 * Returns the number of days in a given month.
 *
 * @param {string} month
 * @param {number} year
 * @return {number} result
 */
function getDaysCount(month, year) {
    const monthIndex = new Date(`${month} ${year}`).getMonth() + 1;
    return new Date(year, monthIndex, 0).getDate();
}

function checkTestCase(num, month, year){
    const result = getDaysCount(month, year);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 'Feb', 2000);
checkTestCase(2, 'February', 1977);
checkTestCase(3, 'July', 2011);