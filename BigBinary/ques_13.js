/***
 * QUESTION: Find the sum of numbers in the array.
 * Note:
 * Find the sum of numbers in the given array.
 * Return 0 if the list empty.
 * 
 * INPUT:
 *  const list = [4, 5, -9, 19, 110];
 * OUTPUT:
 *  129
 */

function sum(list){
    return list.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
}

function checkTestCase(num, list) {
    const result = sum(list);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [4, 5, -9, 19, 110]);
checkTestCase(2, [2, 15, 9, 18]);
checkTestCase(3, [12, -15, 19, 58]);
checkTestCase(4, [20, 20, 29, 18]);