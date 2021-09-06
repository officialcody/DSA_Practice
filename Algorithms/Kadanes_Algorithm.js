/**
 * KADANE'S ALGORITHM
 * QUESTION: Given an array Arr[] of N integers. Find the contiguous sub-array(containing at 
 * least one number) which has the maximum sum and return its sum.
 * 
 * Example 1:
 * Input:
 *  N = 5
 *  Arr[] = {1,2,3,-2,5}
 * Output:
 *  9
 * Explanation:
 *  Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which  is a contiguous subarray.
 * 
 * Example 2:
 * Input:
 *  N = 4
 *  Arr[] = {-1,-2,-3,-4}
 * Output:
 *  -1
 * Explanation:
 *  Max subarray sum is -1 of element (-1)
 * 
 * ALGORITHM:
 * Initialize:
 *     max_so_far = INT_MIN
 *     max_ending_here = 0
 * 
 * Loop for each element of the array
 *   (a) max_ending_here = max_ending_here + a[i]
 *   (b) if(max_so_far < max_ending_here)
 *             max_so_far = max_ending_here
 *   (c) if(max_ending_here < 0)
 *             max_ending_here = 0
 * return max_so_far
 * 
 * Resources: 
 * 1. https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
 * 2. https://dev.to/soorya54/largest-sum-of-sub-arrays-using-kadane-s-algorithm-33bn
 * 3. https://youtu.be/HCL4_bOd3-4
 */

/**
 * KADANE'S ALGORITHM
 * Time Complexity: O(n)
 * @param array 
 * @returns max_sum
 */
function kadanes_algorithm(array){
  let maximum_sum = 0;
  let current_sum = 0;
  for (let i = 0; i < array.length; i++) {
    current_sum = current_sum + array[i];
    if (current_sum > maximum_sum) { 
      maximum_sum = current_sum;
    }
    if (current_sum < 0) { 
      current_sum = 0;
    }
  }
  return maximum_sum;
}

/**
 * BRUTE FORCE SOLUTION
 * Time Complexity: O(n^2)
 * @param array 
 * @returns max_sum
 */
function find_max_sum_subarray(array){
  let max_sum = Number.MIN_VALUE;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
    }
    if(sum > max_sum){
      max_sum = sum;
    }
  }
  return max_sum;
}

function checkTestCase(tc, array){
  console.log(`Test Case ${tc}`);
  console.log(`Largest Sum of Subarray: ${kadanes_algorithm(array)}`);
}

checkTestCase(1, [-2,-3,4,-1,-2,1,5,-3]);