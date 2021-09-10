/**
 * QUESTION: The function rangeSum should return the sum of all the numbers between and including the range given in an array.
 * Return stringified object.
 * 
 * INPUT:
 *  const arr = [10,2];
 * 
 * OUTPUT:
 *  54
 */
const rangeSum = (arr) => {
  let [start, end] = arr;
  let sum = 0;
  if(start > end){
    for(let i=end;i<=start;i++){
      sum += i;
    }
  } else {
    for(let i=start;i<=end;i++){
      sum += i;
    }
  }
  return JSON.stringify(sum);
}

function checkTestCase(num, array){
  const result = rangeSum(array);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, [10,2]);
checkTestCase(2, [2,10]);
checkTestCase(3, [1,5]);
checkTestCase(4, [5,1]);