/***
 * QUESTION: Given three arrays sorted in increasing order. Find the elements that are common 
 * in all three arrays.
 * 
 * INPUT:
 *  n1 = 6; A = {1, 5, 10, 20, 40, 80}
 *  n2 = 5; B = {6, 7, 20, 80, 100}
 *  n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
 * 
 * OUTPUT:
 *  20 80
 */
function commonElements(arr1, arr2, arr3){
  let newarr = [...new Set(arr1),...new Set(arr2),...new Set(arr3)].sort((a,b)=>a-b);
  let empty = [];
  let count = 1;
  newarr.forEach((el, index)=> {
    if(el === newarr[index+1]){
      count++;
    } else if(count !== 3 && el !== newarr[index+1]) {
      count = 1;
    }
    if(count === 3){
      count = 1;
      empty.push(el);
    }
  });
  return [...new Set(empty)];
}

function checkTestCase(tc, arr1, arr2, arr3){
  console.log(`Test Case ${tc}`);
  console.log(`Output: ${commonElements(arr1, arr2, arr3)}`);
}

checkTestCase(1, [1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120]);