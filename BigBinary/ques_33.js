/**
 * QUESTION: Find the sum of all the numbers that are input to the function.
 * Note:
 * There is no limit for number of arguments for the function.
 * Find out the sum the numbers that is input.
 * Length arguments will vary.
 * 
 * INPUT:
 *  const numbers = [3, 4, 5, 10, 8, 12, 23];
 * 
 * OUTPUT:
 *  65
 */

function sum(...numbers){
    return numbers.reduce((sum, num)=> {
      return sum + num;
    }, 0);
}

function checkTestCase(num, numbers){
    const result = sum(...numbers);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [3, 4, 5, 10, 8, 12, 23]);
checkTestCase(2, [12, 31, 11, 76, 19, 87, 12]);
checkTestCase(3, [32, 98, 54, 34, 21, 98, 65]);
checkTestCase(4, [322, 788, 764, 34, 546, 98, 65]);