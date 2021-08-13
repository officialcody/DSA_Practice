/***
 * QUESTION: Return the sum of two given numbers. The sum should contain exactly 2 decimal
 * points.
 * 
 * INPUT:
 *  const a = 0.205;
 *  const b = 0.312;
 * 
 * OUTPUT: 
 *  0.52
 */

const add = (a, b) => {
    const result = parseFloat(a) + parseFloat(b);
    return parseFloat(result.toFixed(2));
}

function checkTestCase(num, a, b){
    const result = add(a, b);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 0.205,0.312);
checkTestCase(2, "1", '2');
checkTestCase(3, "0.7", 0.3);