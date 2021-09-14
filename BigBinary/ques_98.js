/**
 * QUESTION: The function orderBySum should convert the array of arrays which contain only numeric 
 * values by the ascending order of the sum of the elements within.
 * Return stringified object.
 * 
 * INPUT:
 *  const arr = [[11,13], [4,12], [2,1]];
 * 
 * OUTPUT:
 *  [[2,1],[4,12],[11,13]]
 */

// PROVIDED SOLUTION
// const orderBySum = (arr) => {
//   const resultArr = [];
//   arr.forEach((item) => {
//     const sum = item.reduce((acc, s) => acc + s);
//     resultArr.push({ sum, item });
//   });
//   return JSON.stringify(
//     resultArr.sort((a, b) => a.sum - b.sum).map((el) => el.item)
//   );
// };

// MY SOLUTION
const orderBySum = (arr) => {
  return JSON.stringify(arr.sort(function(a,b){
    let sumOfA = a.reduce((acc, val)=>acc+val, 0);
    let sumOfB = b.reduce((acc, val)=>acc+val, 0);
    if(sumOfA < sumOfB){
      return -1;
    } else if(sumOfA > sumOfB){
      return 1;
    }
    return 0;
  }));
};

function checkTestCase(num, arr){
  const result = orderBySum(arr);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, [[11,13], [4,12], [2,1]]);
checkTestCase(2, [[1,7], [11,10], [2,1]]);
checkTestCase(3, [[14,5], [5,10], [8,9]]);