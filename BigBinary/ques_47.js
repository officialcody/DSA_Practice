/****
 * QUESTION: Given an input count, increment the same by 1 and add it to itself. Continue 
 * the same till count value reaches maximum count. The function should return the final sum.
 * 
 * Note:
 * The count should increment atleast once irrespective of the maximum count.
 * Order matters: You need to first increment count, and then get the sum.
 * ( ie, for (count = 2, maxCount = 12): 2 + 1 = 3; 2 + 3 = 5;)
 * 
 * INPUT:
 *  const count = 3;
 *  const maximumCount = 7;
 * 
 * OUTPUT:
 *  22
 */

/**
 * Returns calculated value
 *
 * @param {number} count
 * @param {number} maximumCount
 * @returns {number} result.
 */
const incrementCount = (count, maximumCount) => {
    let sum = 0;
    do {
      count++;
      sum = count + sum;
    } while (count < maximumCount)
    return sum;
}

function checkTestCase(num, count, maximumCount){
    const result = incrementCount(count, maximumCount);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 3, 7);
checkTestCase(2, 1, 10);
checkTestCase(3, 21, 21);
checkTestCase(4, 4, 3);