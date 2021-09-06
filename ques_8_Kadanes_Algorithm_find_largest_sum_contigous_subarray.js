/**
 * KADANE'S ALGORITHM
 * QUESTION: Given an array Arr[] of N integers. Find the contiguous sub-array(containing at 
 * least one number) which has the maximum sum and return its sum.
 * 
 * Input:
 *  N = 5
 *  Arr[] = {1,2,3,-2,5}
 * Output:
 *  9
 * Explanation:
 *  Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which  is a contiguous subarray.
 * 
 * ALGORITHM:
 *  Algorithms folder
 */

function kadanes_algorithm(array){
  let max_so_far = Number.MIN_VALUE;
  let max_ending_here = 0;
  for (let i = 0; i < array.length; i++) {
    max_ending_here = max_ending_here + array[i];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;
    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
}

function checkTestCase(tc, array){
  console.log(`Test Case ${tc}`);
  console.log(`Largest Sum of Subarray: ${kadanes_algorithm(array)}`);
}

checkTestCase(1, [-2,-3,4,-1,-2,1,5,-3]);