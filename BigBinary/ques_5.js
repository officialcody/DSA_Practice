/***
 * QUESTION: Given two inputs to the function add should return the result only if both the inputs are number and if inputs are not number return Invalid Input.
 * Note:
 * If both or either one of the inputs are not number return Invalid Input message.
 * 
 * INPUT:
 * const x = 10;
 * const y = 20;
 * 
 * OUTPUT:
 * 30
 */

function add(x, y){
    if(isNaN(x) || isNaN(y)){
      return 'Invalid Input';
    }
    return parseInt(x,10) + parseInt(y,10);
}

function checkTestCase(num, x, y){
    const result = add(x,y);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 10,20);
checkTestCase(2, "100", 20);
checkTestCase(3, "100 + x", "20");
checkTestCase(4, 'x', 20);