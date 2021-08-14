/***
 * QUESTION: Given a list of integers, calculate the ratios of its elements that are positive, 
 * negative, and zero.
 * 
 * Note:
 *  Print decimal value with 4 digits.
 *  Return stringified object.
 * 
 * INPUT:
 *  const arr = [-4, 3, -9, 0, 4, 1];
 * 
 * OUTPUT:
 *  {"positive":"0.5000","negative":"0.3333","zero":"0.1667"}
 */
const integerRatios = (arr) => {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    arr.forEach(element => {
      if(element < 0){
        negative += 1;
      } else if(element > 0) {
        positive += 1;
      } else {
        zero += 1;
      }
    });
    positive = (positive/arr.length).toFixed(4);
    negative = (negative/arr.length).toFixed(4);
    zero = (zero/arr.length).toFixed(4);
    return JSON.stringify({positive,negative,zero});
};

function checkTestCase(num, arr){
    const result = integerRatios(arr);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [-4, 3, -9, 0, 4, 1]);
checkTestCase(2, [1, 2, 3, -1, -2, -3, 0, 0]);