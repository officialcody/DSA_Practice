/**
 * QUESTION: Given an array which consists of only 0, 1 and 2. Sort the array without using 
 * any sorting algo
 * 
 *  Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.
 */

function sort_without_actual_sorting(array){
  return array.sort();
}

function sort_without_actual_sorting_2(array){
  let sortedArray = [];
  let index = 0;

  for(let i=0;i<array.length;i++){
    if(array[i] === 0){
      sortedArray.unshift(0);
      index +=1;
    } else if(array[i] === 2){
      sortedArray.push(2);
    } else if(array[i] === 1){
      sortedArray.splice(index, 0, 1);
    }
  }

  return sortedArray;
}

function checkTestCase(tc, array){
  console.log(`Test Case ${tc}`);
  console.log(`Sorted Array: ${sort_without_actual_sorting_2(array)}`);
}

checkTestCase(1, [0,2,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0]);