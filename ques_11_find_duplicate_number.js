/***
 * QUESTION: Given an array of integers nums containing n + 1 integers where each integer is in 
 * the range [1, n] inclusive.
 * There is only one repeated number in nums, return this repeated number.
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 */

function find_duplicate(nums){
  let duplicate = -1;
  for (let i = 0; i < nums.length; i++) {
      let cur = Math.abs(nums[i]);
      if (nums[cur] < 0) {
          duplicate = cur;
          break;
      }
      nums[cur] *= -1;
  }
  
  // Restore numbers
  for (let i = 0; i < nums.length; i++)
      nums[i] = Math.abs(nums[i]);

  return duplicate;
}

function checkTestCase(tc, nums){
  console.log(`Test Case ${tc}`);
  console.log(`Minimum Height Difference: ${find_duplicate(nums)}`);
}

checkTestCase(1, [1,3,4,2,2]);