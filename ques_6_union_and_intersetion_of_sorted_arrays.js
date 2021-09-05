/**
 * Given two arrays a[] and b[] of size n and m respectively. The task is to find union
 * between these two arrays.
 * Union of the two arrays can be defined as the set containing distinct elements from 
 * both the arrays. If there are repetitions, then only one occurrence of element should 
 * be printed in the union.
 * 
 * 
 */

function union_array(array_1, array_2) {
  return [...new Set([...array_1, ...array_2])].length;
}

function intersection_array(array_1, array_2){
  if(array_1.length >= array_2.length){
    return array_2.filter(el => array_1.includes(el)).length;
  } else if(array_1.length < array_2.length){
    return array_1.filter(el => array_2.includes(el)).length;
  }
}

function union_array_2(array_1, array_2){
  let new_set = new Set();
  for(let i=0;i<array_1.length;i++){
    new_set.add(array_1[i]);
  }
  for(let i=0;i<array_2.length;i++){
    new_set.add(array_2[i]);
  }
  return [...new_set].length;
}

function intersection_array_2(array_1, array_2){
  let new_set = [];
  let count = 0;
  let temp = 0;
  for(let i=0;i<array_1.length;i++){
    new_set.push(array_1[i]);
  }
  for(let i=0;i<array_2.length;i++){
    new_set.push(array_2[i]);
  }
  new_set.sort((a, b) => a-b);
  for(let i=0;i<new_set.length-1;i++){
    if(new_set[i] === new_set[i+1] && temp !== new_set[i]){
      count += 1;
      temp = new_set[i];
    }
  }
  return count;
}

function checkTestCase(tc, array_1, array_2){
  console.log(`Test Case ${tc}`);
  console.log(`Union Array: ${union_array(array_1, array_2)}`);
  console.log(`Intersection Array: ${intersection_array(array_1, array_2)}`);
  console.log(`Union Array: ${union_array_2(array_1, array_2)}`);
  console.log(`Intersection Array: ${intersection_array_2(array_1, array_2)}`);
}

checkTestCase(1, [85, 25 ,1 ,32 ,54 ,6], [85, 25, 6]);