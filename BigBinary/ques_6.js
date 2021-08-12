/****
 * QUESTION: Given an input findout whether the number is divisible by 6 or not.
 * Note:
 * Return true if number is divisible by 6 and false if not.
 * 
 * INPUT:
 * const number = 10;
 * 
 * OUTPUT:
 * false
 */

function isDivisible(number){
    return number % 6 === 0;
}

function checkTestCase(num,number){
    const result = isDivisible(number);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 10);
checkTestCase(2, 1122);
checkTestCase(3, 9876);
checkTestCase(4, 963);
checkTestCase(5, 468);