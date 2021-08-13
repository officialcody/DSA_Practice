/***
 * QUESTION: Create a function which finds the top score from an array of scores given.
 * 
 * INPUT:
 *  const scores = [20, 32, 51, 103, 88, 26];
 * 
 * OUTPUT:
 *  103
 */

/**
 * Returns an ordinal array
 *
 * @param {Array.<numbers>} scores
 * @returns {number} result
 */

function findTopScore(scores) {
    // return Math.max(...scores); //provided solution
    return scores.sort(function(a,b) { return a-b; })[scores.length - 1];
}

function checkTestCase(num, scores){
    const result = findTopScore(scores);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [20, 32, 51, 103, 88, 26]);
checkTestCase(2, [24, 3, 15, 52, 4, 9, 55, 18, 45, 10]);
checkTestCase(3, [32, 78, 9, 109, 69, 9, 1, 12]);