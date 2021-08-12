/***
 * QUESTION: Check whether all numbers in the given array is a multiple of the given number.
 * Note:
 * Check whether all the numbers in the given array is a multiple of the given number.
 * The array will be a plain array with numbers.
 * Return true if all the numbers in the array is a multiple of the given number.
 * 
 * INPUT: 
 *  const list = [2, 4, 3, 6];
 *  const divisor = 2;
 * 
 * OUTPUT:
 *  false
 */

function areElementsDivisible(list, divisor){
    return list.every(number => number % divisor === 0);
}

function checkTestCase(num, list, divisor){
    const result = areElementsDivisible(list,divisor);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [2, 4, 3, 6], 2);
checkTestCase(2, [9, 27, 3, 18, 72, 102], 3);
checkTestCase(3, [437, 95, 152, 228, 342], 19);
checkTestCase(4, [147, 224, 287, 725, 973], 17);