/**
 * QUESTION: Move all the negative elements to one side of the array 
 * 
 * Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
 * Output: -12 -13 -5 -7 -3 -6 11 6 5
 * 
 */

function move_negatives_to_one_side(array){
  let sortedArray = [];
  for(let i=0;i<array.length;i++){
    if(array[i] < 0){
      sortedArray.unshift(array[i]);
    } else {
      sortedArray.push(array[i]);
    }
  }
  return sortedArray;
}

function checkTestCase(tc, array){
  console.log(`Test Case ${tc}`);
  console.log(`Sorted Array: ${move_negatives_to_one_side(array)}`);
}

checkTestCase(1, [-12, 11, -13, -5, 6, -7, 5, -3, -6]);