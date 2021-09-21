/** 
 * QUESTION: Given an array of N integers, and an integer K, find the number of pairs of elements
 * in the array whose sum is equal to K.
 * 
 * INPUT:
 *  N = 4, K = 6, arr[] = {1, 5, 7, 1}
 * 
 * OUTPUT:
 *  2
*/
function cout_pairs(arr, k) {
  let frequencies = new Map();
  arr.forEach(el => {
    if(!frequencies.has(el)){
      frequencies.set(el, 0);
    }
    frequencies.set(el, frequencies.get(el) + 1);
  });
  let count = 0;
  arr.forEach(el=>{
    if(frequencies.get(k - el)){
      count += frequencies.get(k - el);
    }
    if(k-el == el){
      count-=1;
    }
  });
  return count/2;
}

function checkTestCase(tc, arr, k){
  console.log(`Test Case ${tc}`);
  console.log(`Output: ${cout_pairs(arr, k)}`);
}

checkTestCase(1, [1, 5, 7, 1], 6);
checkTestCase(2, [1, 1, 1, 1], 2);