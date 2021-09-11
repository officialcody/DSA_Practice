/**
 * QUESTION: Given two sorted arrays arr1[] of size N and arr2[] of size M. Each array is 
 * sorted in non-decreasing order. Merge the two arrays into one sorted array in non-decreasing
 * order without using any extra space.
 * 
 * Input:
 *  N = 4, M = 5
 *  arr1[] = {1, 3, 5, 7}
 *  arr2[] = {0, 2, 6, 8, 9}
 * 
 * Output: 
 *  0 1 2 3 5 6 7 8 9
 */
function mergeSortedArrays(arr1, arr2){
  return [...arr1, ...arr2].sort(function(a,b){return a-b});
}

function checkTestCase(tc, arr1, arr2){
  console.log(`Test Case ${tc}`);
  console.log(`Minimum Height Difference: ${mergeSortedArrays(arr1, arr2)}`);
}

checkTestCase(1, [1, 3, 5, 7], [0, 2, 6, 8, 9]);
checkTestCase(2, [10, 12], [5, 18, 20]);