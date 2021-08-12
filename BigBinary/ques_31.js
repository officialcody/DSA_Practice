/***
 * QUESTION: Find the sum of all odd numbers until n.
 * Note:
 * Input will be the limit n.
 * Return the sum of all the odd numbres until n.
 * 
 * INPUT:
 *  const n = 100;
 * 
 * OUTPUT:
 *  2500
 */

function sumOfOddNumbers(n){
//     let i = 1;
//   let sum = 0;
//   do {                   //USING DO WHILE LOOP
//     sum += i;
//     i += 2;
//   } while (i <= n);
//   return sum;
    let sum = 0;
    for(let i=1;i<=n;i=i+2){
      sum += i;
    }
    return sum;
}

function checkTestCase(num, n){
    const result = sumOfOddNumbers(n);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 100);
checkTestCase(2, 34);
checkTestCase(3, 25);
checkTestCase(4, 159);
checkTestCase(5, 200);
checkTestCase(6, 10);