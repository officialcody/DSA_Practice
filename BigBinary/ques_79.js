/***
 * QUESTION: Given an array, flatten the array.
 * 
 * Note:
 * Eg. An array [[6], [12], [25]] becomes [6, 12, 25]
 * Eg. An array [1, [2]] become [1,2]
 * Return stringified object.
 * 
 * INPUT:
 *  const arr = [ ["$6"], ["$12"], ["$25"], ["$25"], ["$18"], ["$22"], ["$10"] ];
 * 
 * OUTPUT:
 *  $6,$12,$25,$25,$18,$22,$10
 */

const flattenArray = (arr) => [].concat(...arr);

function checkTestCase(num, arr){
    const result = flattenArray(arr);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1,[ ["$6"], ["$12"], ["$25"], ["$25"], ["$18"], ["$22"], ["$10"] ]);
checkTestCase(2, [ [5, 1], [6], [2], [8] ]);
checkTestCase(3, [1, [2], [3, [[4]]]]);
checkTestCase(4, [1, [2]]);