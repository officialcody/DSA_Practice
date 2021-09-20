/***
 * QUESTION: Given an array of integers. Find the Inversion Count in the array. 
 * 
 * Inversion Count: For an array, inversion count indicates how far (or close) the array is from 
 * being sorted. If array is already sorted then the inversion count is 0. If an array is sorted 
 * in the reverse order then the inversion count is the maximum. 
 * Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
 * 
 * Input: 
 *  N = 5
 *  arr[] = {2, 4, 1, 3, 5}
 * Output: 
 *  3
 */
 const inversionCount = (arr, N) => {
  const mergeAndCount = (arr,l,m,r) => {
    // Left subarray
    let left = [];
    for(let i = l; i < m + 1; i++) {
      left.push(arr[i]);
    }
    
    // Right subarray
    let right = [];
    for(let i = m + 1; i < r + 1; i++){
      right.push(arr[i]);
    }
    let i = 0, j = 0, k = l, swaps = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
          arr[k++] = right[j++];
          swaps += (m + 1) - (l + i);
      }
    }
    while (i < left.length) {
      arr[k++] = left[i++];
    }
    while (j < right.length) {
      arr[k++] = right[j++];
    }
    return swaps;
  }

  const mergeSortAndCount = (arr, l, r) => {
  // Keeps track of the inversion count at a
  // particular node of the recursion tree
    let count = 0;
    if (l < r) {
      let m = Math.floor((l + r) / 2);
        
      // Total inversion count = left subarray count
      // + right subarray count + merge count
        
      // Left subarray count
      count += mergeSortAndCount(arr, l, m);
        
      // Right subarray count
      count += mergeSortAndCount(arr, m + 1, r);
        
        // Merge count
      count += mergeAndCount(arr, l, m, r);
    }
    return count;
  }

  let count = mergeSortAndCount(arr, 0, N-1);
  return count;
}

function checkTestCase(tc, nums, N){
  console.log(`Test Case ${tc}`);
  console.log(`Output: ${inversionCount(nums, N)}`);
}

checkTestCase(1, [2, 4, 1, 3, 5], 5);
checkTestCase(2, [2, 3, 4, 5, 6], 5);
checkTestCase(3, [10, 10, 10], 3);