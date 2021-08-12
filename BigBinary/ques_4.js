/***
 * QUESTION: Given two inputs to the function add should return the result.
 * Note:
 * Should return the result even if the number is passed as string.
 * 
 * INPUT:
 * const x = 10;
 * const y = 20;
 * 
 * OUTPUT:
 * 30
 */

function add(x, y){
    return parseInt(x,10) + parseInt(y,10);
}

function checkTestCase(num, x, y){
    const result = add(x,y);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 10,20);
checkTestCase(2, "100", 20);
checkTestCase(3, "100", "20");
checkTestCase(4, 100, '20');