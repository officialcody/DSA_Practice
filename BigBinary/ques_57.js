/****
 * QUESTION: Create a function which converts the given number to a specific given base.
 * 
 * Note:
 *  Expected bases for the inputs will be either binary or octal or decimal or hexadecimal.
 * 
 * INPUT:
 *  const value = '7B';
 *  const newBase = 10
 *  const currentBase = 16
 * 
 * OUTPUT:
 *  123
 */

function convertBase(value, currentBase, newBase) {
    return parseInt(value, currentBase).toString(newBase);
}

function checkTestCase(num, value, currentBase, newBase){
    const result = convertBase(value, currentBase, newBase);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, '7B', 16, 10);
checkTestCase(2, '9012', 10, 2);
checkTestCase(3, "154D", 16, 8);