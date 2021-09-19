/**
 * QUESTION: Implement next permutation, which rearranges numbers into the lexicographically next 
 * greater permutation of numbers. If such an arrangement is not possible, it must rearrange it as 
 * the lowest possible order (i.e., sorted in ascending order).
 * The replacement must be in place and use only constant extra memory.
 * 
 * INPUT:
 *  nums = [1,2,3]
 * OUTPUT: 
 *  [1,3,2]
 */

// PROVIDED SOLUTION
const nextPermutation = (nums) =>{
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) { i--; }
  if (i >= 0) {
      let j = nums.length - 1;
      while (nums[j] <= nums[i]) {
          j--;
      }
      swap(nums, i, j);
  }
  return JSON.stringify(reverse(nums, i + 1));
}

const reverse = (nums, start) =>{
  let i = start, j = nums.length - 1;
  while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
  }
  return nums;
}

const swap = (nums, i, j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// MY SOLUTION
var nextPermutation_2 = function(nums) {
  let s = nums.reduce((acc, val)=>acc+val, '');
  let numbers = [];
  nums.forEach(num => {
    numbers.push(num);
  })
  let min = nums.sort((a,b)=>a-b).join('');
  let max = nums.sort((a,b)=>b-a).join('');
  if(s === min){
    for(let i=nums.length-1;i>0;i--){
      if(numbers[i] > numbers[i-1]){
        let temp = numbers[i-1];
        numbers[i-1] = numbers[i];
        numbers[i] = temp;
        break;
      }
    }
  } else if(s === max) {
    numbers = [...min.split('').map(el => Number.parseInt(el))];
  } else {
    for(let i=nums.length-1;i>0;i--){
      if(numbers[i] > numbers[i-1]){
        let temp = numbers[i-1];
        numbers[i-1] = numbers[i];
        numbers[i] = temp;
        break;
      }
    }
  }
  nums = numbers
  return nums;
};

function checkTestCase(tc, nums){
  console.log(`Test Case ${tc}`);
  console.log(`Output: ${nextPermutation(nums)}`);
}

checkTestCase(1, [1,2,3]);
checkTestCase(2, [1,1,5]);
checkTestCase(3, [3,2,1]);