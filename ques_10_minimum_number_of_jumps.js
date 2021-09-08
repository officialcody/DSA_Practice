/**
 * QUESTION: Given an array of N integers arr[] where each element represents the max number 
 * of steps that can be made forward from that element. Find the minimum number of jumps to 
 * reach the end of the array (starting from the first element). If an element is 0, then you 
 * cannot move through that element.
 * Note: Return -1 if you can't reach the end of the array.
 * 
 * Example 1:
 *  Input:
 *  N = 11 
 *  arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9} 
 * Output: 
 *  3 
 * Explanation: 
 *  First jump from 1st element to 2nd element with value 3. Now, from here we jump to 5th element with value 9, and from here we will jump to last.
 */

function minimum_jumps(array){
  let n = array.length;

  // The number of jumps needed to
  // reach the starting index is 0
  if (n <= 1) return 0;

  // Return -1 if not possible to jump
  if (array[0] == 0) return -1;

  // initialization
  // stores all time the maximal
  // reachable index in the array.
  let maxReach = array[0];

  // stores the number of steps
  // we can still take
  let step = array[0];

  // stores the number of jumps
  // necessary to reach that maximal
  // reachable position.
  let jump = 1;
  
  // Start traversing array
  let i = 1;
  for (i = 1; i < n; i++) {
    // Check if we have reached the end of the array
    if (i == n - 1) return jump;
    // updating maxReach
    maxReach =Math.max(maxReach, i + array[i]);
    // we use a step to get to the current index
    step--; 
    // If no further steps left
    if (step == 0) {
      // we must have used a jump
      jump++;
      // Check if the current index/position or lesser index
      // is the maximum reach point from the previous indexes
      if (i >= maxReach) return -1;
      // re-initialize the steps to the amount
      // of steps to reach maxReach from position i.
      step = maxReach - i;
    }
  }

  return -1;
}

function checkTestCase(tc, array){
  console.log(`Test Case ${tc}`);
  console.log(`Minimum Height Difference: ${minimum_jumps(array)}`);
}

checkTestCase(1, [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]);