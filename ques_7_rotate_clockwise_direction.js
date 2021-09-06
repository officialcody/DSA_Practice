/***
 * QUESTION: Given an array, rotate the array by one position in clock-wise direction.
 * 
 * Input:
 * N = 5
 * A[] = {1, 2, 3, 4, 5}
 * Output:
 * 5 1 2 3 4
 */

function rotate_clockwise_direction(array) {
  let new_array = array;
  new_array.unshift(array[array.length - 1]);
  new_array.pop();
  return new_array;
}

function rotate_clockwise_direction_2(array) {
  let v = array[array.length - 1];
  for(let i=array.length-1;i>0;i--) {
    array[i] = array[i-1];
  }
  array[0] = v;
  return array;
}

function checkTestCase(tc, array){
  console.log(`Test Case ${tc}`);
  console.log(`Rotated Array: ${rotate_clockwise_direction_2(array)}`);
}

checkTestCase(1, [85, 25 ,1 ,32 ,54 ,6]);